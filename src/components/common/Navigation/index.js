import { useState } from 'react';

import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import './index.scss';
import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as Close } from './close.svg';


export default function Navigation() {
  const [visible, setVisible] = useState(false);

  return <nav className="navigation">
    <div className="logo">
      <Logo />
    </div>
    <button className="navigation-button" onClick={() => setVisible(!visible)}>
      {visible ? <span className="navigation-button__close"><Close /></span> : <Menu />}
    </button>
    <ul className={`links ${visible ? 'visible' : null}`}>
      <li className="navigation__item">
        <NavLink exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="nav-link" to="/about">About us</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="nav-link" to="/news">News</NavLink>
      </li>
      <li>
        <NavLink className="contact-us" to="/contact">Contact us</NavLink>
      </li>
    </ul>

  </nav>
}