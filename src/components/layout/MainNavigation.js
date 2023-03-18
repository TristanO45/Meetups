import { Link } from "react-router-dom";

import styleClasses from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styleClasses.header}>
      <div className={styleClasses.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;