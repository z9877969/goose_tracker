import CalendarDates from "calendar-dates";
import moment from "moment";

const calendarDates = new CalendarDates();

const getPrevDate = (curDate) => {
  const { date, iso, type } = curDate;
  const newDateInstance = moment(iso).subtract(1, "day");

  return {
    date: date === 1 ? Number(newDateInstance.format("DD")) : date - 1,
    type: type === "current" && date === 1 ? "prev" : type,
    iso: newDateInstance.format("YYYY-MM-DD"),
  };
};

const getNextDate = (curDate) => {
  const { date, iso, type } = curDate;
  const newDateInstance = moment(iso).add(1, "day");
  const newDate = Number(newDateInstance.format("DD"));

  return {
    date: newDate,
    type: newDate - date === 1 ? type : "next",
    iso: newDateInstance.format("YYYY-MM-DD"),
  };
};

export const getCalendatDates = async (date) => {
  const data = await calendarDates.getMatrix(new Date(date));

  const newData = data.map((week, weekNum, weeks) => {
    return weekNum < weeks.length - 1
      ? week.map((day, dayNum, days) =>
          dayNum < days.length - 1 ? days[dayNum + 1] : weeks[weekNum + 1][0]
        )
      : week.map((day, dayNum, days) =>
          dayNum < days.length - 1 ? days[dayNum + 1] : null
        );
  });
  if (newData[0][0].type === "current" && newData[0][0].date !== 1) {
    const newFirstWeek = [];
    for (let i = 0; i < 7; i++) {
      if (i === 0) {
        newFirstWeek.unshift(getPrevDate(newData[0][0]));
        continue;
      }
      newFirstWeek.unshift(getPrevDate(newFirstWeek[0]));
    }
    newData.unshift(newFirstWeek);
  }
  if (newData.length > 6) {
    newData.pop();
    // return newData;
  }
  const lastWeek = newData[newData.length - 1];
  if (lastWeek.some((el) => !el)) {
    for (let i = 0; i < 7; i++) {
      if (lastWeek[i]) continue;
      lastWeek[i] = getNextDate(lastWeek[i - 1]);
    }
  }
  if (lastWeek.every((el) => el.type === "next")) {
    newData.pop();
  }
  return newData;
};
