import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "shared/services/routes";

const ModalEditMethodContext = createContext();
const ModalEditDataContext = createContext();

export const useSetEditData = () => useContext(ModalEditMethodContext);
export const useEditData = () => useContext(ModalEditDataContext);

const ModalEditProvider = ({ children }) => {
  const navigate = useNavigate();
  const { curDate } = useParams();

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    editData &&
      navigate(`${routes.CALENDAR}/${routes.CALENDAR_DAY}/${curDate}/edit`);
  }, [editData, navigate, curDate]);

  return (
    <ModalEditMethodContext.Provider value={setEditData}>
      <ModalEditDataContext.Provider value={editData}>
        {children}
      </ModalEditDataContext.Provider>
    </ModalEditMethodContext.Provider>
  );
};

export default ModalEditProvider;
