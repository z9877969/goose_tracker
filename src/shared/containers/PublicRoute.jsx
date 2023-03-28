import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectorIsAuth } from "redux/auth/authSelectors";

const PublicRoute = ({ redirectTo = "/account", component }) => {
  const isAuth = useSelector(selectorIsAuth);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

export default PublicRoute;
