import './index.scss';
import DescTitle from "../../common/DescTitle";
import Description from "../../common/Description";
import AdvantageIcon from "../../common/AdvantageIcon";

const items = [
    {
        title: 'Mobile Game Development',
        imageName: "advan-mobile"
    },
    {
        title: 'PC Game Development',
        imageName: "advan-game"
    },
    {
        title: 'PS4 Game Development',
        imageName: "advan-ps"
    },
    {
        title: 'AR/VR Solutions',
        imageName: "advan-vr"
    },
    {
        title: 'AR/ VR design',
        classes: "advantage__item",
        imageName: "advan-design"
    },
    {
        title: '3D Modelings',
        classes: "advantage__item-last",
        imageName: "advan-modelin"
    },
]

export default function Advantage() {
    return <section className="advantage wrapper">
        <div className="advantage__title">
            <DescTitle />
        </div>
        <div className="advantage__description text-thin">
            <div className="advantage__compon">
                <Description />
            </div>
        </div>
        <div className="advantage__box">
            {items.map(item => <AdvantageIcon title={item.title} key={item.title} additionalClasses={item.classes} imageName={item.imageName} />)}
        </div>
    </section>
}


