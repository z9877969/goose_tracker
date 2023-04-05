import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectorUser } from "redux/auth/authSelectors";
import { Button } from "shared/components";
import { sprite } from "shared/icons";
import s from "./TasksColumnCard.module.scss";

//
// :
// "to-do"
// createdAt
// :
// "2023-04-02T21:11:48.362Z"
// date
// :
// "2023-04-03T00:00:00.000Z"
// end
// :
// "16:15"
// owner
// :
// "6421e8d09551879d00566db9"
// priority
// :
// "high"
// start
// :
// "10:15"
// title
// :
// "task - 1 for 01.05"
// updatedAt
// :

export const TasksColumnCard = ({ category, priority, title }) => {
  const { avatar } = useSelector(selectorUser);
  return (
    <li className={s.card}>
      <p className={s.descr}>{title}</p>
      <div className={s.bottomBar}>
        <div className={s.infoBar}>
          {avatar ? (
            <img src={avatar} alt="" className={s.avatar} />
          ) : (
            <p className={s.avatar}>U</p>
          )}
          <p className={clsx(s.priority, s[priority])}>{priority}</p>
        </div>
        <div className={s.toolsbar}>
          <Button className={s.toolsBarBtn}>
            <svg>
              <use href={sprite + "#icon-arrow-circle"}></use>
            </svg>
          </Button>
          <Button className={s.toolsBarBtn}>
            <svg>
              <use href={sprite + "#icon-pencil"}></use>
            </svg>
          </Button>
          <Button className={s.toolsBarBtn}>
            <svg>
              <use href={sprite + "#icon-trash"}></use>
            </svg>
          </Button>
        </div>
      </div>
    </li>
  );
};
