import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LoginAPI } from "../../redux/auth";
import { setCookie } from "../../util/cookie";

const CloseImg = process.env.PUBLIC_URL + "/img/login_close.png";

const Login = () => {
  const [id, setId] = useState("test_id2");
  const [password, setPassword] = useState("test_password2");

  const auth = useSelector((state: any) => state.auth.data);

  const dispatch = useDispatch<any>();
  const LoginBtn = () => {
    dispatch(LoginAPI(id, password));
    if (auth.message === "success") {
      setCookie("access_token", auth.tokens.access_token);
      setCookie("refresh_token", auth.tokens.refresh_token);
    }
  };
  return (
    <>
      <Container>
        <Left></Left>
        <Right>
          <Wrap>
            <h1>병원이신가요?</h1>
            <h4>아이어로 비대면 면회 관리를 편하게!</h4>
            <input
              placeholder="병원 고유 번호를 입력해주세요."
              className="unique"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {/* <div className="warning">
              <img src={CloseImg} alt="" />
              등록된 고유번호가 아닙니다.
            </div> */}
            <input
              placeholder="병원 비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <div className="warning">
              <img src={CloseImg} alt="" />
              올바른 비밀번호가 아닙니다.
            </div> */}
            <FindPwd>
              <h4>비밀번호 찾기</h4>
            </FindPwd>
            <button onClick={LoginBtn}>로그인</button>
            <Signup>
              <h4>아이어가 처음이산가요? 계정 등록하기</h4>
            </Signup>
          </Wrap>
        </Right>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
  background-color: #0049fb;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ffffff;
  color: black;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  height: 398px;
  h1 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
  }
  h4 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 16px;
  }
  input {
    padding: 16px 24px 16px 56px;
    width: 100%;
    border: 0.5px solid #a5a5a5;
    border-radius: 4px;
    margin-bottom: 4px;
    margin-top: 16px;
    background-image: url("/type_eyear_frontend_hospital/img/Lock.png");
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: 24px center;
    &::placeholder {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: #a5a5a5;
    }
  }
  .unique {
    background-image: url("/type_eyear_frontend_hospital/img/Shield_Check.png");
  }
  .warning {
    display: flex;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    color: #004c5e;
    img {
      width: 12px;
      height: 12px;
      margin-right: 2px;
    }
  }
  button {
    cursor: pointer;
    background: #0049fb;
    border-radius: 8px;
    border: none;
    padding: 16px 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 48px;
  }
`;

const FindPwd = styled.div`
  display: flex;
  text-align: right;
  justify-content: flex-end;
  margin-top: 8px;
  h4 {
    cursor: pointer;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    color: #a5a5a5;
    width: 55px;
  }
`;

const Signup = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 16px;
  h4 {
    cursor: pointer;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #a5a5a5;
  }
`;

export default Login;
