import { Sidebar } from "modules/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <header>Header</header>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
