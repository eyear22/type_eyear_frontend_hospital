import styled from "styled-components";
const PlusIcon = process.env.PUBLIC_URL + "/img/Room_add.png";

type PatientddBtnType = {
  setOpen: (v: boolean) => void;
};

const PatientAddBtn: React.FC<PatientddBtnType> = ({ setOpen }) => {
  return (
    <Container>
      <Button onClick={() => setOpen(true)}>
        환자등록
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
  img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
`;

export default PatientAddBtn;
