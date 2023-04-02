import { useEffect, useState } from "react";
import CalendarDates from "calendar-dates";
import clsx from "clsx";
import s from "./MonthCalendarTable.module.scss";

const MonthCalendarTable = ({ openModal }) => {
  const [dates, setDates] = useState(null);

  const handleOpenModalForm = (e) => {
    if (e.target === e.currentTarget) {
      openModal();
    }
  };

  useEffect(() => {
    const calendarDates = new CalendarDates();
    const setCalendarDates = async () => {
      const datesMatrix = await calendarDates.getMatrix(new Date());
      setDates(datesMatrix);
    };
    setCalendarDates();
  }, []);

  return (
    dates && (
      <ul className={s.calendar}>
        {dates.map((el, i, arrI) => (
          <li key={i} className={s.datesRow}>
            <ul className={s.weekDates}>
              {el.map(({ date, type }, k, arrK) => (
                <li
                  key={`${i}${k}`}
                  className={clsx(
                    s.dateItem,
                    i === 0 && k === 0 && s.firstLeft,
                    i === 0 && k === arrK.length - 1 && s.firstRight,
                    i === arrI.length - 1 && k === 0 && s.lastLeft,
                    i === arrI.length - 1 &&
                      k === arrK.length - 1 &&
                      s.lastRight
                  )}
                  onClick={handleOpenModalForm}
                >
                  <p className={s.date}>{type === "current" && date}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )
  );
};

export default MonthCalendarTable;
