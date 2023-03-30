import { Outlet } from "react-router-dom";
import { Container } from "shared/components";

const CalendarPage = () => {
  return (
    <Container>
      <h2>CalendarToolbar</h2>
      <Outlet />
    </Container>
  );
};

export default CalendarPage;
