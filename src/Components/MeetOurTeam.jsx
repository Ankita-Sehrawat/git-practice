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
          <h4 className="text-xl text-[#4857EC] font-medium mb-2 lg:mb-6 text-center md:text-start uppercase tracking-[4px]">
            TEAM
          </h4>
          <h1 className="text-[30px] sm:text-[36px] lg:text-[48px] text-black font-bold text-center md:text-start">
            Meet our team
          </h1>
          <div className="flex flex-wrap flex-row -mx-3 justify-center">
            {cards.map((cards, i) => (
              <div
                key={i}
                className=" max-[470px]:w-full max-[470px]:px-0 w-8/12 sm:w-6/12 md:w-4/12  lg:my-4 xl:px-5 px-3 cursor-pointer ">
                <div className=" text-center mt-[47px]">
                  <div className=" overflow-hidden">
                    <img
                      className="max-[400px]:w-full max-sm:w-8/12  max-sm:m-auto transition-[10s] hover:scale-125 "
                      src={cards.img}
                      alt="girl"
                    />
                  </div>
                  <h2 className="lg:mt-[23px] mt-[16px] font-[600] sm:text-[22px] lg:text-[24px] text-[20px] text-black cursor-pointer leading-[25px] lg:leading-[45px]">
                    {cards.name}
                  </h2>
                  <h1 className="mt-[4px] text-[#98A1BB] text-[16px] lg:text-[18px] font-[400]  lg:leading-[45px] leading-[25px]">
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
            <img className=" cursor-pointer" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
