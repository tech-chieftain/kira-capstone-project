import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = ({ thumbnail, items, slides }) => {
  const settings = {
    className: "slider-img",
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
    <>
      <div className="container">
        <Slider {...settings}>
          {items.map((item) => (
            <div>{item}</div>
          ))}
        </Slider>
      </div>
      <style global jsx>{`
        .slider,
        slider-img {
          width: 100%;
          height: 100px;
        }
        .slick-active div div * {
          margin: auto;
        }

        .slick-dots.slick-thumb {
          bottom: -90px;
        }

        .slick-dots.slick-thumb li {
          width: 100px;
          height: 80px;
          list-style-type: none;
          filter: grayscale(100%);
          margin-right: 10px;
        }

        .slick-dots.slick-thumb li.slick-active {
          filter: grayscale(0%);
        }
      `}</style>
    </>
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
  slides: 1,
};

export default CustomCarousel;
