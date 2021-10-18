import './index.scss';
import ButtonGet from "../../../components/common/ButtonGet";
import Slider from "react-slick";
import { useState } from 'react';
// import Breadcrumbs from '../../../components/common/Breadcrumbs';


export default function AboutBanner(props) {
    // const routes = [
    //     {
    //         name: 'Home',
    //         path: '/'
    //     },
    //     {
    //         name: 'About us',
    //         path: '/about'
    //     }
    // ]
    const [slider, setSlider] = useState(null);

    const next = () => {
        slider.slickNext();
    }
    const previous = () => {
        slider.slickPrev();
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return <main className="aboutSecondPage">
        <div className="aboutSecondPage__left">
            <nav className="aboutSecondPage__nav">
                {/* <Breadcrumbs router={routes} /> */}
            </nav>
            <div className="aboutSecondPage__title">
                <h2 className="text-title-big">Lorem Ipsum is simply dummy text of the printing and.</h2>
            </div>
            <div className="aboutSecondPage__desc">
                <p className="text-regular">Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.Interdum consectetur libero id faucibus.Nibh praesent tristique magna sit amet purus.Eget nullam non nisi est sit amet facilisis.Netus et malesuada fames ac turpis egestas sed.In nisl nisi scelerisque eu.Arcu dictum varius duis at.</p>
            </div>
            <div className="aboutSecondPage__button">
                <ButtonGet children="Get in touch"></ButtonGet>
            </div>
        </div>
        <div className="aboutSecondPage__image">
            <Slider {...settings} ref={c => setSlider(c)}>
                <img src={process.env.PUBLIC_URL + '/images/banner-secondPage.png'} alt="banner-secondPage" />
                <img src={process.env.PUBLIC_URL + '/images/team.svg'} alt="team" />
                <img src={process.env.PUBLIC_URL + '/images/banner-slider.png'} alt="slider" />
            </Slider>
            <div className="aboutSecondPage__slider">
                <button className="aboutSecondPage__click aboutSecondPage__click_left" onClick={previous}>
                    <img src={process.env.PUBLIC_URL + "/icon/arrow.svg"} alt="arrow" />
                </button>
                <button className="aboutSecondPage__click" onClick={next}>
                    <img src={process.env.PUBLIC_URL + "/icon/arrow.svg"} alt="arrow" />
                </button>
            </div>
        </div>
    </main >
}
