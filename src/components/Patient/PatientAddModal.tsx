import styled from "styled-components";
import AddModal from "../common/AddModal";

type PatientAddModalType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const PatientAddModal: React.FC<PatientAddModalType> = ({ open, setOpen }) => {
  return (
    <>
      <AddModal title="환자추가" open={open} setOpen={setOpen}>
        <Wrap>
          <Scroll>
            <Title>환자 이름을 입력해주세요.</Title>
            <Input placeholder="박노인" />
            <Title>환자 번호를 입력해주세요.</Title>
            <Input placeholder="PA1231" />
            <Title>환자의 생년월일을 입력해주세요.</Title>
            <Input placeholder="1959-10-10" />
            <Title>환자의 입원날짜를 입력해주세요.</Title>
            <Input placeholder="2013-03-10" />
            <Title>환자의 주민번호를 입력해주세요.</Title>
            <Input placeholder="000000-0000000" />
            <Title>환자의 병동을 입력해주세요.</Title>
            <Input placeholder="201동" />
            <Title>환자의 병실을 입력해주세요.</Title>
            <Input placeholder="100" />
          </Scroll>
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
