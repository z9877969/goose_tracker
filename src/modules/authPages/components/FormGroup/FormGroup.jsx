import { Link } from "react-router-dom";
import s from "./FormGroup.module.scss";

export const FormGroup = ({ children, linkTitle, redirectTo }) => {
  return (
    <div className={s.container}>
      {children}
      <Link to={redirectTo} className={s.link}>
        {linkTitle}
      </Link>
    </div>
  );
};
