import moment from "moment";
import clsx from "clsx";
import { useFilteredTasksByPeriod } from "shared/hooks/useFilteredTasksByPeriod";
import { routes } from "shared/services/routes";
import s from "./WeekCalendarTable.module.scss";

const baseDateArr = [1970, 0, 1];
const getTime = (time) => [
  ...baseDateArr,
  ...time.split(":").map((el) => Number(el)),
];

const getTimeDiff = (prevTime, nextTime) => {
  const timeDiff = moment(getTime(nextTime)).diff(
    moment(getTime(prevTime)),
    "minutes"
  );
  return timeDiff;
};

const getIsValidTimeDiff = (prevTime, nextTime) => {
  const timeDiff = getTimeDiff(prevTime, nextTime);
  return timeDiff >= 0 && timeDiff < 30;
};

const timeMarkers = Array(24 * 2)
  .fill(null)
  .map((el, i) =>
    i % 2 === 0
      ? `${i / 2}`.padStart(2, "0") + ":00"
      : `${Math.floor(i / 2)}`.padStart(2, "0") + ":30"
  );

const WeekTaskItem = ({ task }) => {
  const { start, end, title } = task;
  // const taskHeight = Math.abs(getTimeDiff(start, end));
  const taskHeight = getTimeDiff(start, end);
  const taskHeightK = taskHeight > 0 ? Math.round(taskHeight / 15) : 0;
  return (
    taskHeightK > 0 && (
      <div
        className={clsx(
          s.taskItem,
          s["taskItem-" + taskHeightK],
          s[task.priority]
        )}
      >
        {title}
      </div>
    )
  );
};

const WeekTimeItem = ({ task, date, time }) => {
  return (
    <td className={s.dayItem}>
      {task && <WeekTaskItem task={task} time={time} calendarDate={date} />}
    </td>
  );
};

const WeekDayColumn = ({ date, weekTasks }) => {
  const dayTasks = weekTasks[date];
  const tasks = dayTasks?.tasks || null;

  const tasksLength = tasks?.length || null;

  let taskNum = 0;

  const getValidTask = (itemTime, taskTime) => {
    if (!taskTime) return null;

    if (getIsValidTimeDiff(itemTime, taskTime)) {
      const returnedTask = tasks[taskNum];
      if (taskNum < tasksLength) {
        taskNum += 1;
        return returnedTask;
      }
    }
    return null;
  };

  return (
    <tr className={s.dayColumn}>
      {timeMarkers.map((time, i) => {
        let task = tasks
          ? getValidTask(time, tasks[taskNum] ? tasks[taskNum].start : null)
          : null;
        return <WeekTimeItem key={i} date={date} time={time} task={task} />;
      })}
    </tr>
  );
};

export const WeekCalendarTable = ({ weekDates = [] }) => {
  const weekTasks = useFilteredTasksByPeriod(routes.CALENDAR_WEEK);

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
        <WeekDayColumn key={i} date={date} weekTasks={weekTasks} />
      ))}
    </tbody>
  );
};
