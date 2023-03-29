import { useRef, useState } from "react";
import { sprite } from "shared/icons";
import s from "./UserAvatarField.module.scss";

const setFileUrl = (file, cbSetFileUrl) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    cbSetFileUrl(fileReader.result);
  };
};

export const UserAvatarField = ({ setAvatar, formData }) => {
  const { userImgUrl, name } = formData;

  const [curImageUrl, setCurImageUrl] = useState(userImgUrl);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setFileUrl(file, setCurImageUrl);
    setAvatar(file);
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        {!userImgUrl ? (
          <p className={s.placeholder}>
            <svg>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          </p>
        ) : (
          <img
            className={s.image}
            src={curImageUrl || userImgUrl}
            alt="user_photo"
          />
        )}
        <input
          className={s.field}
          type="file"
          name="file"
          onChange={handleAvatarChange}
        />
      </label>
      <h3 className={s.name}>{name}</h3>
      <p className={s.status}>User</p>
    </div>
  );
};
