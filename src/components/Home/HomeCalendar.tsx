import moment from "moment";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const marks = [
  "07-11-2022",
  "08-11-2022",
  "02-12-2022",
  "20-12-2022",
  "22-12-2022",
];

const HomeCalendar = () => {
  return (
    <>
      <Wrap>
        <StyledCalendar
          locale="en-GB"
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
          tileClassName={({ date, view }) => {
            if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
              return "highlight";
            } else return "";
          }}
        />
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 285.65px;
  background-color: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 16px;
  padding: 24px 18px;
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__label {
    pointer-events: none;
  }
  .react-calendar__navigation__label > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #0f2552;
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
  .react-calendar__tile--now {
    background: #ffffff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffff;
  }
  .highlight {
    background: #c8dbff;
    border-radius: 40px;
  }
`;

export default HomeCalendar;
