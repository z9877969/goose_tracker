import { LabeledInput } from "../LabeledInput/LabeledInput";
import s from "./UserContactsFields.module.scss";

export const UserContactsFields = ({ formData, onChange }) => {
  return (
    <div className={s.wrapper}>
      <LabeledInput
        title={"Phone"}
        fullSize
        name="phone"
        value={formData.phone}
        onChange={onChange}
      />
      <LabeledInput
        title={"Skype"}
        fullSize
        name="skype"
        value={formData.skype}
        onChange={onChange}
      />
    </div>
  );
};
