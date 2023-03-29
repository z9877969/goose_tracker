import { LabeledInput } from "../LabeledInput/LabeledInput";
import s from "./UserInfoFields.module.scss";

export const UserInfoFields = ({ formData, onChange }) => {
  const { name, email, birthday } = formData;
  return (
    <div className={s.conatainer}>
      <div className={s.nameWrapper}>
        <LabeledInput
          onChange={onChange}
          name="name"
          value={name}
          title={"First Name"}
        />
        <LabeledInput
          onChange={onChange}
          name="name"
          value={name}
          title={"Last Name"}
        />
      </div>
      <LabeledInput
        onChange={onChange}
        name="birthday"
        value={birthday}
        fullSize
        title="Birthday"
      />
      <LabeledInput
        onChange={onChange}
        name="email"
        value={email}
        fullSize
        title="Email"
      />
    </div>
  );
};
