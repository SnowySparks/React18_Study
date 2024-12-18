import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const EventNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default EventNavigation;
