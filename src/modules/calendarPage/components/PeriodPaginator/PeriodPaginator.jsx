import moment from "moment";
import { useMemo } from "react";
import { Button } from "shared/components";
// import { useCalendarPeriod } from "shared/hooks/useCalendarPeriod";
import { sprite } from "shared/icons";
import { routes } from "shared/services/routes";
import s from "./PeriodPaginator.module.scss";

export const PeriodPaginator = ({ periodType, date, setDate }) => {
  const handlePrevPeriod = () => {
    const prevPeriodDate =
      periodType === routes.CALENDAR_MONTH
        ? moment(date).subtract(1, "months").format("YYYY-MM-DD")
        : periodType === routes.CALENDAR_WEEK
        ? moment(date).subtract(1, "weeks").format("YYYY-MM-DD")
        : moment(date).subtract(1, "days").format("YYYY-MM-DD");
    setDate(prevPeriodDate);
  };

  const handleNextPeriod = () => {
    const prevPeriodDate =
      periodType === routes.CALENDAR_MONTH
        ? moment(date).subtract(1, "months").format("YYYY-MM-DD")
        : periodType === routes.CALENDAR_WEEK
        ? moment(date).subtract(1, "weeks").format("YYYY-MM-DD")
        : moment(date).subtract(1, "days").format("YYYY-MM-DD");
    setDate(prevPeriodDate);
  };

  const period = useMemo(() => {
    switch (periodType) {
      case routes.CALENDAR_MONTH:
        return moment(date).format("MMMM YYYY");
      case routes.CALENDAR_WEEK:
        const [firstDayYear, firstDayMonth, firstDayDate] = moment(date)
          .weekday(1)
          .format("YYYY-MMMM-DD")
          .split("-");
        const [lastDayYear, lastDayMonth, lastDayDate] = moment(date)
          .weekday(7)
          .format("YYYY-MMMM-DD")
          .split("-");

        return firstDayYear !== lastDayYear || firstDayMonth !== lastDayMonth
          ? `${firstDayDate} ${firstDayMonth} ${firstDayYear} - ${lastDayDate} ${lastDayMonth} ${lastDayYear}`
          : `${firstDayDate} - ${lastDayDate} ${lastDayMonth} ${firstDayYear}`;
      default:
        return;
    }
  }, [periodType, date]);

  console.log(moment(date).weekday(7).format("YYYY-MM-DD"));

  return (
    <div className={s.wrapper}>
      <p className={s.periodDate}>{period}</p>
      <div className={s.btnWrapper}>
        <Button className={s.btn} onClick={handlePrevPeriod}>
          <svg>
            <use href={sprite + "#icon-chevron-left"}></use>
          </svg>
        </Button>
        <Button className={s.btn} onClick={handleNextPeriod}>
          <svg>
            <use href={sprite + "#icon-chevron-right"}></use>
          </svg>
        </Button>
      </div>
    </div>
  );
};
