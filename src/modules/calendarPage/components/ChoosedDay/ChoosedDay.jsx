import { Outlet } from "react-router-dom";
import { useWeekDates } from "shared/hooks/useWeekDates";
import { DayCalendarHead } from "../DayCalendarHead/DayCalendarHead";
import { TaskColumnsList } from "../TaskColumnsList/TaskColumnsList";

export const ChoosedDay = () => {
  const weekDates = useWeekDates();
  return (
    <>
      <DayCalendarHead weekDates={weekDates} />
      <TaskColumnsList />
      <Outlet />
    </>
  );
};
