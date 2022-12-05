import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledModal from "../common/StyledModal";

type DetailModalType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

axios.defaults.baseURL = "https://storage.googleapis.com"; //서버주소
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const MailDetailModal: React.FC<DetailModalType> = ({ open, setOpen }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    axios.get("/swu-eyear/1669650131968.txt").then((res) => {
      setText(res.data);
    });
  }, []);

  return (
    <StyledModal open={open} setOpen={setOpen}>
      <Video controls>
        <source
          src={"https://storage.googleapis.com/swu-eyear/1670248028905.mp4"}
          type="video/mp4"
        />
        <track
          kind="subtitles"
          src={require("./Test.vtt")}
          srcLang="ko"
          label="Korean"
        />
      </Video>
      <TextArea>{text}</TextArea>
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
