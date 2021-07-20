import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = ({ thumbnail, items, slides }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <img
          src="https://picsum.photos/100/100?random=1"
          alt=""
          style={{ height: "100%", objectFit: "100%" }}
        />
      </div>
    ),
    prevArrow: (
      <div>
        <img
          src="https://picsum.photos/100/100?random=2"
          alt=""
          style={{ height: "100%", objectFit: "100%" }}
        />
      </div>
    ),
  };

  if (thumbnail) settings.customPaging = (i) => <a>{items[i]}</a>;

  return (
    <Slider {...settings} className="container">
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </Slider>
  );
};

CustomCarousel.propTypes = {
  thumbnail: PropTypes.bool,
  items: PropTypes.array,
  slides: PropTypes.number,
};

CustomCarousel.defaultProps = {
  thumbnail: false,
  items: [],
  slides: 3,
};

export default CustomCarousel;
