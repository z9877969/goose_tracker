import { useCalendarPeriod } from "shared/hooks/useCalendarPeriod";
import { PeriodPaginator } from "../PeriodPaginator/PeriodPaginator";
import { PeriodTypeSelect } from "../PeriodTypeSelect/PeriodTypeSelect";
import s from "./CalendarToolbars.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const CalendarToolbars = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const periodType = useCalendarPeriod();

  const { curDate } = useParams();

  const setDate = (date) => {
    const pathnameArr = location.pathname.split("/");
    pathnameArr[pathnameArr.length - 1] = date;

    navigate({ pathname: pathnameArr.join("/") });
  };

  return (
    <div className={s.wrapper}>
      <PeriodPaginator
        periodType={periodType}
        date={curDate}
        setDate={setDate}
      />
      <PeriodTypeSelect />
    </div>
  );
};
