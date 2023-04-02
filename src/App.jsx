import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "pages/AccountPage";
import CalendarPage from "pages/CalendarPage";
import ChoosedMonth from "modules/calendarPage/components/ChoosedMonth/ChoosedMonth";
import ModalAddTask from "modules/calendarPage/components/ModalAddTask/ModalAddTask";
import { MainLayout } from "shared/components";
import PrivateRoute from "shared/containers/PrivateRoute";
import PublicRoute from "shared/containers/PublicRoute";
import { routes } from "shared/services/routes";
import { getUserInfo } from "redux/auth/authOperations";

const App = () => {
  const d = useDispatch();

  useEffect(() => {
    d(getUserInfo());
  }, [d]);

  return (
    <>
      <Routes>
        <Route
          path={routes.LOGIN}
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path={routes.REGISTER}
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path={routes.ROOT}
          element={<PrivateRoute component={<MainLayout />} />}
        >
          <Route path={routes.ACCOUNT} element={<AccountPage />} />
          <Route path={routes.CALENDAR} element={<CalendarPage />}>
            <Route
              path={routes.CALENDAR_MONTH + "/:curDate"}
              element={<ChoosedMonth />}
            >
              <Route path={"add"} element={<ModalAddTask />} />
            </Route>
            <Route
              path={routes.CALENDAR_WEEK + "/:curDate"}
              element={<h2>ChoosedWeek</h2>}
            />
            <Route
              path={routes.CALENDAR_DAY + "/:curDate"}
              element={<h2>ChoosedDay</h2>}
            />
          </Route>
          <Route path="*" element={<Navigate to={`${routes.CALENDAR}`} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
