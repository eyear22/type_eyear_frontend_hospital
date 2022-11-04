import moment from "moment";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const HomeCalendar = () => {
  return (
    <>
      <Wrap>
        <StyledCalendar
          locale="en-GB"
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
        />
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 285.65px;
  height: 322px;
  background-color: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 16px;
  padding: 18px;
  .react-calendar__navigation {
    height: 26px;
    margin-bottom: 0.5em;
  }
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__tile {
    color: #1b59f8;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
  }
  .react-calendar__month-view__weekdays {
    abbr {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 9px;
      line-height: 11px;
      text-align: center;
      text-transform: uppercase;
      color: #7e818c;
      text-decoration: none;
    }
  }
`;

export default HomeCalendar;
