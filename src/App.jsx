import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "shared/components";
import PrivateRoute from "shared/containers/PrivateRoute";
import PublicRoute from "shared/containers/PublicRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { routes } from "shared/services/routes";
import AccountPage from "pages/AccountPage";
import { getUserInfo } from "redux/auth/authOperations";
import CalendarPage from "pages/CalendarPage";

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
          <Route path={routes.CALENDAR} element={<CalendarPage />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.CALENDAR} />} />
      </Routes>
    </>
  );
};

export default App;
