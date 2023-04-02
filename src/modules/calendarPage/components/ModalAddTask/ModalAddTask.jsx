import { useFormik } from "formik";
import { LabeledInput } from "modules/accountPage/components/LabeledInput/LabeledInput";
import moment from "moment";
import { useCallback } from "react";
import { Button } from "shared/components";
import Modal from "shared/components/Modal/Modal";
import { sprite } from "shared/icons";
import TimePicker from "../TimePicker/TimePicker";
import s from "./ModalAddTask.module.scss";

const initialValues = {
  title: "",
  start: null,
  end: null,
  priority: null,
  //   category: "to-do",
  //   date: "2023-03-17",
};

const ModalAddTask = ({ closeModal }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newTask = {
        ...values,
        category: "to-do",
        date: moment().format("YYYY-MM-DD"),
      };
      console.log("newTask :>> ", newTask);
    },
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;
  const { title, start, end, priority } = values;

  const setStartTime = useCallback(
    (time) => {
      setFieldValue("start", time);
    },
    [setFieldValue]
  );

  const setEndTime = useCallback(
    (time) => {
      setFieldValue("end", time);
    },
    [setFieldValue]
  );

  return (
    <Modal closeModal={closeModal}>
      <form className={s.form} onSubmit={handleSubmit}>
        <LabeledInput
          title={"Title"}
          onChange={handleChange}
          placeholder="Enter text"
          value={title}
          name={"title"}
        />
        <div className={s.timeFields}>
          <LabeledInput title={"Start"} onChange={handleChange}>
            <TimePicker setDate={setStartTime} date={start} />
          </LabeledInput>
          <LabeledInput title={"End"} onChange={handleChange}>
            <TimePicker setDate={setEndTime} date={end} />
          </LabeledInput>
        </div>
        <div className={s.priorityList}>
          <div className={s.priorityItem}>
            <input
              type="radio"
              name="priority"
              value="low"
              id="priority-low"
              checked={priority === "low"}
              onChange={handleChange}
            />
            <label htmlFor="priority-low" className={s.low}>
              Low
            </label>
          </div>
          <div className={s.priorityItem}>
            <input
              type="radio"
              name="priority"
              value="medium"
              id="priority-medium"
              checked={priority === "medium"}
              onChange={handleChange}
            />
            <label htmlFor="priority-medium" className={s.medium}>
              Medium
            </label>
          </div>
          <div className={s.priorityItem}>
            <input
              type="radio"
              name="priority"
              value="high"
              id="priority-high"
              checked={priority === "high"}
              onChange={handleChange}
            />
            <label htmlFor="priority-high" className={s.high}>
              High
            </label>
          </div>
        </div>
        <div className={s.btnWrapper}>
          <Button type="submit" className={s.btnAdd}>
            <svg>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
            Add
          </Button>
          <Button title={"Cancel"} className={s.btnCancel} />
        </div>
      </form>
    </Modal>
  );
};

export default ModalAddTask;
