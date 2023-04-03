import { useFilteredTasksByPeriod } from "shared/hooks/useFilteredTasksByPeriod";
import { routes } from "shared/services/routes";
import s from "./WeekCalendarTable.module.scss";

const timeMarkers = Array(24 * 2)
  .fill(null)
  .map((el, i) =>
    i % 2 === 0
      ? `${i / 2}`.padStart(2, "0") + ":00"
      : `${Math.floor(i / 2)}`.padStart(2, "0") + ":30"
  );

export const WeekCalendarTable = ({ weekDates = [] }) => {
  const weekTasks = useFilteredTasksByPeriod(routes.CALENDAR_WEEK);

  console.log("weekTasks :>> ", weekTasks);

  return (
    <tbody className={s.table}>
      <tr className={s.timeColumn}>
        {timeMarkers.map((el, i) => (
          <td key={i} className={s.timeItem}>
            {i % 2 === 0 ? el : null}
          </td>
        ))}
      </tr>
      {weekDates.map((date, i) => (
        <tr key={i} className={s.dayColumn}>
          {timeMarkers.map((time, k) => (
            <td key={`${i}${k}`} className={s.dayItem}>
              {null}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
