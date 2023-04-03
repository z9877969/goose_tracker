import moment from "moment";

export const getDatesByWeek = (date) => {
  const dateInstance = moment(date);
  const weekDates = Array(7)
    .fill(null)
    .map((_, i) => {
      return dateInstance.weekday(1).add(i, "days").format("YYYY-MM-DD");
    })
    .reduce((acc, el) => {
      acc[el] = el;
      return acc;
    }, {});
  return weekDates;
};
