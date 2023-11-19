// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <div>
      <Slider {...sliderSettings}>
        <div>
          <Image width={3000} height={2000} className='slideimg' src="/slide1.jpg" alt="Slide 1" />
        </div>
        <div>
          <Image width={3000} height={2000} className='slideimg' src="/slide2.jpg" alt="Slide 2" />
        </div>
        <div>
          <Image width={3000} height={2000} className='slideimg' src="/slide3.jpg" alt="Slide 3" />
        </div>
        <div>
          <Image width={3000} height={2000} className='slideimg' src="/slide4.jpg" alt="Slide 4" />
        </div>
        <div>
          <Image width={3000} height={2000} className='slideimg' src="/slide5.jpg" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;

