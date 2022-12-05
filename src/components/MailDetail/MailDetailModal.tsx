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
      <TextArea>
        엄마, 오늘은 승석이 때문에 속상해서 이런 늦은 시간에 영상 찍어서 보내.
        엄마는 지금쯤 자고 있겠지. 승석이 나이가 벌써 27살이잖아 이제 취업
        준비할 나이거든 근데 애가 생각이 없는 것 같아 지 나름대로 생각하고
        있는게 있는게 있으려나? 오늘 승석이 친구 대현이 놀러 왔거든. 대현이
        기억나? 저번에 우리랑 다같이 부산도 갔었는데. 아직까지도 승석이랑
        연락하고 지내더라고. 아무튼 대현이가 왔는데 얘는 이미 취업 했더라고
        .승석이 때문에 요새 무슨 직업이 안정적인가 알아보고 있는데 딱 대현이가
        그 직업들 중에 하나에 취업 했더라고. 물론 축하하고 대견스럽지만 일단
        우리 아들은 아니니까. 마냥 기분이 좋진 않더라고. 어제 대현이 가고 나서
        승석이랑 둘이 얘기해 봤는데, 미래에 무슨 직업을 가져야할지 모르겠고
        준비도 어떻게 할지도 모르겠더라. 물론 사회 초년생 이니까 쉽진 않겠지만
        적어도 노력은 해야 하지 않나 싶었어. 지금 승석이랑은 냉전 상태야. 다음
        주 쯤에 다시 얘기해 볼 것 같아. 내림이는 열심히 게임 공부하고 있어 자기
        적성에 맞는 것을 찾은 것 갖기도하고. 아무튼 승석이랑 이야기 잘 되면 알려
        줄게 잠자 엄마.
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
