import styled from "styled-components";

const SideMenu = () => {
  return (
    <Container>
      <Top>
        <img className="logo" alt="" />
        <h1>병원관리</h1>
        <div className="hamburger" />
      </Top>
      <Title>병원관리</Title>
      SideMenu
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #2c2c2c;
  width: 311.5px;
  height: 100vh;
  padding: 40px 17.75px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

const Top = styled.div`
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
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
  }
  .hamburger {
    display: flex;
    width: 28.5px;
    height: 28.5px;
    background-color: beige;
    background-image: url("/img/align_justify.png");
    margin-left: auto;
  }
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
`;

export default SideMenu;
