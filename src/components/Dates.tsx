import { days, months } from "../data/Data";
import { useEffect, useState } from "react";

function Dates(): JSX.Element {
  const now: Date = new Date();
  const month_short_name = months;
  const day_short_name = days;

  const [date, setDate] = useState(now.getDate());
  const [month, setMonth] = useState(now.getMonth());
  const [day, setDay] = useState(now.getDay());

  // Update Date,Month and Day every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().getDate());
      setMonth(new Date().getMonth());
      setDay(new Date().getDay());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="fulldate">
        <div className="date">
          <div className="date_num text-dark">{date}</div>
          <div className="month_year">
            <div className="text-dark">{month_short_name[month]}</div>
            <div>{now.getFullYear()}</div>
          </div>
        </div>
        <div className="week text-dark">{day_short_name[day]}</div>
      </div>
    </>
  );
}

export default Dates;
