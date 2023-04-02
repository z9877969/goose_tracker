import s from "./MonthCalendarHead.module.scss";

const weekDays = [
  {
    name: "mon",
    title: "MON",
  },
  {
    name: "tue",
    title: "TUE",
  },
  {
    name: "wed",
    title: "WED",
  },
  {
    name: "thu",
    title: "THU",
  },
  {
    name: "fri",
    title: "FRI",
  },
  {
    name: "sat",
    title: "SAT",
  },
  {
    name: "sun",
    title: "SUN",
  },
];

const MonthCalendarHead = () => {
  return (
    <ul className={s.list}>
      {weekDays.map((el) => (
        <li key={el.name} className={s.item}>
          {el.title}
        </li>
      ))}
    </ul>
  );
};

export default MonthCalendarHead;
