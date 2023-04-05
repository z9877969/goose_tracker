import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCalendatDates } from "shared/helpers/getCalendarDates";

export const useCalendarDates = () => {
  const { curDate } = useParams();

  const [dates, setDates] = useState(null);

  useEffect(() => {
    const setCalendarDates = async () => {
      const datesMatrix = await getCalendatDates(curDate);
      setDates(datesMatrix);
    };
    setCalendarDates();
  }, [curDate]);

  return dates;
};
