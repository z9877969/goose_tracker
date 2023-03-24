import { Link } from "react-router-dom";
import s from "./AuthFormWrapper.module.scss";

export const AuthFormWrapper = ({ children, linkTitle, redirectTo }) => {
  return (
    <div className={s.container}>
      {children}
      <Link to={redirectTo} className={s.link}>
        {linkTitle}
      </Link>
    </div>
  );
};
