import moment from "moment";
import { useMemo } from "react";
import { routes } from "shared/services/routes";

export const usePeriodTitle = (periodType, date) => {
  const period = useMemo(() => {
    switch (periodType) {
      case routes.CALENDAR_MONTH:
        return moment(date).utc().format("MMMM YYYY");
      case routes.CALENDAR_WEEK:
        const [firstDayYear, firstDayMonth, firstDayDate] = moment(date)
          .utc()
          .weekday(1)
          .format("YYYY-MMMM-DD")
          .split("-");
        const [lastDayYear, lastDayMonth, lastDayDate] = moment(date)
          .utc()
          .weekday(7)
          .format("YYYY-MMMM-DD")
          .split("-");

        return firstDayYear !== lastDayYear || firstDayMonth !== lastDayMonth
          ? `${firstDayDate} ${firstDayMonth} ${firstDayYear} - ${lastDayDate} ${lastDayMonth} ${lastDayYear}`
          : `${firstDayDate} - ${lastDayDate} ${lastDayMonth} ${firstDayYear}`;
      case routes.CALENDAR_DAY:
        return moment(date).utc().format("DD MMMM YYYY");
      default:
        return;
    }
  }, [periodType, date]);

  return period;
};
