import { CalendarPageWrapper, CalendarToolbars } from "modules/calendarPage";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container } from "shared/components";
import { routes } from "shared/services/routes";

const CalendarPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    pathname === routes.CALENDAR &&
      navigate(`${routes.CALENDAR}/${routes.CALENDAR_MONTH}`);
  }, [pathname, navigate]);

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
