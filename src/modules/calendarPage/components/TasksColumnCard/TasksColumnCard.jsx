import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useSetEditData } from "context/ModalEditProvider";
import { Button } from "shared/components";
import { selectorUser } from "redux/auth/authSelectors";
import { removeTask, updateTask } from "redux/tasks/tasksOperations";
import { sprite } from "shared/icons";
import { columnsOptions } from "../../options/columnsOptions";
import s from "./TasksColumnCard.module.scss";

export const TasksColumnCard = ({ ...taskData }) => {
  const d = useDispatch();
  const setEditData = useSetEditData();
  const { userImgUrl } = useSelector(selectorUser);

  const {
    category,
    priority,
    start,
    end,
    title,
    date: fullDate,
    _id: id,
  } = taskData;

  const date = fullDate.split("T")[0];

  const handleRemoveTask = () => {
    d(removeTask({ id, date }));
  };
  const handleUpdateTaskCategory = () => {
    const curCategoryNum = columnsOptions.findIndex(
      (el) => el.category === category
    );
    if (curCategoryNum === 2) return alert("Can not replace this card");
    const updatingTask = {
      category: columnsOptions[curCategoryNum + 1].category,
    };
    d(updateTask({ id, task: updatingTask }));
  };
  return (
    <li className={s.card}>
      <p className={s.descr}>{title}</p>
      <div className={s.bottomBar}>
        <div className={s.infoBar}>
          {userImgUrl ? (
            <img src={userImgUrl} alt="" className={s.avatar} />
          ) : (
            <p className={s.avatar}>U</p>
          )}
          <p className={clsx(s.priority, s[priority])}>{priority}</p>
        </div>
        <div className={s.toolsbar}>
          <Button className={s.toolsBarBtn} onClick={handleUpdateTaskCategory}>
            <svg>
              <use href={sprite + "#icon-arrow-circle"}></use>
            </svg>
          </Button>
          <Button
            className={s.toolsBarBtn}
            onClick={() =>
              setEditData({
                category,
                priority,
                start,
                end,
                title,
                date: fullDate,
                id,
              })
            }
          >
            <svg>
              <use href={sprite + "#icon-pencil"}></use>
            </svg>
          </Button>
          <Button className={s.toolsBarBtn} onClick={handleRemoveTask}>
            <svg>
              <use href={sprite + "#icon-trash"}></use>
            </svg>
          </Button>
        </div>
      </div>
    </li>
  );
};
