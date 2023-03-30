import { Header } from "modules/header/components/Header/Header";
import { Sidebar } from "modules/sidebar";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { routes } from "shared/services/routes";
import s from "./MainLayout.module.scss";

export const MainLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    pathname === routes.ROOT &&
      navigate(`${routes.CALENDAR}/${routes.CALENDAR_MONTH}`);
  }, [pathname, navigate]);

  return (
    <>
      <div className={s.container}>
        <Sidebar />
        <div className={s.pageWrapper}>
          <Header />
          <Outlet />
          {/* {console.log(<Outlet />)} */}
        </div>
      </div>
    </>
  );
};
