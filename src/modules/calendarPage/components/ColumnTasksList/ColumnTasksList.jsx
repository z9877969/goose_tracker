import { TasksColumnCard } from "../TasksColumnCard/TasksColumnCard";
import s from "./ColumnTasksList.module.scss";

export const ColumnTasksList = ({ tasks }) => {
  return (
    <ul className={s.list}>
      {tasks.map((el) => (
        <TasksColumnCard {...el} key={el._id} />
      ))}
    </ul>
  );
};
