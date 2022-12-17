import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { PostPatient } from "../../redux/patient";
import AddModal from "../common/AddModal";

type PatientAddModalType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const PatientAddModal: React.FC<PatientAddModalType> = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [patNumber, setPatNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [inDate, setInDate] = useState("");
  const [infoNumber, setInfoNumber] = useState("");
  const [wardName, setWardName] = useState("");
  const [roomNum, setRoomNum] = useState("");
  const dispatch = useDispatch<any>();

  // 환자 등록
  const registerPatient = () => {
    dispatch(
      PostPatient(name, patNumber, birth, inDate, infoNumber, wardName, roomNum)
    );
  };

  return (
    <>
      <AddModal title="환자추가" open={open} setOpen={setOpen}>
        <Wrap>
          <Scroll>
            <Title>환자 이름을 입력해주세요.</Title>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="박노인"
            />
            <Title>환자 번호를 입력해주세요.</Title>
            <Input
              value={patNumber}
              onChange={(e) => setPatNumber(e.target.value)}
              placeholder="PA1231"
            />
            <Title>환자의 생년월일을 입력해주세요.</Title>
            <Input
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              placeholder="1959-10-10"
            />
            <Title>환자의 입원날짜를 입력해주세요.</Title>
            <Input
              value={inDate}
              onChange={(e) => setInDate(e.target.value)}
              placeholder="2013-03-10"
            />
            <Title>환자의 주민번호를 입력해주세요.</Title>
            <Input
              value={infoNumber}
              onChange={(e) => setInfoNumber(e.target.value)}
              placeholder="000000-0000000"
            />
            <Title>환자의 병동을 입력해주세요.</Title>
            <Input
              value={wardName}
              onChange={(e) => setWardName(e.target.value)}
              placeholder="201동"
            />
            <Title>환자의 병실을 입력해주세요.</Title>
            <Input
              value={roomNum}
              onChange={(e) => setRoomNum(e.target.value)}
              placeholder="100"
            />
          </Scroll>
          <Button onClick={registerPatient}>등록</Button>
        </Wrap>
      </AddModal>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 570px;
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Title = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #191919;
  margin-bottom: 8px;
  text-align: start;
`;

const Input = styled.input`
  border: 1px solid #a5a5a5;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  display: flex;
  margin-top: auto;
  margin-left: auto;
  background: #0029ff;
  border-radius: 8px;
  padding: 10px 16px;
  border: none;
  width: 57px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
`;

export default PatientAddModal;
