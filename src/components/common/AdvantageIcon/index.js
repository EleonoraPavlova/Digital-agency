import './index.scss';

export default function AdvantageIcon(props) {
    return <div className={"advantageIcon__wrapper " + props.additionalClasses} >
        <div className="advantageIcon__wrapper-icon">
            <img className="advantageIcon__icon" alt={props.imageName} src={process.env.PUBLIC_URL + "/icon/" + props.imageName + '.svg'} />
        </div>
        <div className="advantageIcon__title text-normal">{props.title}</div>
        <div className="advantageIcon__arrow">
            <button className="advantageIcon__button">
                <img src={process.env.PUBLIC_URL + "/icon/arrow.svg"} alt="arrow" />
            </button>
        </div>
    </ div>
}
