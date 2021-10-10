import './index.scss';
import { NavLink } from "react-router-dom";
import DescTitle from "../../common/DescTitle";
import Description from "../../common/Description";
import Titleh4 from "../../common/Titleh4";

export default function About() {
    return <main className="about wrapper">
        <div className="about__wrapper-link">
            <NavLink className="nav-link about__link text-small" to="/about">About us</NavLink>
        </div>
        <div className="about__desctitle">
            <DescTitle />
        </div>
        <div className="about__box">
            <div className="about__box-title">
                <Titleh4 />
            </div>
            <div className="about__description text-normal">
                <Description />
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