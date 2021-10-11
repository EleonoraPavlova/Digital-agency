import './index.scss';
import Label from "../Label"


export default function ProductBlock(props) {
    return <div className={"productBlock__wrapper " + props.additionalClasses} >
        <Label additionalClasses={props.color} className="productBlock__color">{props.label}</Label>
        <div className="productBlock__title text-subtitle">{props.title}</div>
        <div className="productBlock__sketch">
            <p className="text-thin">{props.description}</p>
        </div>
        <div className="flex-end">
            <button className="productBlock__button flex-center">
                <span className="productBlock__button-text text-middle">Read more</span>
                <div className="productBlock__arrow">
                    <img src={process.env.PUBLIC_URL + "/icon/arrow.svg"} alt="arrow" />
                </div>
            </button>
        </div>
    </ div >
}