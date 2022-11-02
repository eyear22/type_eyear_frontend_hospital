import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Title>병원 홈</Title>
          <Line />
          Home
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

export default Home;
