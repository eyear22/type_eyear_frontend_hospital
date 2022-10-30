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
        <div className="hamburger">
          <img alt="" src={HamBurgerImg} onClick={() => setOpen(!open)} />
        </div>
      </Top>
      <Search active={searchInput !== ""}>
        <input
          placeholder="환자 검색"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onClick={clickSearchButton}
        />
        <img src={HamBurgerImg} alt="" />
      </Search>
      <MenuLink href="/">
        <div>
          <img src={HomgImg} alt="" />
          병원 홈
        </div>
      </MenuLink>
      <MenuLink href="/">
        <div>
          <img src={HomgImg} alt="" />
          병실 관리
        </div>
      </MenuLink>
      <MenuLink href="/">
        <div>
          <img src={HomgImg} alt="" />
          환우 관리
        </div>
      </MenuLink>
      <MenuLink href="/">
        <div>
          <img src={HomgImg} alt="" />
          예약 관리
        </div>
      </MenuLink>
      <Bottom>
        <MenuLink href="/">
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
  width: ${(props) => (props.open ? "311.5px" : "94px")};
  height: 100vh;
  padding: 40px 17.75px;
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
  .logo {
    width: 52.5px;
    height: 52.5px;
    background-color: #bfb2ff;
    margin-right: 8px;
  }
  h1 {
    display: ${(props) => !props.open && "none"};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
  }
  .hamburger {
    display: ${(props) => (!props.open && props.logoHover ? "block" : "none")};
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

const Search = styled.div<{ active: boolean }>`
  position: relative;
  margin-bottom: 32px;
  input {
    width: 100%;
    background: #333333;
    background-image: url("/type_eyear_frontend_hospital/img/search.png");
    background-repeat: no-repeat;
    background-size: 20.5px;
    background-position: 16px center;
    border-radius: 8px;
    border: none;
    padding: 16.75px 52.5px 16.75px 52.5px;
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

const MenuLink = styled.a`
  text-decoration: none;
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
`;

const Bottom = styled.div`
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
