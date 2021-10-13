import './index.scss';

export default function LastWorks() {
    return <section className="works wrapper">
        <div className="works__title">
            <h4 className="text-title">Our Recent Projects</h4>
        </div>
        <div className="works__subtitle">
            <div className="works__subtitle-center">
                <p className="text-thin">Nunc pulvinar fermentum est. Donec nec dolor sapien. Vestibulum ut neque sit amet risus eleifend rutrum. In placerat nisi nunc, id efficitur nisl pellentesque sit amet. </p>
            </div>
        </div>
        <ul className="works__box1">
            <li className="works__item works__box1_item1"></li>
            <li className="works__item works__box1_item2"></li>
            <li className="works__item works__box1_item3"></li>
        </ul>
        <ul className="works__box2">
            <li className="works__item works__box2_small"></li>
            <li className="works__item works__box2_office"></li>
            <li className="works__item works__box2_big"></li>
        </ul>
    </section >
}