import React from 'react';
import girl from '../assets/images/png/girl.png';

const MeetOurTeam = () => {
  const cards = [
    { img: girl, name: 'Samantha Rea', work: 'Product Designer' },
    { img: girl, name: 'Samantha Rea', work: 'Product Designer' },
    { img: girl, name: 'Samantha Rea', work: 'Product Designer' },
  ];
  return (
    <>
      <div className=" bg-[#f5f6fb]">
        <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6 pt-[24px]">
          <h4 className="text-[#4857EC] font-normal text-xl leading-6">TEAM</h4>
          <h1 className=" text-black font-bold text-5xl leading-[45px] mt-[24px]">Meet our team</h1>
          <div className=' flex flex-row'>
            {cards.map((cards, i) => (
              <div
                key={i}
                className="lg:w-1/3 sm:w-1/2 w-full px-3 flex ">
                <div className=" text-center mt-[47px]">
                  <img src={cards.img} alt="girl" />
                  <h2 className="mt-[23px] font-[600] text-[24px] text-black  leading-[45px]">
                    {cards.name}
                  </h2>
                  <h1 className="mt-[4px] text-[#98A1BB] font-[400]  leading-[45px]">
                    {cards.work}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
