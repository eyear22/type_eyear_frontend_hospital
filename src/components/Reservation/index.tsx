import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { GetReservation } from "../../redux/reservation";
import ReservationList from "./ReservationList";

const Reservation = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(GetReservation());
  }, []);

  return (
    <>
      <Container>
        <Wrap>
          <Title>예약 관리</Title>
          <Line />
          <ReservationList />
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

export default Reservation;
