import clsx from "clsx";
import { Input } from "shared/components";
import s from "./LabeledInput.module.scss";

export const LabeledInput = ({ title, fullSize, ...inputProps }) => {
  return (
    <label className={clsx(s.label, fullSize && s.fullSize)}>
      <p className={s.title}>{title}</p>
      <Input {...inputProps} />
    </label>
  );
};
