import './index.scss';
import ReadMoreButton from "../../common/ReadMoreButton";

export default function Team() {
    return <div className="team wrapper">
        <div className="team__picture">
            <img src={process.env.PUBLIC_URL + '/images/team-img.svg'} alt="team-img" />
        </div>
        <div className="team__desc">
            <div className="team__title">
                <h3 className="text-subtitle">Lorem Ipsum is simply dummy
                    text dummy text </h3>
            </div>
            <div className="team__text">
                <p className="text-thin"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
            <div className="team__text2">
                <p className="text-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="team__button">
                <ReadMoreButton />
            </div>
        </div>

    </div>
}