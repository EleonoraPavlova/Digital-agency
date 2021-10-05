import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import './index.scss';

export default function Navigation() {
  return <div className="navigation">
    <div className="logo">
      <Logo />
    </div>
    <ul className="links">
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
  </div>
}