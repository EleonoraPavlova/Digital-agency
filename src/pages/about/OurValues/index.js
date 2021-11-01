import './index.scss';
import DescTitle from "../../../components/common/DescTitle";

export default function OurValues() {
    return <section className="our-values">
        <div className="our-values__img">
            <img src={process.env.PUBLIC_URL + "/images/ourValues.png"} alt="ourValues" />
        </div>
        <div>
            <div className="our-values__text">
                <a href="https://www.google.com/" className="text-regular our-values__text-link"> About our values</a>
            </div>
            <DescTitle additionalClasses="style" />
            <div className="our-values__title"></div>
        </div>
    </section >
}