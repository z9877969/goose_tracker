import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectorTasks } from "redux/tasks/tasksSelectors";
import { getDatesByWeek } from "shared/helpers/getDatesByWeek";
import { routes } from "shared/services/routes";

export const useFilteredTasksByPeriod = (period) => {
  const { curDate } = useParams();

  const tasks = useSelector(selectorTasks);

  const filteredTasks = useMemo(() => {
    switch (period) {
      case routes.CALENDAR_MONTH:
        const monthMatcher = curDate.split("-").slice(0, 2).join("-");
        // example return -> filteredTasksByMonth = {"2023-03-24": {date: "2023-03-24", tasks:[]}}
        return tasks
          .filter(({ date }) => date.startsWith(monthMatcher))
          .reduce((acc, el) => {
            acc[el.date] = el;
            return acc;
          }, {});
      case routes.CALENDAR_WEEK:
        const weekDates = getDatesByWeek(curDate);
        // example return -> filteredTasksByMonth = {"2023-03-24": {date: "2023-03-24", tasks:[]}}
        return tasks
          .filter((el) => weekDates[el.date])
          .reduce((acc, el) => {
            acc[el.date] = el;
            return acc;
          }, {});
      default:
        break;
    }
  }, [period, curDate, tasks]);

  return filteredTasks;
};
