import { useLocation } from "react-router-dom";

export const useCalendarPeriod = () => {
  const { pathname } = useLocation();

  const periodType = pathname.split(`/`)[2];

  return periodType;
};
