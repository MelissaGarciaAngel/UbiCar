import React from "react";
import DatePicker from "react-datepicker";
import { CustomHeader } from "../pages/reserve/ReserveStyles";
import "../pages/reserve/calendarStyles.css";


const Calendar = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  let reservedDates = []
  let invalidDates = []
  invalidDates = JSON.parse(window.localStorage.getItem('Dates'))
  invalidDates.shift()
  const toDate = () => {
    invalidDates.map((reserve) =>
      reservedDates.push({
        start: new Date(reserve.start),
        end: new Date(reserve.end),
      })
    )
  }
  toDate()
  return (
    <CustomHeader>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        monthsShown={2}
        inline={true}
        excludeDateIntervals={reservedDates}
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
        selectsRange
        startDate={startDate}
        showPreviousMonths={false}
        endDate={endDate}
        dateFormat="yyyy-MM-dd"
      />
    </CustomHeader>
  );
};

export default Calendar;
