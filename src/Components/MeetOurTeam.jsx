import React from 'react';
import girl from '../assets/images/png/girl.png';
import girl2 from '../assets/images/png/girl2.png';
import boy from '../assets/images/png/boy.png';
import arrow from '../assets/images/png/arrow.png';

const MeetOurTeam = () => {
  const cards = [
    { img: girl, name: 'Samantha Rea', work: 'Product Designer' },
    { img: boy, name: 'John Doe', work: 'SEO Specialist' },
    { img: girl2, name: 'Sarah Jae', work: 'Branding Specialist' },
  ];
  return (
    <>
      <div className=" bg-[#f5f6fb] lg:pb-[107px]  pb-[50px] pt-[24px]">
        <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
          <h4 className="text-[#4857EC] font-normal text-xl leading-6 text-center lg:text-start  tracking-[4px]">
            TEAM
          </h4>
          <h1 className=" text-black font-bold text-5xl leading-[45px] mt-[24px] text-center lg:text-start">
            Meet our team
          </h1>
          <div className="flex flex-wrap flex-row -mx-3 justify-center">
            {cards.map((cards, i) => (
              <div key={i} className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center">
                <div className=" text-center mt-[47px]">
                  <img className=' cursor-pointer' src={cards.img} alt="girl" />
                  <h2 className="mt-[23px] font-[600] text-[24px] text-black cursor-pointer leading-[45px]">
                    {cards.name}
                  </h2>
                  <h1 className="mt-[4px] text-[#98A1BB] text-[18px] font-[400]  leading-[45px]">
                    {cards.work}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-center items-baseline mt-[40px]  lg:mt-[66px]">
            <h2 className="mt-[4px] text-[#4857EC] me-[15px] text-[18px] font-[700] cursor-pointer leading-[21.33px]">
              View all
            </h2>
            <img className=' cursor-pointer' src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
