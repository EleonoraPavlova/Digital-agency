import './Footer.scss'
import Logo from "../Logo";
import Slogan from "../Slogan";
import FooterPiece from '../FooterPiece';
import { NavLink } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../Icon/icons/facebook.svg";
import { ReactComponent as InstaIcon } from "../Icon/icons/insta.svg";
import { ReactComponent as TwitterIcon } from "../Icon/icons/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../Icon/icons/linkedin.svg";
import Copyright from '../Copyright';


export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer__upper-block">
        <div className="footer__col-logo">
          <div className="logo-wrapper">
            <Logo />
          </div>
          <div className="desc">
            <Slogan />
          </div>
          <div>
            <FooterPiece />
          </div>
        </div>
        <div className="footer__col-about">
          <ul>
            <li className="footer__title"><NavLink className="nav-link" to="/about">About us</NavLink></li>
            <li className="footer__item">Company</li>
            <li className="footer__item">Portfolio</li>
            <li className="footer__item">Careers</li>
            <li className="footer__title"><NavLink className="contact-us" to="/contact">Contact us</NavLink></li>
          </ul>
        </div>
        <div className="footer__col-contact">
          <div className="footer__title"><NavLink className="contact-us" to="/contact">Contact us</NavLink></div>
          <div className="desc">
            <Slogan />
          </div>
          <div className="footer__col-contact-phone">+9000 0000 000</div>
        </div>
        <div className="footer__col-social flex-end">
          <div className="footer__wrapper-img">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
          </div>
          <div className="footer__wrapper-img">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstaIcon /></a>
          </div>
          <div className="footer__wrapper-img">
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterIcon /></a>
          </div>
          <div className="footer__wrapper-img">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
          </div>
        </div>
      </div>
      <div className=" footer__second-block">
        <Copyright />
      </div>
    </div>


  )
}