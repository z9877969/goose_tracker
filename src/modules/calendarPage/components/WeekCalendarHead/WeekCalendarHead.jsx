import { weekDaysOptions } from "../../options/weekDaysOptions";
import s from "./WeekCalendarHead.module.scss";

export const WeekCalendarHead = ({ weekDates }) => {
  const weekDatesNambers = weekDates.map((el) => Number(el.split("-")[2]));
  return (
    <thead>
      <tr className={s.row}>
        <th className={s.weekDayItem}>
          <span>Time</span>
        </th>
        {weekDaysOptions.map(({ name, title }, i) => (
          <th key={name} className={s.weekDayItem}>
            <span>{title}</span>
            <span>{weekDatesNambers[i]}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};
