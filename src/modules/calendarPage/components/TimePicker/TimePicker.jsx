import moment from "moment";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./TimePicker.module.scss";

const TimePicker = ({ date, setDate }) => {
  const [time, setTime] = useState(() => (date ? new Date(date) : date));

  useEffect(() => {
    const choosedTime = moment(time).format("HH:mm");
    setDate(choosedTime);
  }, [time, setDate]);

  return (
    <ReactDatePicker
      className={s.input}
      selected={time}
      dateFormat={"HH:mm"}
      onChange={setTime}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
    />
  );
};

export default TimePicker;
