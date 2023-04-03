import { useEffect, useState } from "react";
import CalendarDates from "calendar-dates";
import clsx from "clsx";
import s from "./MonthCalendarTable.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "shared/services/routes";
import { useFilteredTasksByPeriod } from "shared/hooks/useFilteredTasksByPeriod";

const MonthCalendarTable = () => {
  const navigate = useNavigate();
  const { curDate } = useParams();

  const [dates, setDates] = useState(null);

  const handleOpenModalForm = (e) => (iso) => {
    if (e.target === e.currentTarget) {
      navigate({
        pathname: routes.CALENDAR + "/" + routes.CALENDAR_DAY + "/" + iso,
      });
    }
  };

  const filteredTasksByMonth = useFilteredTasksByPeriod(routes.CALENDAR_MONTH);

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
                    type === "current" && s.hoverItem
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
