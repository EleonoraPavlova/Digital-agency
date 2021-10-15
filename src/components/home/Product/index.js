import './index.scss';
import Titleh4 from "../../common/Titleh4";
import ProductBlock from "../../common/ProductBlock";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default function Product() {
    return <div className="product">
        <div className="product__title">
            <Titleh4 />
        </div>
        <div className="product__text wrapper">
            <p className="text-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="product__slider">
            <Slider {...settings}>
                <ProductBlock title="Title" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" color="red" label="Vestibulum posuere" />
                <ProductBlock title="Title One" description="Vivamus tincidunt porta venenatis. Quisque finibus sodales turpis sit amet posuere. Ut accumsan nisl nisl, sit amet ultricies turpis feugiat auctor. Nulla volutpat sodales pharetra." color="green" label="Sed quam nisl" />
                <ProductBlock title="Title Two" description="Duis consectetur lorem nunc. Suspendisse potenti. Fusce imperdiet a odio quis suscipit. Suspendisse non leo euismod, laoreet nisl et, tincidunt purus." color="purple" label="Lorem ipsum" />
                <ProductBlock title="Title Three" description="Suspendisse placerat et odio condimentum dictum. Sed placerat convallis mauris a eleifend. Quisque tincidunt sapien quam, et tempor nisl tincidunt tristique" color="blue" label="Cras faucibus" />
                <ProductBlock title="Title Four" description="Nulla massa eros, ultrices quis convallis sit amet, tristique nec felis. Cras faucibus neque eu maximus condimentum. Proin euismod dui sed nulla sodales, nec ornare sem lacinia." color="pink" label="Quisque porttitor" />
                <ProductBlock title="Title Five" description="Nam sodales justo id dictum dictum. Nam sodales sodales diam vel imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed." color="coral" label="Etiam placerat" />
                <ProductBlock title="Title Six" description="Proin id ex eget nunc varius rhoncus vitae eu dolor. Vestibulum pellentesque velit at dignissim ultricies. Donec ac suscipit lorem. Quisque porttitor maximus felis at commodo." color="dblue" label="Praesent cursus" />
            </Slider>
        </div>
    </div>
}