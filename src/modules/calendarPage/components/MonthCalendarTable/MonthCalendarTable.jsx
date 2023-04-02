import { useEffect, useMemo, useState } from "react";
import CalendarDates from "calendar-dates";
import clsx from "clsx";
import s from "./MonthCalendarTable.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorTasks } from "redux/tasks/tasksSelectors";
import { routes } from "shared/services/routes";

const MonthCalendarTable = () => {
  const navigate = useNavigate();
  const { curDate } = useParams();

  const tasks = useSelector(selectorTasks);

  const [dates, setDates] = useState(null);

  const handleOpenModalForm = (e) => (iso) => {
    if (e.target === e.currentTarget) {
      navigate({
        pathname:
          routes.CALENDAR + "/" + routes.CALENDAR_MONTH + "/" + iso + "/add",
      });
    }
  };

  const filteredTasksByMonth = useMemo(() => {
    const monthMatcher = curDate.split("-").slice(0, 2).join("-");
    return tasks
      .filter(({ date }) => date.startsWith(monthMatcher))
      .reduce((acc, el) => {
        acc[el.date] = el;
        return acc;
      }, {});
  }, [curDate, tasks]);

  console.log("filteredTasksByMonth :>> ", filteredTasksByMonth);

  useEffect(() => {
    const calendarDates = new CalendarDates();
    const setCalendarDates = async () => {
      const datesMatrix = await calendarDates.getMatrix(new Date(curDate));
      setDates(datesMatrix);
    };
    setCalendarDates();
  }, [curDate]);

  return (
    dates && (
      <ul className={s.calendar}>
        {dates.map((el, i, arrI) => (
          <li key={i} className={s.datesRow}>
            <ul className={s.weekDates}>
              {el.map(({ date, type, iso }, k, arrK) => (
                <li
                  key={`${i}${k}`}
                  className={clsx(
                    s.dateItem,
                    i === 0 && k === 0 && s.firstLeft,
                    i === 0 && k === arrK.length - 1 && s.firstRight,
                    i === arrI.length - 1 && k === 0 && s.lastLeft,
                    i === arrI.length - 1 &&
                      k === arrK.length - 1 &&
                      s.lastRight
                  )}
                  onClick={
                    type === "current"
                      ? (e) => handleOpenModalForm(e)(iso)
                      : null
                  }
                >
                  <p className={s.date}>{type === "current" && date}</p>
                  {filteredTasksByMonth[iso] && (
                    <ul>
                      {filteredTasksByMonth[iso].tasks.map(
                        ({ title, priority, _id: id }) => (
                          <li key={id} className={clsx(s.task, s[priority])}>
                            {title}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )
  );
};

export default MonthCalendarTable;
