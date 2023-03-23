import clsx from "clsx";
import s from "./Input.module.scss";

export const Input = ({ className, type = "text", ...inputProps }) => {
  return (
    <input
      type={type}
      className={clsx(s.input, className && className)}
      {...inputProps}
    />
  );
};
