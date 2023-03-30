import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { routes } from "shared/services/routes";
import s from "./PeriodTypeSelect.module.scss";

const getActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const PeriodTypeSelect = () => {
  return (
    <div className={s.wrapper}>
      <NavLink
        className={getActiveClass}
        to={`${routes.CALENDAR}/${routes.CALENDAR_MONTH}`}
      >
        Month
      </NavLink>
      <NavLink
        className={getActiveClass}
        to={`${routes.CALENDAR}/${routes.CALENDAR_WEEK}`}
      >
        Week
      </NavLink>
      <NavLink
        className={getActiveClass}
        to={`${routes.CALENDAR}/${routes.CALENDAR_DAY}`}
      >
        Day
      </NavLink>
    </div>
  );
};
