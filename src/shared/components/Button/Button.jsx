import clsx from "clsx";
import s from "./Button.module.scss";

export const Button = ({
  title,
  children,
  type = "button",
  className,
  ...btnProps
}) => {
  return (
    <button
      type={type}
      className={clsx(s.button, className && className)}
      {...btnProps}
    >
      {title || children}
    </button>
  );
};
