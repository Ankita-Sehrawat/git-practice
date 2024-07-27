import React from 'react';

const MeetOurTeam = () => {
  const cards = [{ bg: 'kfjsjfikao' }];
  return (
    <>
      <div className=" bg-[#f5f6fb]">
        <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6 pt-[24px]">
          <h4 className="text-[#4857EC] font-normal text-xl leading-6">TEAM</h4>
          <h1 className=" text-black font-bold text-5xl leading-[45px] mt-[24px]">Meet our team</h1>
          {cards.map((cards, i) => (
            <div
              key={i}
              className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify -center duration-500 mb-6">
              <h1>{cards.bg}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
