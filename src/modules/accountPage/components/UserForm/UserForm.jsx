import { useFormik } from "formik";
import { useCallback, useEffect, useRef } from "react";
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

  const formRef = useRef(null);

  const formik = useFormik({
    initialValues: userFormData,
    onSubmit: (v) => {
      const formData = new FormData(formRef.current);
      formData.delete("file");
      formData.append("userImgUrl", v.userImgUrl);
      d(updateUser(formData));
    },
  });
  const {
    values: { phone, name, email, birthday, skype, userImgUrl },
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
  } = formik;

  const setAvatar = useCallback(
    (file) => setFieldValue("userImgUrl", file),
    // eslint-disable-next-line
    []
  );
  const setBirthday = useCallback((date) => {
    setFieldValue("birthday", date);
    // eslint-disable-next-line
  }, []);

  const userInfoFormData = { name, birthday, email };
  const userContactsFormData = { phone, skype };
  const userAvatarFormData = { name, userImgUrl };

  useEffect(() => {
    setValues({ ...userFormData });
  }, [userFormData, setValues]);

  return (
    <form ref={formRef} className={s.formWrapper} onSubmit={handleSubmit}>
      <div className={s.fieldsWrapper}>
        <UserAvatarField setAvatar={setAvatar} formData={userAvatarFormData} />
        <div className={s.dataFieldsWrapper}>
          <UserInfoFields
            formData={userInfoFormData}
            onChange={handleChange}
            setBirthday={setBirthday}
          />
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
