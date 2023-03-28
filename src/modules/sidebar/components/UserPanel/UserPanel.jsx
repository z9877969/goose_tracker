import { NavLink } from "react-router-dom";
import s from "./UserPanel.module.scss";
import { sprite } from "shared/icons";
import clsx from "clsx";

const getActiveClassName = ({ isActive }) =>
  clsx(s.navLink, isActive && s.active);

const UserPanel = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>User Panel</h2>
      <ul>
        <li className={s.navItem}>
          <NavLink to="/account" className={getActiveClassName}>
            <svg>
              <use href={sprite + "#icon-user-check"}></use>
            </svg>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" className={getActiveClassName}>
            <svg>
              <use href={sprite + "#icon-calendar-check"}></use>
            </svg>
            Calendar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserPanel;
