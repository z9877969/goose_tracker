import { Button } from "shared/components";
import { sprite } from "shared/icons";
import s from "./ColumnHeadBar.module.scss";

export const ColumnHeadBar = ({ title, openModalAddTask }) => {

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{title}</h3>
      <Button className={s.btnAddTask} onClick={openModalAddTask}>
        <svg>
          <use href={sprite + "#icon-plus"}></use>
        </svg>
      </Button>
    </div>
  );
};
