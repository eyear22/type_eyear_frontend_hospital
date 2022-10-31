import { useState } from "react";
import styled from "styled-components";

const HamBurgerImg = process.env.PUBLIC_URL + "/img/align_justify.png";
const HomgImg = process.env.PUBLIC_URL + "/img/home.png";
const MoreImg = process.env.PUBLIC_URL + "/img/more-vertical.png";
const AvatarImg = process.env.PUBLIC_URL + "/img/avatar.png";

export type SideMenuType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  searchInput: string;
  setSearchInput: (v: string) => void;
};

const SideMenu: React.FC<SideMenuType> = ({
  open,
  setOpen,
  searchInput,
  setSearchInput,
}) => {
  const [logoHover, setLogoHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [hospitalHover, setHospitalHover] = useState(false);
  const [patientHover, setPatientlHover] = useState(false);
  const [reserveHover, setReserveHover] = useState(false);
  const [alarmHover, setAlarmHover] = useState(false);

  // 검색 버튼
  const clickSearchButton = () => console.log(searchInput);

  return (
    <Container open={open}>
      <Top
        open={open}
        logoHover={logoHover}
        onMouseOver={() => setLogoHover(true)}
        onMouseOut={() => setLogoHover(false)}
      >
        <img className="logo" alt="" />
        <h1>병원관리</h1>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <img alt="" src={HamBurgerImg} />
        </div>
      </Top>
      <Search active={searchInput !== ""} open={open}>
        <input
          placeholder={open ? "환자 검색" : ""}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onClick={clickSearchButton}
          disabled={!open}
        />
        <img src={HamBurgerImg} alt="" />
      </Search>
      <MenuLink
        href="/"
        open={open}
        hover={homeHover}
        onMouseOver={() => setHomeHover(true)}
        onMouseOut={() => setHomeHover(false)}
      >
        <div>
          <img src={HomgImg} alt="" />
          <span>병원 홈</span>
        </div>
      </MenuLink>
      <MenuLink
        href="/"
        open={open}
        hover={hospitalHover}
        onMouseOver={() => setHospitalHover(true)}
        onMouseOut={() => setHospitalHover(false)}
      >
        <div>
          <img src={HomgImg} alt="" />
          <span>병실 관리</span>
        </div>
      </MenuLink>
      <MenuLink
        href="/"
        open={open}
        hover={patientHover}
        onMouseOver={() => setPatientlHover(true)}
        onMouseOut={() => setPatientlHover(false)}
      >
        <div>
          <img src={HomgImg} alt="" />
          <span>환우 관리</span>
        </div>
      </MenuLink>
      <MenuLink
        href="/"
        open={open}
        hover={reserveHover}
        onMouseOver={() => setReserveHover(true)}
        onMouseOut={() => setReserveHover(false)}
      >
        <div>
          <img src={HomgImg} alt="" />
          <span>예약 관리</span>
        </div>
      </MenuLink>
      <Bottom>
        <MenuLink
          href="/"
          open={open}
          hover={alarmHover}
          onMouseOver={() => setAlarmHover(true)}
          onMouseOut={() => setAlarmHover(false)}
        >
          <div>
            <img src={HomgImg} alt="" />
            알림
            <span className="alarm">12</span>
          </div>
        </MenuLink>
        <Profile>
          <div className="ProfileArea">
            <img className="profileImg" src={AvatarImg} alt="" />
            <div className="status" />
          </div>
          <div className="text">
            아이어 요양병원
            <p>eyear@gmail.com</p>
          </div>
          <img className="more" src={MoreImg} alt="" />
        </Profile>
      </Bottom>
    </Container>
  );
};

const Container = styled.section<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #2c2c2c;
  width: ${(props) => (props.open ? "311.5px" : "90px")};
  height: 100vh;
  padding: 40px 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

const Top = styled.div<{ open: boolean; logoHover: boolean }>`
  display: flex;
  align-items: center;
  height: 52.5px;
  margin-bottom: 32px;
  padding: 0 17.75px;
  .logo {
    width: 52.5px;
    height: 52.5px;
    background-color: #bfb2ff;
    margin-right: ${(props) => (props.open ? "8px" : 0)};
    cursor: pointer;
  }
  h1 {
    display: ${(props) => !props.open && "none"};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
  }
  .hamburger {
    display: ${(props) =>
      props.open || (!props.open && props.logoHover) ? "block" : "none"};
    position: ${(props) => (props.open ? "static" : "absolute")};
    text-align: center;
    margin-left: auto;
    cursor: pointer;
    top: ${(props) => !props.open && "36px"};
    left: ${(props) => !props.open && "84px"};
    background-color: ${(props) => !props.open && "#1e1e1e"};
    padding: ${(props) => !props.open && "14px 16px"};
    border-radius: 8px;
    border: none;
    img {
      width: 28.5px;
      height: 28.5px;
    }
  }
`;

const Search = styled.div<{ active: boolean; open: boolean }>`
  position: relative;
  margin-bottom: 32px;
  padding: 0 17.75px;
  input {
    width: 100%;
    padding: ${(props) =>
      props.open ? "16.75px 52.5px 16.75px 52.5px" : "16px 0px"};
    background: #333333;
    background-image: url("/type_eyear_frontend_hospital/img/search.png");
    background-repeat: no-repeat;
    background-size: 20.5px;
    background-position: 16px center;
    border-radius: 8px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #9e9e9e;
    outline: none;
    &::placeholder {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #9e9e9e;
    }
  }
  img {
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;
    top: 12px;
    right: 16px;
    width: 28.5px;
    height: 28.5px;
    cursor: pointer;
  }
`;

const MenuLink = styled.a<{ open: boolean; hover: boolean }>`
  text-decoration: none;
  padding: 0 17.75px;
  div {
    display: flex;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #9e9e9e;

    text-align: center;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    border: none;
    &:hover {
      background-color: #333333;
    }
  }
  img {
    width: 20.5px;
    height: 20.5px;
    margin-right: 16px;
  }
  .alarm {
    margin-left: auto;
    padding: 4px 8px;
    background: #bfb2ff;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #2c2c2c;
  }
  span {
    background-color: ${(props) => (props.open ? "rgb(0,0,0,0)" : "#1e1e1e")};
    position: ${(props) => (props.open ? "static" : "absolute")};
    white-space: nowrap;
    left: 80px;
    padding: ${(props) => !props.open && "16px"};
    border-radius: 4px;
    display: ${(props) =>
      props.open || (!props.open && props.hover) ? "block" : "none"};
  }
`;

const Bottom = styled.div`
  padding: 0 17.75px;
  margin-top: auto;
`;

const Profile = styled.div`
  display: flex;
  margin-top: 32px;
  background: #333333;
  border-radius: 8px;
  height: 89px;
  align-items: center;
  padding: 24px 16px;
  .ProfileArea {
    position: relative;
    margin-right: 16px;
    .profileImg {
      width: 40px;
      height: 40px;
      border-radius: 999px;
      border-radius: 999px;
    }
    .status {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #b5ffc1;
      border-radius: 999px;
      right: 0;
      top: 0;
    }
  }
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #ffffff;
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #808080;
  }
  .more {
    width: 20px;
    height: 20px;
    margin-left: auto;
    cursor: pointer;
  }
`;

export default SideMenu;
