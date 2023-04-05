import { TasksColumn } from "../TasksColumn/TasksColumn";
import { useFilteredTasksByPeriod } from "shared/hooks/useFilteredTasksByPeriod";
import { routes } from "shared/services/routes";
import { columnsOptions } from "modules/calendarPage/options/columnsOptions";
import s from "./TaskColumnsList.module.scss";

export const TaskColumnsList = () => {
  const tasksMap = useFilteredTasksByPeriod(routes.CALENDAR_DAY);

  return (
    <ul className={s.list}>
      {columnsOptions.map((el) => (
        <TasksColumn
          key={el.category}
          title={el.title}
          tasks={tasksMap[el.category]}
        />
      ))}
    </ul>
  );
};
