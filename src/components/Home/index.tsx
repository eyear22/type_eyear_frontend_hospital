import styled from "styled-components";
import HomeCalendar from "./HomeCalendar";

const Home = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Title>병원 홈</Title>
          <Line />
          <HomeCalendar />
          <Box>
            <h4>
              오늘의 영상우편<span>5</span>
            </h4>
            <button>+</button>
          </Box>
          <Box>
            <h4>
              오늘의 비대면 면회<span>3</span>
            </h4>

            <button>+</button>
          </Box>
          <Box>
            <h4>
              오늘의 영상통화<span>0</span>
            </h4>
            <button>-</button>
          </Box>
        </Wrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 246px;
  padding: 37px 56px 0px 32px;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 37px;
  margin-bottom: 32px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  background: #ffffff;
  border: 1px solid #eff0f6;
  border-radius: 20px;
  margin-top: 24px;
  h4 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    color: #2f2f2f;
  }
  span {
    margin-left: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    color: rgba(47, 47, 47, 0.4);
  }
  button {
    margin-left: auto;
    background: #e5edff;
    height: 36px;
    width: 36px;
    border-radius: 100px;
    border: none;
    text-align: center;
    cursor: pointer;
    color: #0029ff;
    font-size: 22px;
  }
`;

export default Home;
