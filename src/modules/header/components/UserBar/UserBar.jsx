import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectorUser } from "redux/auth/authSelectors";
import s from "./UserBar.module.scss";

export const UserBar = () => {
  const user = useSelector(selectorUser);
  return (
    <div className={s.wrapper}>
      <h2 className={s.userName}>{user.name}</h2>
      {!user.imageUrl ? (
        <p className={clsx(s.avatar, s.userName)}>
          {user.name?.slice(0, 1).toUpperCase()}
        </p>
      ) : (
        <img className={s.avatar} src={user.imageUrl} alt="" />
      )}
    </div>
  );
};
