import styled from "styled-components";
import AddModal from "../common/AddModal";

type DongAddModalType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const DongAddModal: React.FC<DongAddModalType> = ({ open, setOpen }) => {
  return (
    <>
      <AddModal title="병동추가" open={open} setOpen={setOpen}>
        <Wrap>
          <Title>병동 이름을 입력해주세요.</Title>
          <Input placeholder="201동" />
          <Button>등록</Button>
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

export default DongAddModal;
