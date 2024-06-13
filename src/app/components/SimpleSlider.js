// components/SimpleSlider.js
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings} className="text-xl">
      <div className="text-white">
        <h3>Great app! Helps me relax and focus.</h3>
        <p>- Jane Doe</p>
      </div>
      <div className="text-white font-light">
        <h3>Amazing features and easy to use.</h3>
        <p>- John Smith</p>
      </div>
      <div className="text-white font-light">
        <h3>Changed my life! Cant live without it.</h3>
        <p>- Emily Johnson</p>
      </div>
      <div className="text-white font-light">
        <h3>Highly recommended for everyone.</h3>
        <p>- Michael Brown</p>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
