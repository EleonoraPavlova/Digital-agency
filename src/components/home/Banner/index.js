import './index.scss';
import ButtonGet from "../../common/ButtonGet";

export default function Banner() {
    return <div className="banner">
        <div className="banner__ribbon">
            <img src={process.env.PUBLIC_URL + '/images/ribbon-banner.svg'} alt="ribbon-banner" />
        </div>
        <div className="banner__box">
            <div className="banner__left">
                <div className="banner__title">
                    <h3>Digital Marketing</h3>
                </div>
                <div className="banner__title-big">
                    <h1>Work that we produce for our clients</h1>
                </div>
                <div className="banner__description">
                    <p className="text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                </div>
                <div className="banner__button">
                    <ButtonGet text="Get more details" />
                </div>
            </div>
            <div className="banner__right">
                <img src={process.env.PUBLIC_URL + '/images/banner-img.svg'} alt="banner-img" />
            </div>
        </div>
    </div>
}