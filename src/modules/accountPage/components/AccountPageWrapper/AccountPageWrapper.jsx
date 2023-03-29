import s from "./AccountPageWrapper.module.scss";

export const AccountPageWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
