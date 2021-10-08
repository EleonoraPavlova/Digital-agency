import './index.scss';
import { NavLink } from "react-router-dom";

export default function About() {
    return <main className="about wrapper">
        <div className="about__wrapper-link">
            <NavLink className="nav-link about__link text-small" to="/about">About us</NavLink>
        </div>
        <div className="about__title">
            <h3 className="text-title about__title-center">Lorem Ipsum is simply dummy text of the printing and <span>typesetting industry. </span></h3>
        </div>
        <div className="about__box">
            <div className="about__box-title">
                <h4 className="text-title-less">Lorem Ipsum</h4>
            </div>
            <div className="about__box-desc">
                <div className="text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
            </div>
            <div className="about__box-picture">
                <div className="about__img">
                    <img src={process.env.PUBLIC_URL + '/images/team.svg'} alt="team" />
                </div>
                <div className="about__dots">
                    <img src={process.env.PUBLIC_URL + '/images/dots.svg'} alt="dots" />
                </div>
            </div>
        </div>
    </main>
}