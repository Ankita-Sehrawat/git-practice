import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import riot from "../assets/images/png/riot-games-seeklogo.com 1.png";
import blizzard from "../assets/images/png/Blizzard.png";
import zynga from "../assets/images/png/zynga (1) 1.png";
import sega from "../assets/images/png/sega.png";
import activision from "../assets/images/png/Activision 1.png";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
    <>
      {/* //{" "}
      <Slider {...settings}> */}
      {/* <div className="max-w-[100px] text-center">
      
    </div>
    <div className="max-w-[100px]">
    </div>
    <div className="max-w-[100px]">
    </div>
    <div className="max-w-[100px]">
    </div>
    <div className="max-w-[100px]">
    </div> */}
      {/* //{" "}
      </Slider> */}
      <div className=" overflow-auto">
        <div className="w-[1000px] flex justify-between">
          <img
            className="max-w-[100px] text-center"
            src={riot}
            alt="Riot Games"
          />
          <img
            className="max-w-[100px] text-center"
            src={blizzard}
            alt="Blizzard"
          />
          <img className="max-w-[100px] text-center" src={zynga} alt="Zynga" />
          <img
            className="max-w-[100px] text-center"
            src={activision}
            alt="Activision"
          />
          <img className="max-w-[100px] text-center" src={sega} alt="Sega" />
        </div>
      </div>
    </>
  );
}
