import { useFormik } from "formik";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "redux/auth/authOperations";
import { selectorUser } from "redux/auth/authSelectors";
import { Button } from "shared/components";
import { UserAvatarField } from "../UserAvatarField/UserAvatarField";
import { UserContactsFields } from "../UserContactsFields/UserContactsFields";
import { UserInfoFields } from "../UserInfoFields/UserInfoFields";
import s from "./UserForm.module.scss";

const initialValues = {
  phone: null,
  name: null,
  email: null,
  birthday: null,
  skype: null,
  userImgUrl: null,
};

export const UserForm = () => {
  const d = useDispatch();

  const userFormData = useSelector(selectorUser);

  const formik = useFormik({
    initialValues: userFormData,
    onSubmit: (v) => {
      const formData = new FormData(v);
      d(updateUser(formData));
    },
  });
  const {
    values: { phone, name, email, birthday, skype, userImgUrl },
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;

  const setAvatar = useCallback(
    (file) => setFieldValue("userImgUrl", file),
    // eslint-disable-next-line
    []
  );

  const userInfoFormData = { name, birthday, email };
  const userContactsFormData = { phone, skype };
  const userAvatarFormData = { name, userImgUrl };

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit}>
      <div className={s.fieldsWrapper}>
        <UserAvatarField setAvatar={setAvatar} formData={userAvatarFormData} />
        <div className={s.dataFieldsWrapper}>
          <UserInfoFields formData={userInfoFormData} onChange={handleChange} />
          <UserContactsFields
            formData={userContactsFormData}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        type="submit"
        title={"Save changes"}
        className={s.btnSubmitTitle}
      />
    </form>
  );
};
