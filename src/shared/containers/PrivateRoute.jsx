import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectorIsAuth } from "redux/auth/authSelectors";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectorIsAuth);
  return isAuth ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
