import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { Loader } from "shared/components";

const LoaderContext = createContext();

const loaderRoot = document.querySelector("#loader-root");

export const useIsLoading = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingGlobal = useSelector((state) => state.isLoading);
  return (
    <LoaderContext.Provider value={setIsLoading}>
      {(isLoading || isLoadingGlobal) &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00000050",
            }}
          >
            <Loader />
          </div>,
          loaderRoot
        )}
      {children}
    </LoaderContext.Provider>
  );
};
