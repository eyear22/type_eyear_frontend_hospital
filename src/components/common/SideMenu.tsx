import styled from "styled-components";

const SideMenu = () => {
  return (
    <Container>
      <Logo />
      <Top>
        <MenuWrap>
          <h1>메뉴</h1>
          <MenuLink href={process.env.PUBLIC_URL + "/"}>
            <div className="Home">
              <span>병원 홈</span>
            </div>
          </MenuLink>
          <MenuLink href={process.env.PUBLIC_URL + "/room"}>
            <div className="Clipboard">
              <span>병실 관리</span>
            </div>
          </MenuLink>
          <MenuLink href={process.env.PUBLIC_URL + "/patient"}>
            <div className="User_Empty">
              <span>환우 관리</span>
            </div>
          </MenuLink>
          <MenuLink href={process.env.PUBLIC_URL + "/reservation"}>
            <div className="Calendar_Days">
              <span>예약 관리</span>
            </div>
          </MenuLink>
        </MenuWrap>
        <MenuWrap>
          <h1 className="manage">계정 관리</h1>
          <MenuLink href={process.env.PUBLIC_URL + "/manage"}>
            <div className="Settings">
              <span>병원 계정 수정</span>
            </div>
          </MenuLink>
        </MenuWrap>
      </Top>
      <Bottom>
        <p>아이어로 간편한 비대면 면회 관리</p>
        <span>ver.1</span>
      </Bottom>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 246px;
  height: 100vh;
  padding: 32px 24px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

const Logo = styled.div`
  background-color: #d9d9d9;
  height: 60px;
  margin: 0 8px 16px 8px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.2px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 8px;
    margin-left: 8px;
  }
  .manage {
    margin-top: 160px;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  .Home {
    background-image: url("/type_eyear_frontend_hospital/img/Home.png");
    &:hover {
      background-image: url("/type_eyear_frontend_hospital/img/Home_b.png");
    }
  }
  .Clipboard {
    background-image: url("/type_eyear_frontend_hospital/img/Clipboard.png");
    &:hover {
      background-image: url("/type_eyear_frontend_hospital/img/Clipboard_b.png");
    }
  }
  .User_Empty {
    background-image: url("/type_eyear_frontend_hospital/img/User_Empty.png");
    &:hover {
      background-image: url("/type_eyear_frontend_hospital/img/User_Empty_b.png");
    }
  }
  .Calendar_Days {
    background-image: url("/type_eyear_frontend_hospital/img/Calendar_Days.png");
    &:hover {
      background-image: url("/type_eyear_frontend_hospital/img/Calendar_Days_b.png");
    }
  }
  .Settings {
    background-image: url("/type_eyear_frontend_hospital/img/Settings.png");
    &:hover {
      background-image: url("/type_eyear_frontend_hospital/img/Settings_b.png");
    }
  }
  div {
    display: flex;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
    text-align: center;
    align-items: center;
    padding: 14px 16px;
    border-radius: 8px;
    border: none;

    background-repeat: no-repeat;
    background-size: 24px;
    background-position: 16px center;
    &:hover {
      background: rgba(0, 72, 255, 0.1);
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: 16px center;
      color: #0049fb;
    }
  }
  span {
    white-space: nowrap;
    border-radius: 4px;
    margin-left: 40px;
  }
`;

const Bottom = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 16px;
  border-top: 1px solid #e5e5e5;
  p {
    width: 66px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    color: #000000;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export default SideMenu;
