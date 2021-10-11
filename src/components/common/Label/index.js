import './index.scss';

export default function Label(props) {
    return <div className={"label " + props.additionalClasses}>
        <div className="label__wrapper-label">
            <div className="label__text text-small">{props.children}</div>
        </div>
    </div >
}