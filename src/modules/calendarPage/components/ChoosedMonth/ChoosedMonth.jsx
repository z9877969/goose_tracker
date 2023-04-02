import { useCallback, useState } from "react";
import ModalAddTask from "../ModalAddTask/ModalAddTask";
import MonthCalendarHead from "../MonthCalendarHead/MonthCalendarHead";
import MonthCalendarTable from "../MonthCalendarTable/MonthCalendarTable";
// import s from "./ChoosedMonth.module.scss";

const ChoosedMonth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(
    () => setIsModalOpen((p) => !p),
    [setIsModalOpen]
  );

  return (
    <>
      <MonthCalendarHead />
      <MonthCalendarTable openModal={toggleModal} />
      {isModalOpen && <ModalAddTask closeModal={toggleModal} />}
    </>
  );
};

export default ChoosedMonth;
