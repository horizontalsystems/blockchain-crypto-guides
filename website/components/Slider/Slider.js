import React from 'react';
import Slick from 'react-slick';

function Slider({ slidesToShow, slidesToScroll, children }) {

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow,
    slidesToScroll,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  return (
    <div className="Slider">
      <Slick {...settings}>
        {children}
      </Slick>
    </div>
  );
}

export default Slider
