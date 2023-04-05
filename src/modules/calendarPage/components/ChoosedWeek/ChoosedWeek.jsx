import { useWeekDates } from "shared/hooks/useWeekDates";
import { WeekCalendarHead } from "../WeekCalendarHead/WeekCalendarHead";
import { WeekCalendarTable } from "../WeekCalendarTable/WeekCalendarTable";

const tableStyles = {
  display: "flex",
  flexDirection: "column",
  borderCollapse: "collapse",
};

export const ChoosedWeek = () => {
  const weekDates = useWeekDates();

  return (
    <table style={tableStyles}>
      <WeekCalendarHead weekDates={weekDates} />
      <WeekCalendarTable weekDates={weekDates} />
    </table>
  );
};
