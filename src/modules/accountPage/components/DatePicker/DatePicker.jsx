import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { formatDate } from "modules/accountPage/helpers/formatDate";
import { selectorBirthday } from "redux/auth/authSelectors";
import s from "./DatePicker.module.scss";

export const DatePicker = ({ setBirthday }) => {
  const birthday = useSelector(selectorBirthday);
  const [date, setDate] = useState(
    () => (birthday && new Date(birthday)) || new Date()
  );

  useEffect(() => {
    const formatedDate = formatDate(date);
    setBirthday(formatedDate);
  }, [date, setBirthday]);

  return (
    <ReactDatePicker
      dateFormat={"dd-mm-yyyy"}
      selected={date}
      onChange={setDate}
      className={s.input}
    />
  );
};
