import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import riot from '../assets/images/png/riot-games-seeklogo.com 1.png';
import blizzard from '../assets/images/png/Blizzard.png';
import zynga from '../assets/images/png/zynga (1) 1.png';
import sega from '../assets/images/png/sega.png';
import activision from '../assets/images/png/Activision 1.png';

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.6,
          infinite: true,
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="max-w-[150px] text-center">
          <img src={riot} alt="Riot Games" />
        </div>
        <div className="max-w-[150px]">
          <img src={blizzard} alt="Blizzard" />
        </div>
        <div className="max-w-[150px]">
          <img src={zynga} alt="Zynga" />
        </div>
        <div className="max-w-[150px]">
          <img src={sega} alt="Sega" />
        </div>
        <div className="max-w-[150px]">
          <img src={activision} alt="Activision" />
        </div>
      </Slider>
    </div>
  );
}
