import { CalendarPageWrapper, CalendarToolbars } from "modules/calendarPage";
import { Outlet } from "react-router-dom";
import { Container } from "shared/components";

const CalendarPage = () => {
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
