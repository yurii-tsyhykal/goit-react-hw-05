import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const ActiveSyles = ({ isActive }) => clsx(css.link, isActive && css.active);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <NavLink to="/" className={ActiveSyles}>
              Home
            </NavLink>
          </li>
          <li className={css.navListItem}>
            <NavLink to="/movies" className={ActiveSyles}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
