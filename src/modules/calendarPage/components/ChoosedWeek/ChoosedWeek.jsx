import { getWeekDates } from "modules/calendarPage/helpers/getWeekDates";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { WeekCalendarHead } from "../WeekCalendarHead/WeekCalendarHead";
import { WeekCalendarTable } from "../WeekCalendarTable/WeekCalendarTable";

const tableStyles = {
  display: "flex",
  flexDirection: "column",
  borderCollapse: "collapse",
};

export const ChoosedWeek = () => {
  const { curDate } = useParams();
  const weekDates = useMemo(() => getWeekDates(curDate), [curDate]);

  return (
    <table style={tableStyles}>
      <WeekCalendarHead weekDates={weekDates} />
      <WeekCalendarTable weekDates={weekDates}/>
    </table>
  );
};
