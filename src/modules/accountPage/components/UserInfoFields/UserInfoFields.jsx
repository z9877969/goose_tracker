import { DatePicker } from "../DatePicker/DatePicker";
import { LabeledInput } from "../LabeledInput/LabeledInput";
import s from "./UserInfoFields.module.scss";

export const UserInfoFields = ({ formData, onChange, setBirthday }) => {
  const { name, email, birthday } = formData;
  return (
    <div className={s.conatainer}>
      <LabeledInput
        onChange={onChange}
        name="name"
        value={name}
        title={"Name"}
        fullSize
      />
      <LabeledInput
        onChange={onChange}
        name="birthday"
        value={birthday}
        fullSize
        title="Birthday"
      >
        <DatePicker setBirthday={setBirthday} />
      </LabeledInput>
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
