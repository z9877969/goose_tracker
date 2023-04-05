import { useNavigate, useParams } from "react-router-dom";
import { Button } from "shared/components";
import { sprite } from "shared/icons";
import { routes } from "shared/services/routes";
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar";
import { ColumnTasksList } from "../ColumnTasksList/ColumnTasksList";
import s from "./TasksColumn.module.scss";

export const TasksColumn = ({ title, tasks }) => {
  const navigate = useNavigate();
  const { curDate } = useParams();
  const openModalAddTask = () => {
    navigate({
      pathname: `${routes.CALENDAR}/${routes.CALENDAR_DAY}/${curDate}/add`,
    });
  };
  return (
    <li className={s.column}>
      <ColumnHeadBar title={title} openModalAddTask={openModalAddTask} />
      {tasks && <ColumnTasksList tasks={tasks} />}
      <Button className={s.bottomBtnAdd} onClick={openModalAddTask}>
        <svg>
          <use href={sprite + "#icon-plus"}></use>
        </svg>
        Add task
      </Button>
    </li>
  );
};
