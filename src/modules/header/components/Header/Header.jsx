import { useLocation } from "react-router-dom";
import { Container } from "shared/components";
import { routes } from "shared/services/routes";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { UserBar } from "../UserBar/UserBar";
import s from "./Header.module.scss";

const mainTitles = {
  [routes.ACCOUNT]: "User Profile",
  [routes.CALENDAR]: "Calendar",
};

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={s.header}>
      <Container className={s.wrapper}>
        <h1 className={s.mainTitle}>{mainTitles[pathname]}</h1>
        <ThemeSwitcher />
        <UserBar />
      </Container>
    </header>
  );
};
