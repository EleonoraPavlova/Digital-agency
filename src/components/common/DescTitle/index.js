import './index.scss';

export default function DescTitle(props) {
    return <div className={`desc__title ${props.additionalClasses}`}>
        <h3 className="text-title desc__title-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
    </div>
}