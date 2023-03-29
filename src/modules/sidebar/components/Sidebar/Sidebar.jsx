import { Button } from "shared/components";
import UserPanel from "../UserPanel/UserPanel";
import s from "./Sidebar.module.scss";
import { sprite } from "shared/icons";
import { useDispatch } from "react-redux";
import { logoutUser } from "redux/auth/authOperations";

export const Sidebar = () => {
  const d = useDispatch();

  const handleLogout = () => d(logoutUser());

  return (
    <div className={s.container}>
      <h2 className={s.sidebarTitle}>GooseTrack</h2>

      <UserPanel />
      <Button className={s.btnLogout} onClick={handleLogout}>
        Log out
        <svg>
          <use href={sprite + "#icon-logout-icon"}></use>
        </svg>
      </Button>
    </div>
  );
};
