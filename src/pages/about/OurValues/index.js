import './index.scss';

export default function OurValues() {
    return <section className="our-values wrapper">
        <div>
            <img src={process.env.PUBLIC_URL + "/images/ourValues.png"} alt="ourValues" />
        </div>
        <div className="our-values__title"></div></section>
}