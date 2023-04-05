import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, AccountPage, CalendarPage, RegisterPage } from "./pages";
import {
  ChoosedDay,
  ChoosedMonth,
  ChoosedWeek,
  ModalAddTask,
} from "modules/calendarPage";
import { MainLayout } from "shared/components";
import { PrivateRoute, PublicRoute } from "shared/containers";
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
            />
            <Route
              path={routes.CALENDAR_WEEK + "/:curDate"}
              element={<ChoosedWeek />}
            >
              <Route path={"add"} element={<ModalAddTask />} />
            </Route>
            <Route
              path={routes.CALENDAR_DAY + "/:curDate"}
              element={<ChoosedDay />}
            >
              <Route path={"add"} element={<ModalAddTask />} />
              <Route path={"edit"} element={<ModalAddTask />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={`${routes.CALENDAR}`} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
