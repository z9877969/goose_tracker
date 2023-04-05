import { NavLink } from "react-router-dom";
import { routes } from "shared/services/routes";
import { weekDaysOptions } from "../../options/weekDaysOptions";
import s from "./DayCalendarHead.module.scss";

export const DayCalendarHead = ({ weekDates }) => {
  const weekDatesNumbers = weekDates.map((el) => Number(el.split("-")[2]));
  return (
    <ul className={s.row}>
      {weekDaysOptions.map(({ name, title }, i) => (
        <li key={name} className={s.weekDayItem}>
          <NavLink
            to={`${routes.CALENDAR}/${routes.CALENDAR_DAY}/${weekDates[i]}`}
            className={s.weekDayLink}
          >
            <span>{title}</span>
            <span>{weekDatesNumbers[i]}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
