import { useState } from 'react';

import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import './index.scss';
import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as Close } from './../Icon/icons/insta.svg';


export default function Navigation() {
  const [visible, setVisible] = useState(true);

  return <nav className="navigation">
    <div className="logo">
      <Logo />
    </div>
    <button className="navigation-button" onClick={() => setVisible(!visible)}>
      { visible ? <Close /> : <Menu /> }
    </button>
    <ul className={`links ${visible ? 'visible' : null}`}>
      <li>
        <NavLink exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </li>

      <li>
        <NavLink className="nav-link" to="/news">News</NavLink>
      </li>
      <li>
        <NavLink className="contact-us" to="/contact">Contact us</NavLink>
      </li>
    </ul>

  </nav>
}