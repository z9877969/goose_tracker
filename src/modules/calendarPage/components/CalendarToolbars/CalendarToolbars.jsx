import { useState } from "react";
import moment from "moment";
import { useCalendarPeriod } from "shared/hooks/useCalendarPeriod";
import { routes } from "shared/services/routes";
import { PeriodPaginator } from "../PeriodPaginator/PeriodPaginator";
import { PeriodTypeSelect } from "../PeriodTypeSelect/PeriodTypeSelect";
import s from "./CalendarToolbars.module.scss";

export const CalendarToolbars = () => {
  const periodType = useCalendarPeriod();

  const [date, setDate] = useState(() => moment().format("YYYY-MM-DD"));

  const getCurPeriod = () => {
    switch (periodType) {
      case periodType === routes.CALENDAR_MONTH:
        console.log(periodType);
        break;
      case periodType === routes.CALENDAR_WEEK:
        console.log(periodType);
        break;
      case periodType === routes.CALENDAR_DAY:
        console.log(periodType);
        break;
      default:
        console.log(periodType);
    }
  };

  getCurPeriod();

  return (
    <div className={s.wrapper}>
      <PeriodPaginator periodType={periodType} date={date} setDate={setDate} />
      <PeriodTypeSelect />
    </div>
  );
};
