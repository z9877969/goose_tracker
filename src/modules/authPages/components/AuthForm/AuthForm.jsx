import { Button, Input } from "shared/components";
import s from "./AuthForm.module.scss";
import sprite from "../../icons/sprite.svg";

export const AuthForm = ({ formTitle, options }) => {
  return (
    <form className={s.form}>
      <h1 className={s.formTitle}>{formTitle}</h1>
      {options.map(({ label, ...elRest }) => (
        <label>
          <p className={s.label}>{label}</p>
          <Input
            className={s.input}
            value={""}
            {...elRest}
            onChange={() => {}}
          />
        </label>
      ))}
      <Button className={s.btnSubmit}>
        <span>Log In</span>
        <svg>
          <use href={sprite + "#icon-arrow-exit"}></use>
        </svg>
      </Button>
    </form>
  );
};
