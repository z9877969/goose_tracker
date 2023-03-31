import { useState } from "react";
import moment from "moment";
import { useCalendarPeriod } from "shared/hooks/useCalendarPeriod";
import { PeriodPaginator } from "../PeriodPaginator/PeriodPaginator";
import { PeriodTypeSelect } from "../PeriodTypeSelect/PeriodTypeSelect";
import s from "./CalendarToolbars.module.scss";

export const CalendarToolbars = () => {
  const periodType = useCalendarPeriod();

  const [date, setDate] = useState(() => moment().format("YYYY-MM-DD"));

  return (
    <div className={s.wrapper}>
      <PeriodPaginator periodType={periodType} date={date} setDate={setDate} />
      <PeriodTypeSelect />
    </div>
  );
};
