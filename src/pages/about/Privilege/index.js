import ProductBlock from '../../../components/common/ProductBlock';
import './index.scss';


export default function Privilege() {
    return <section className="privilege wrapper">
        <div className="privilege__title">
            <h4 className="text-title">Why work with us</h4>
        </div>
        <div className="privilege__box flex-between">
            <ProductBlock title="An experience" description="Phasellus vitae lacinia neque. Sed imperdiet purus mauris, in scelerisque lacus efficitur eget. Sed a ligula in erat suscipit convallis" color="purple" label="Make" />
            <ProductBlock title="Quality" description="Ut in lobortis metus. Sed ex magna, ultricies in faucibus eu, eleifend sit amet eros. Sed tincidunt fermentum risus, sed porttitor libero" color="blue" label="Make" />
            <ProductBlock title="Ease" description="Duis erat ipsum, ullamcorper eu nunc a, venenatis fermentum velit" color="pink" label="Make" />
        </div>

    </section>
}