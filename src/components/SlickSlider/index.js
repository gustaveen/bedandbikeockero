import React from 'react'
import Img from 'gatsby-image';
import Slider from 'react-slick';

class SlickSlider extends React.Component {
    constructor(props) {
        super(props);

        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true
        };
    }

    render() {
        const { images } = this.props;
        return (
            <div className="SlickSlider__Slider">
                <Slider {...this.settings}>
                    {images.map((image, index) =>
                        <div className="SlickSlider__Slide" key={index}>
                            <Img resolutions={image.node.sizes} />
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

export default SlickSlider