import React from "react";
import Slider from "react-slick";
import SliderData from "./SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrow";

const ImagesSlider = () => {
  const settings = {
    customPaging(i) {
      return (
        <a>
          <img
            src={SliderData[i].imgURL}
            alt=""
            className="shadow"
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...settings} className="shadow m-5 slider">
        {SliderData.map((slide) => (
          <img src={slide.imgURL} alt="" className="slider-img" />
        ))}
      </Slider>

      <style global jsx>{`
        .slider,
        .slider-img {
          width: 700px;
          height: 500px;
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

export default ImagesSlider;
