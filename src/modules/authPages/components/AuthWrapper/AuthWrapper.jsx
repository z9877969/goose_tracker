import s from "./AuthWrapper.module.scss";

export const AuthWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
