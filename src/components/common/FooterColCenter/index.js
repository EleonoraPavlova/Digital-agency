import { NavLink } from "react-router-dom";
import './index.scss';

export default function FooterColCenter() {
    return (
        <div className="footer__col-about">
            <ul>
                <li className="footer__title"><NavLink className="nav-link" to="/about">About us</NavLink></li>
                <li className="footer__item">Company</li>
                <li className="footer__item">Portfolio</li>
                <li className="footer__item">Careers</li>
                <li className="footer__title"><NavLink className="contact-us" to="/contact">Contact us</NavLink></li>
            </ul>
        </div>)
}