import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrow";

const CustomCarousel = ({ thumbnail, items, slides, smSlides }) => {
  const settings = {
    className: "slider",
    dots: thumbnail,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: smSlides,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  if (thumbnail) settings.customPaging = (i) => <a>{items[i]}</a>;

  return (
    <>
      <Slider {...settings}>
        {items.map((item) => (
          <div className="slider-item">{item}</div>
        ))}
      </Slider>

      <style global jsx>{`
        .slider,
        .slick-list,
        .slick-list * {
          width: auto;
          height: 100%;
        }

        .slider-item * {
          margin: auto;
          height: 100%;
          object-fit: contain;
        }

        .slick-dots.slick-thumb {
          bottom: -90px;
        }

        .slick-thumb img {
          height: 100%;
          object-fit: contain;
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
  smSlides: PropTypes.number,
};

CustomCarousel.defaultProps = {
  thumbnail: false,
  items: [],
  slides: 1,
  smSlides: 1,
};

export default CustomCarousel;
