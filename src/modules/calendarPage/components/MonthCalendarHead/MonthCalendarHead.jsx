import { weekDaysOptions } from "../../options/weekDaysOptions";
import s from "./MonthCalendarHead.module.scss";

const MonthCalendarHead = () => {
  return (
    <ul className={s.list}>
      {weekDaysOptions.map((el) => (
        <li key={el.name} className={s.item}>
          {el.title}
        </li>
      ))}
    </ul>
  );
};

export default MonthCalendarHead;
