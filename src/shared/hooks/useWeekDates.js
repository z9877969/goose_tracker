import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getWeekDates } from "shared/helpers/getWeekDates";

export const useWeekDates = () => {
    const { curDate } = useParams();
  const weekDates = useMemo(() => getWeekDates(curDate), [curDate]);
  return weekDates
}