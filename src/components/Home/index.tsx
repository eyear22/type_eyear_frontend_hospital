import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GetTodayMail } from "../../redux/hospital";
import MailDetailModal from "../MailDetail/MailDetailModal";
import HomeCalendar from "./HomeCalendar";
const PlusIcon = process.env.PUBLIC_URL + "/img/Home_plus.png";
const MinusIcon = process.env.PUBLIC_URL + "/img/Home_minus.png";

// 환자번호, 병동, 병실, 환지이름
const Home = () => {
  const [open, setOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(GetTodayMail());
  }, []);
  const mailList = useSelector((state: any) => state.hospital.data);
  console.log(mailList);
  return (
    <>
      <Container>
        <Wrap>
          <Title>병원 홈</Title>
          <Line />
          <HomeCalendar />
          <Box open={postOpen}>
            <h4>
              오늘의 영상우편
              <span>{mailList && mailList.today_posts.length}</span>
            </h4>
            <button onClick={() => setPostOpen(!postOpen)}>
              <img src={postOpen ? MinusIcon : PlusIcon} alt="" />
            </button>
          </Box>
          {postOpen && (
            <UnderBox>
              <div className="item" onClick={() => setOpen(true)}>
                <div className="num">001</div>
                <div className="name">박세희</div>
                <div className="hos">21병동/202호</div>
              </div>
              <div className="item" onClick={() => setOpen(true)}>
                <div className="num">002</div>
                <div className="name">박세희</div>
                <div className="hos">21병동/202호</div>
              </div>
            </UnderBox>
          )}

          <Box open={postOpen}>
            <h4>
              오늘의 비대면 면회<span>0</span>
            </h4>
            <button>
              <img src={PlusIcon} alt="" />
            </button>
          </Box>
          <Box open={postOpen}>
            <h4>
              오늘의 영상통화<span>0</span>
            </h4>
            <button>-</button>
          </Box>
        </Wrap>
        {open && <MailDetailModal open={open} setOpen={setOpen} />}
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

const Box = styled.div<{ open: boolean }>`
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background: #e5edff;
    height: 36px;
    width: 36px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.open ? "#EFF0F6" : "#E5EDFF")};
    img {
      width: 12px;
    }
  }
`;

const UnderBox = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 95px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #eff0f6;
  border-radius: 20px;
  .item {
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 16px;
    border-radius: 10px;
    white-space: pre;
    cursor: pointer;
    .num {
      width: 10%;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #000000;
    }
    .name {
      width: 70%;
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #000000;
    }
    .hos {
      width: 20%;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.154px;
      color: #70768c;
    }
    &:hover {
      background-color: #eff0f6;
    }
  }
`;

export default Home;
