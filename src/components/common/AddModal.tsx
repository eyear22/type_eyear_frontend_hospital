import styled from "styled-components";
const CloseIcon = process.env.PUBLIC_URL + "/img/Close_XL.png";

type ModalType = {
  title: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  children: React.ReactNode;
};

const AddModal: React.FC<ModalType> = ({ title, open, setOpen, children }) => {
  const close = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Wrap>
        <Top>
          <h1>{title}</h1>
        </Top>
        <CloseButton src={CloseIcon} alt="" onClick={close} />
        <Line />
        <Content>{children}</Content>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Wrap = styled.div`
  position: absolute;
  width: 440px;
  height: 686px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 21px;
`;

const Top = styled.div`
  display: flex;
  margin: 28px 28px 0 28px;
  h1 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    color: #2f2f2f;
  }
`;

const CloseButton = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 27px;
  right: 26px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  cursor: pointer;
`;

const Line = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 2px;
  background: #f4f5f7;
  margin: 12px 26px 0 26px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  margin: 26px;
`;

export default AddModal;
