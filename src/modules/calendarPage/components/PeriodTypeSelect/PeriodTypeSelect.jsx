import clsx from "clsx";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "shared/services/routes";
import s from "./PeriodTypeSelect.module.scss";

const getActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const PeriodTypeSelect = () => {
  const { curDate } = useParams();
  return (
    <div className={s.wrapper}>
      <NavLink
        className={getActiveClass}
        to={`${routes.CALENDAR}/${routes.CALENDAR_MONTH}/${curDate}`}
      >
        Month
      </NavLink>
      <NavLink
        className={getActiveClass}
        to={`${routes.CALENDAR}/${routes.CALENDAR_WEEK}/${curDate}`}
      >
        Week
      </NavLink>
      <NavLink
        className={getActiveClass}
        to={`${routes.CALENDAR}/${routes.CALENDAR_DAY}/${curDate}`}
      >
        Day
      </NavLink>
    </div>
  );
};
