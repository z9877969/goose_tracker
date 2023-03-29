import { Header } from "modules/header/components/Header/Header";
import { Sidebar } from "modules/sidebar";
import { Outlet } from "react-router-dom";
import s from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <>
      <div className={s.container}>
        <Sidebar />
        <div className={s.pageWrapper}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};
