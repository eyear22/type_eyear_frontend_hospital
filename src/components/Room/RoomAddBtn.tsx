import styled from "styled-components";
const PlusIcon = process.env.PUBLIC_URL + "/img/Room_add.png";

type RoomAddBtnType = {
  setDongOpen: (v: boolean) => void;
  setSilOpen: (v: boolean) => void;
};

const RoomAddBtn: React.FC<RoomAddBtnType> = ({ setDongOpen, setSilOpen }) => {
  return (
    <Container>
      <Button onClick={() => setDongOpen(true)}>
        병동등록
        <img src={PlusIcon} alt="" />
      </Button>
      <Button onClick={() => setSilOpen(true)}>
        병실등록
        <img src={PlusIcon} alt="" />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b59f8;
  border-radius: 10px;
  padding: 8px 12px;
  width: 110px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export default RoomAddBtn;
