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
  width: 1128px;
  height: 686px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 21px;
`;

const Top = styled.div`
  display: flex;
  background: #f7f7f8;
  height: 124px;
  border-radius: 21px 21px 0px 0px;
  h1 {
    margin-left: 48px;
    margin-top: 67px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 20.2252px;
    line-height: 24px;
    color: #000000;
  }
`;

const CloseButton = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 55px;
  right: 45px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 56px;
`;

export default AddModal;
