import s from "./CalendarPageWrapper.module.scss";

export const CalendarPageWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
