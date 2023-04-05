import { useEditData, useSetEditData } from "context/ModalEditProvider";
import { useFormik } from "formik";
import { LabeledInput } from "modules/accountPage/components/LabeledInput/LabeledInput";
import { tasksCategories } from "modules/calendarPage/options/columnsOptions";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask } from "redux/tasks/tasksOperations";
import { selectorTasksQuantity } from "redux/tasks/tasksSelectors";
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
};

export const ModalAddTask = () => {
  const d = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { curDate } = useParams();
  const editData = useEditData();
  const setEditData = useSetEditData();

  const tasksQuantity = useSelector(selectorTasksQuantity);

  const tasksQuantityRef = useRef(tasksQuantity);

  const actionType = pathname.split("/").slice(-1)[0];

  const {
    id,
    title: editTitle,
    date: editDate,
    start: editStart,
    end: editEnd,
    priority: editPriority,
    category,
  } = editData || {};

  const formik = useFormik({
    initialValues: editData
      ? {
          title: editTitle,
          date: editDate,
          start: editStart,
          end: editEnd,
          priority: editPriority,
        }
      : initialValues,
    onSubmit: (values) => {
      const newTask = {
        ...values,
        category: editData ? category : tasksCategories.TO_DO,
        date: editData ? values.date : curDate,
      };
      editData ? d(updateTask({ id, task: newTask })) : d(createTask(newTask));
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

  const closeModal = useCallback(() => {
    editData && setEditData(null);
    navigate(-1);
  }, [navigate, setEditData, editData]);

  useEffect(() => {
    if (
      tasksQuantity !== tasksQuantityRef.current ||
      (actionType === "edit" && !editData)
    ) {
      closeModal();
    }
  }, [tasksQuantity, closeModal, editData, actionType]);

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
            <TimePicker
              setDate={setStartTime}
              date={editData ? `${curDate}T${start}` : start}
            />
          </LabeledInput>
          <LabeledInput title={"End"} onChange={handleChange}>
            <TimePicker
              setDate={setEndTime}
              date={editData ? `${curDate}T${end}` : end}
            />
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
            {actionType === "add" && (
              <svg>
                <use href={sprite + "#icon-plus"}></use>
              </svg>
            )}
            {actionType === "add" && "Add"}
            {actionType === "edit" && "Edit"}
          </Button>
          <Button
            title={"Cancel"}
            className={s.btnCancel}
            onClick={closeModal}
          />
        </div>
      </form>
    </Modal>
  );
};
