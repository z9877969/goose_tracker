import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "shared/containers/MainLayout";
import PrivateRoute from "shared/containers/PrivateRoute";
import PublicRoute from "shared/containers/PublicRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
          <Route path="account" element={<h1>AccountPage</h1>} />
          <Route path="calendar" element={<h1>CalendarPage</h1>} />
        </Route>
        <Route path="*" element={<Navigate to={"/calendar"} />} />
      </Routes>
    </>
  );
};

export default App;
