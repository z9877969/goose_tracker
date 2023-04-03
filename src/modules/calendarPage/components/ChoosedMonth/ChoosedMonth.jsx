import { Outlet } from "react-router-dom";
import MonthCalendarHead from "../MonthCalendarHead/MonthCalendarHead";
import MonthCalendarTable from "../MonthCalendarTable/MonthCalendarTable";

export const ChoosedMonth = () => {
  return (
    <>
      <MonthCalendarHead />
      <MonthCalendarTable />
      <Outlet />
    </>
  );
};
