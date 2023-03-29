import clsx from "clsx";
import s from "./Container.module.scss";

export const Container = ({ children, className }) => {
  return (
    <div className={clsx(s.container, className && className)}>{children}</div>
  );
};
