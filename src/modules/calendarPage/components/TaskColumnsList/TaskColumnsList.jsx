import { useFilteredTasksByPeriod } from "shared/hooks/useFilteredTasksByPeriod";
import { routes } from "shared/services/routes";
import { TasksColumn } from "../TasksColumn/TasksColumn";
import s from "./TaskColumnsList.module.scss";

const columnsOptions = [
  {
    category: "to-do",
    title: "To do",
  },
  {
    category: "in-progress",
    title: "In progress",
  },
  {
    category: "done",
    title: "Done",
  },
];

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
