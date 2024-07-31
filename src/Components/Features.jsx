import React from "react";
import { features } from "./Common/Helper";

const Features = () => {
  return (
    <div className="bg-[#f6f7fc]">
      <section className="container custom_container mx-auto px-5">
        <div className="pt-[40px] md:pt-[89px] pb-[104px]">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-5/12">
              <p className="text-xl text-[#4857EC] font-medium mb-2 lg:mb-6 text-center sm:text-start uppercase tracking-[4px]">
                FEATURES
              </p>
              <h1 className="text-[30px] sm:text-[36px] lg:text-[48px] text-black font-bold text-center sm:text-start">
                What we are offering
              </h1>
              <p className="mt-6 font-normal text-xl text-center sm:text-start">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="w-full md:w-6/12 mt-10 mt:md-0">
              <div className="grid grid-cols-2 gap-4  text-center sm:text-start">
                {features.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`${index === 2 || index === 3 ? 'mt-[30px] md:mt-[80px]' : ''}`}>
                      <img className=' m-auto sm:m-[0]' src={item.image} alt="" />
                      <h2 className="font-normal sm:text-2xl mt-2.5">{item.name}</h2>
                      <p className="font-normal text-[16px] sm:text-[18px] text-[#98A1BB]">
                        {item.lorem}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
