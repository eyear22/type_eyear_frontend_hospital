import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ApproveReservation } from "../../redux/reservation";
const PlusIcon = process.env.PUBLIC_URL + "/img/Home_plus.png";
const MinusIcon = process.env.PUBLIC_URL + "/img/Home_minus.png";

const timeData = [
  { value: 0, name: "10:00~10:50" },
  { value: 1, name: "11:00~11:50" },
  { value: 2, name: "13:00~13:50" },
  { value: 3, name: "14:00~14:50" },
  { value: 4, name: "15:00~15:50" },
  { value: 5, name: "16:00~16:50" },
  { value: 6, name: "17:00~17:50" },
];

const ReservationList = () => {
  const [approve, setApprove] = useState(false);
  const [request, setRequest] = useState(false);
  const dispatch = useDispatch<any>();

  const reservations = useSelector((state: any) => state.reservation.data);

  // 시간 텍스트로 리턴
  const exportTime = (num: number) =>
    timeData.map((item) => item.value === num && item.name);

  const clickApproveBtn = (id: number, state: number) => {
    dispatch(ApproveReservation(id, state));
    window.location.reload();
  };

  return (
    <>
      <Container>
        <Box open={approve}>
          <h4>
            예약된 면회
            <span>
              {reservations &&
                reservations.reservations &&
                reservations.reservations["1"].length}
            </span>
          </h4>
          <button onClick={() => setApprove(!approve)}>
            <img src={approve ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {approve && (
          <UnderBox>
            {reservations &&
              reservations.reservations &&
              reservations.reservations["1"].map((item: any, index: number) => (
                <Item key={index}>
                  <div className="face">
                    {item.reservation_faceToface ? "대면" : "비대면"}
                  </div>
                  <div className="time">
                    {exportTime(item.reservation_timetableIndex)}
                  </div>
                  <div className="num">{item.patient_patNumber}</div>
                  <div className="name">{item.patient_name}</div>
                  <div className="ho">
                    {item.ward_name + "/" + item.room_roomNumber + "호"}
                  </div>
                  <div className="date">{item.reservation_reservationDate}</div>
                </Item>
              ))}
          </UnderBox>
        )}
        <Box open={request}>
          <h4>
            미승인된 면회
            <span>
              {reservations &&
                reservations.reservations &&
                reservations.reservations["0"].length}
            </span>
          </h4>
          <button onClick={() => setRequest(!request)}>
            <img src={request ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {request && (
          <UnderBox>
            {reservations &&
              reservations.reservations &&
              reservations.reservations["0"].map((item: any, index: number) => (
                <Item key={index}>
                  <div className="face">
                    {item.reservation_faceToface ? "대면" : "비대면"}
                  </div>
                  <div className="time">
                    {exportTime(item.reservation_timetableIndex)}
                  </div>
                  <div className="num">{item.patient_patNumber}</div>
                  <div className="name">{item.patient_name}</div>
                  <div className="ho">
                    {item.ward_name + "/" + item.room_roomNumber + "호"}
                  </div>
                  <div className="date">{item.reservation_reservationDate}</div>
                  <Button
                    deny={false}
                    onClick={() => clickApproveBtn(item.reservation_id, 1)}
                  >
                    승인
                  </Button>
                  <Button
                    deny
                    onClick={() => clickApproveBtn(item.reservation_id, -1)}
                  >
                    거절
                  </Button>
                </Item>
              ))}
          </UnderBox>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  background: #ffffff;
  border: 1px solid #eff0f6;
  border-radius: 20px;
  box-sizing: border-box;
  margin-bottom: 24px;
  h4 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    color: #2f2f2f;
    margin: 0;
  }
  span {
    margin-left: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    color: rgba(47, 47, 47, 0.4);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background: #e5edff;
    height: 36px;
    width: 36px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.open ? "#EFF0F6" : "#E5EDFF")};
    img {
      width: 12px;
    }
  }
`;

const UnderBox = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 95px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #eff0f6;
  border-radius: 20px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 16px;
  border-radius: 10px;
  white-space: pre;
  box-sizing: border-box;
  align-items: center;
  .face {
    width: 10%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.154px;
    color: #70768c;
  }
  .time {
    width: 60%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .num {
    width: 5%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .name {
    width: 5%;
    font-family: "Pretendard";
    margin-left: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .ho {
    width: 10%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .date {
    display: flex;
    justify-content: flex-end;
    width: 10%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #000000;
  }
  &:hover {
    background-color: #eff0f6;
  }
`;

const Button = styled.button<{ deny: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.deny ? "#ec5f59" : "#1b59f8")};
  border-radius: 10px;
  padding: 8px 12px;
  width: 80px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 70px;
  :last-child {
    margin-left: 10px;
  }
`;

export default ReservationList;
