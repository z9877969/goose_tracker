import moment from "moment";

export const getWeekDates = (date) => {
  const dateInstance = moment(date);
  const weekDates = Array(7)
    .fill(null)
    .map((_, i) => {
      return dateInstance.weekday(1).add(i, "days").format("YYYY-MM-DD");
    });
  return weekDates;
};
