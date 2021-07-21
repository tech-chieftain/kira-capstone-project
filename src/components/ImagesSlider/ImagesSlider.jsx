import React from "react";
import Slider from "react-slick";
import SliderData from "./SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesSlider = () => {
  const settings = {
    customPaging(i) {
      return (
        <a>
          <img
            src={SliderData[i].imgURL}
            alt=""
            className="image"
            style={{ width: "110px", height: "80px", objectFit: "cover" }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {SliderData.map((slide) => (
        <img src={slide.imgURL} alt="" />
      ))}
    </Slider>
  );
};

export default ImagesSlider;
