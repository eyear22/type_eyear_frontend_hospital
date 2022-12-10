import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { PostRoom } from "../../redux/room";
import AddModal from "../common/AddModal";

type SilAddModalType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const SilAddModal: React.FC<SilAddModalType> = ({ open, setOpen }) => {
  const [roomNum, setRoomNum] = useState("");
  const [limit, setLimit] = useState("");
  const [icu, setIcu] = useState(false);
  const [wardName, setWardName] = useState("");
  const dispatch = useDispatch<any>();

  // 병동 등록
  const registerRoom = () => {
    dispatch(PostRoom(roomNum, limit, icu, wardName));
  };

  return (
    <>
      <AddModal title="병실추가" open={open} setOpen={setOpen}>
        <Wrap>
          <Title>병동 이름을 입력해주세요.</Title>
          <Input
            value={wardName}
            onChange={(e) => setWardName(e.target.value)}
            placeholder="21병동"
          />
          <Title>병실 호수를 입력해주세요.</Title>
          <Input
            value={roomNum}
            onChange={(e) => setRoomNum(e.target.value)}
            placeholder="201"
          />
          <Title>중환자실인 경우 선택해주세요.</Title>
          <ICUWrap>
            <input type="checkbox" onChange={(e) => setIcu(e.target.checked)} />
            <span>icu*</span>
          </ICUWrap>
          <Title>입원 가능한 최대인원을 입력해주세요.</Title>
          <Input
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            placeholder="26"
          />
          <Button onClick={registerRoom}>등록</Button>
        </Wrap>
      </AddModal>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const ICUWrap = styled.div`
  display: flex;
  margin-bottom: 40px;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #191919;
    margin-left: 10px;
  }
  input {
    width: 30px;
  }
`;

export default SilAddModal;
