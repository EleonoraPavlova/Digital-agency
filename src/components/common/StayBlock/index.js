import './index.scss';

export default function StayBlock() {
    return <section className="stay flex-between">
        <div>
            <div className="stay__title">
                <h4 className="text-title">Stay in the loop</h4>
            </div>
            <div className="stay__text">
                <p className="text-regular">Subscribe to receive the latest news and updates about TDA.
                    We promise not to spam you! </p>
            </div>
        </div>
        <form className="stay__form flex-between">
            <input className="stay__form-input" type="email" id="email" name="email" placeholder="Enter email address" />
            <button className="stay__form-button text-small">Continue</button>
        </form>

    </section>
}