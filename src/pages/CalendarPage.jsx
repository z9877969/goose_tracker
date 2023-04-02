import { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CalendarPageWrapper, CalendarToolbars } from "modules/calendarPage";
import { selectorIsUserExist } from "redux/auth/authSelectors";
import { Container } from "shared/components";
import { getTasks } from "redux/tasks/tasksOperations";
import { routes } from "shared/services/routes";

const CalendarPage = () => {
  const d = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isUserExist = useSelector(selectorIsUserExist);

  useEffect(() => {
    pathname === routes.CALENDAR &&
      navigate(
        `${routes.CALENDAR}/${routes.CALENDAR_MONTH}/${moment().format(
          "YYYY-MM-DD"
        )}`
      );
  }, [pathname, navigate]);

  useEffect(() => {
    isUserExist && d(getTasks());
  }, [d, isUserExist]);

  return (
    <Container>
      <CalendarToolbars />
      <CalendarPageWrapper>
        <Outlet />
      </CalendarPageWrapper>
    </Container>
  );
};

export default CalendarPage;
