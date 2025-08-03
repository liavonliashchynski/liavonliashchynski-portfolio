import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoLL from '../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHouseChimney,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ThemeToggle from '../ThemeToggle';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo-link" to="/">
      <img className="logoLL" src={LogoLL} alt="logo"></img>
    </Link>
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : 'home-link')}
        to="/"
      >
        <FontAwesomeIcon icon={faHouseChimney} color="white"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? '' : 'about-link')}
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="white"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? '' : 'contact-link')}
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="white"></FontAwesomeIcon>
      </NavLink>
      <ThemeToggle />
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/liavonliashchynski/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#0077B5"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/liavonliashchynski"
        >
          <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
