import s from "./ThemeSwitcher.module.scss";
import { sprite } from "shared/icons";
import { useState } from "react";
import clsx from "clsx";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(themes.LIGHT);
  return (
    <label>
      <svg
        className={clsx(
          s.icon,
          theme === themes.LIGHT && s.light,
          theme === themes.DARK && s.dark
        )}
      >
        <use href={sprite + "#icon-moon"}></use>
      </svg>
      {theme === themes.DARK && (
        <input
          className={s.input}
          type="checkbox"
          name="theme"
          value={themes.LIGHT}
          onChange={(e) => setTheme(e.target.value)}
        />
      )}
      {theme === themes.LIGHT && (
        <input
          className={s.input}
          type="checkbox"
          name="theme"
          value={themes.DARK}
          onChange={(e) => setTheme(e.target.value)}
        />
      )}
    </label>
  );
};
