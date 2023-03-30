import moment from "moment";
import { routes } from "shared/services/routes";

export const toPrev = (date, periodType) => {
  return periodType === routes.CALENDAR_MONTH
    ? moment(date).subtract(1, "months").format("YYYY-MM-DD")
    : periodType === routes.CALENDAR_WEEK
    ? moment(date).subtract(1, "weeks").format("YYYY-MM-DD")
    : moment(date).subtract(1, "days").format("YYYY-MM-DD");
};

export const toNext = (date, periodType) => {
  return periodType === routes.CALENDAR_MONTH
    ? moment(date).add(1, "months").format("YYYY-MM-DD")
    : periodType === routes.CALENDAR_WEEK
    ? moment(date).add(1, "weeks").format("YYYY-MM-DD")
    : moment(date).add(1, "days").format("YYYY-MM-DD");
};
