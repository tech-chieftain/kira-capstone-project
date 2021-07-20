import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = ({ thumbnail, images, captions }) => {
  const settings = {
    customPaging(i) {
      return (
        <a>
          <img src={images[i]} alt={`${i} slide`} style={{ height: "100%", objectFit: "100%" }} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <img
        src="https://picsum.photos/100/100?random=1"
        alt="next"
        style={{ height: "100%", objectFit: "100%" }}
      />
    ),
    prevArrow: (
      <img
        src="https://picsum.photos/100/100?random=2"
        alt="previous"
        style={{ height: "100%", objectFit: "100%" }}
      />
    ),
  };
  return (
    <Slider {...settings} className="container">
      {images.map((image) => (
        <div>
          <img
            className="m-auto"
            src={image}
            alt=""
            style={{ height: "100%", objectFit: "100%" }}
          />
        </div>
      ))}
    </Slider>
  );
};

CustomCarousel.propTypes = {
  thumbnail: PropTypes.bool,
  images: PropTypes.array,
  captions: PropTypes.array,
};

CustomCarousel.defaultProps = {
  thumbnail: false,
  images: [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
  ],
  captions: [],
};

export default CustomCarousel;
