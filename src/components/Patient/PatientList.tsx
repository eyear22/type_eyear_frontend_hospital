import { useSelector } from "react-redux";
import styled from "styled-components";
const SearchIcon = process.env.PUBLIC_URL + "/img/Search.png";

const PatientList = () => {
  const patients = useSelector((state: any) => state.patient.data);
  return (
    <>
      <Container>
        <Title>
          등록된 환자<span>{patients && patients.patients.length}</span>
        </Title>
        <Line />
        <InputArea>
          <div className="search">
            <img src={SearchIcon} alt="" />
            <input placeholder="Search" />
          </div>
          <div className="num">
            <div className="sort">환자번호</div>
          </div>
          <div className="birth">
            <div className="sort">생년월일</div>
          </div>
          <div className="ho">
            <div className="sort">병실</div>
          </div>
          <div className="date">
            <div className="sort">입원일</div>
          </div>
        </InputArea>
        <Content>
          {patients &&
            patients.patients.map((item: any, index: number) => (
              <Item key={item.patient_id}>
                <div className="index">{item.patient_id}</div>
                <div className="name">{item.patient_name}</div>
                <div className="num">{item.patient_patNumber}</div>
                <div className="birth">{item.patient_birth}</div>
                <div className="ho">
                  {item.ward_name + "/" + item.room_roomNumber + "호"}
                </div>
                <div className="date">{item.patient_inDate}</div>
              </Item>
            ))}
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #ffffff;
  border: 1px solid #eff0f6;
  border-radius: 20px;
  width: 100%;
  height: 586px;
  padding: 28px 27px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: #2f2f2f;
  margin-bottom: 12px;
  span {
    margin-left: 5px;
    color: rgba(47, 47, 47, 0.4);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #f4f5f7;
  border-radius: 20px;
  margin-bottom: 22px;
`;

const InputArea = styled.div`
  display: flex;
  margin-bottom: 24px;
  .search {
    display: flex;
    width: 70%;
    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      cursor: pointer;
    }
    input {
      border: none;
      width: 100%;
      :focus {
        outline: none;
      }
      &::placeholder {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 120%;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .num {
    display: flex;
    justify-content: center;
    width: 10%;
  }
  .ho {
    display: flex;
    justify-content: center;
    width: 10%;
  }
  .birth {
    display: flex;
    justify-content: center;
    width: 10%;
  }
  .date {
    display: flex;
    justify-content: center;
    width: 10%;
  }
  .sort {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02px;
    width: 81px;
    height: 27px;
    background: #eff0f6;
    border-radius: 7px;
    color: #4f5e74;
  }
`;

const Content = styled.div`
  display: flex;
  height: 428px;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  .index {
    display: flex;
    width: 10%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .name {
    display: flex;
    width: 60%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .birth {
    display: flex;
    justify-content: center;
    width: 10%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.154px;
    color: #70768c;
  }
  .ho {
    display: flex;
    justify-content: center;
    width: 10%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.154px;
    color: #70768c;
  }
  .num {
    display: flex;
    width: 10%;
    justify-content: center;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .date {
    display: flex;
    justify-content: center;
    width: 10%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.154px;
    color: #70768c;
  }
`;

export default PatientList;
