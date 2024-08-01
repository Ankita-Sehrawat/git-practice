import React from 'react';
import riot from '../assets/images/png/riot-games-seeklogo.com 1.png';
import blizzard from '../assets/images/png/Blizzard.png';
import zynga from '../assets/images/png/zynga (1) 1.png';
import sega from '../assets/images/png/sega.png';
import activision from '../assets/images/png/Activision 1.png';

export default function SimpleSlider() {


  return (
    <>
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
