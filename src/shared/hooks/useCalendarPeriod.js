import { useLocation } from "react-router-dom";
import { routes } from "shared/services/routes";

export const useCalendarPeriod = () => {
  const { pathname } = useLocation();

  const periodType = pathname.split(`${routes.CALENDAR}/`)[1];

  return periodType;
};
