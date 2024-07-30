import React from 'react';
import { features } from './Common/Helper';

const Features = () => {
  return (
    <>
      <section className="container custom_container mx-auto px-5">
        <div className="mt-[89px] mb-[104px]">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-5/12">
              <p className="font-normal text-xl text-[#4857EC] tracking-[30%]">FEATURES</p>
              <h1 className="font-bold text-3xl md:text-5xl mt-6">What we are offering</h1>
              <p className="mt-6 font-normal text-xl">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="w-full md:w-6/12 mt-10 mt:md-0">
              <div className="grid grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div className={`${index === 2 || index === 3 ? 'mt-[30px] md:mt-[80px]' : ''}`}>
                    <img src={item.image} alt="" />
                    <h2 className="font-normal sm:text-2xl mt-2.5">{item.name}</h2>
                    <p className="font-normal text-[16px] sm:text-[18px] text-[#98A1BB]">
                      {item.lorem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
