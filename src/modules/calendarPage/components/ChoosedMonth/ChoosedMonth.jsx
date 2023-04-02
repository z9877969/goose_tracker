import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectorTasks } from "redux/tasks/tasksSelectors";
import MonthCalendarHead from "../MonthCalendarHead/MonthCalendarHead";
import MonthCalendarTable from "../MonthCalendarTable/MonthCalendarTable";

const ChoosedMonth = () => {
  const tasks = useSelector(selectorTasks);

  // const filteredTasksByMonth = 
  return (
    <>
      <MonthCalendarHead />
      <MonthCalendarTable />
      <Outlet />
    </>
  );
};

export default ChoosedMonth;
