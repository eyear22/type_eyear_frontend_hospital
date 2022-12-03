import React from "react";
import styled from "styled-components";
import StyledModal from "../common/StyledModal";

type DetailModalType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const MailDetailModal: React.FC<DetailModalType> = ({ open, setOpen }) => {
  return (
    <StyledModal open={open} setOpen={setOpen}>
      <Video controls>
        <source type="video/mp4" />
        {/* <track kind="subtitles" src={VTT} srcLang="ko" label="Korean" /> */}
      </Video>
      <TextArea>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
        elementum ac posuere turpis fringilla. Leo lacus fermentum interdum arcu
        in integer fermentum, arcu. Magna quis sapien nulla facilisis fermentum
        sit metus fringilla consequat. Faucibus nascetur in at risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sapien elementum ac
        posuere turpis fringilla. Leo lacus fermentum ifringilla consequat.
        Faucibus nascetur in at risus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sapien elementum ac posuere turpis fringilla. Leo lacus
        fermentum ifringilla consequat. Faucibus nascetur in at risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sapien elementum ac
        posuere turpis fringilla. Leo lacus fermentum interdum arcu in integer
        fermentum, arcetus fringillaum sit metus fringilla consequaerdum arcu in
        integer fermentum, arcu.
      </TextArea>
    </StyledModal>
  );
};

const Video = styled.video`
  width: 529.28px;
  height: 308px;
  border-radius: 24.9191px;
`;

const TextArea = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #dfe0e4;
  border-radius: 6px;
  width: 453px;
  height: 418px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 19.6556px;
  line-height: 25px;
  color: #000000;
  text-align: left;
  box-sizing: border-box;
  padding: 16px;
  overflow-y: scroll;
`;

export default MailDetailModal;
