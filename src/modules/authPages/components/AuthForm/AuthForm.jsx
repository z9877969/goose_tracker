import { useFormik } from "formik";
import { Button, Input } from "shared/components";
import s from "./AuthForm.module.scss";
import sprite from "../../icons/sprite.svg";

export const AuthForm = ({
  formTitle,
  options,
  initialValues = {},
  onSubmit,
}) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("object");
      onSubmit(values);
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h1 className={s.formTitle}>{formTitle}</h1>
      {options.map(({ label, name, ...elRest }) => (
        <label key={name}>
          <p className={s.label}>{label}</p>
          <Input
            className={s.input}
            name={name}
            value={values[name]}
            {...elRest}
            onChange={handleChange}
          />
        </label>
      ))}
      <Button className={s.btnSubmit} type="submit">
        <span>Log In</span>
        <svg>
          <use href={sprite + "#icon-arrow-exit"}></use>
        </svg>
      </Button>
    </form>
  );
};
