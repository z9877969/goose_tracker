import { Button } from "shared/components";
import UserPanel from "../UserPanel/UserPanel";
import s from "./Sidebar.module.scss";
import { sprite } from "shared/icons";

export const Sidebar = () => {
  return (
    <div className={s.container}>
      <h2 className={s.sidebarTitle}>GooseTrack</h2>

      <UserPanel />
      <Button className={s.btnLogout}>
        Log out
        <svg>
          <use href={sprite + "#icon-logout-icon"}></use>
        </svg>
      </Button>
    </div>
  );
};
