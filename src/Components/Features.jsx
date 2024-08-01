import React from "react";
import { features } from "./Common/Helper";

const Features = () => {
  return (
    <div className="bg-[#f6f7fc]">
      <section className="container custom_container mx-auto px-5">
        <div className="md:pt-[89px] py-16">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-5/12 text-center sm:text-start">
              <p className="font-normal text-xl text-[#4857EC] tracking-[3px] text-center md:text-start">
                FEATURES
              </p>
              <h1 className="font-bold text-[30px] md:text-[36px] leading-8 lg:text-5xl mt-3 lg:mt-6 text-center md:text-start">
                What we are offering
              </h1>
              <p className="mt-3 md:mt-6 font-normal text-[16px] text-center md:text-start">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="w-full md:w-6/12 mt-10 md:mt-0">
              <div className="grid grid-cols-2 gap-4  text-center md:text-start">
                {features.map((item, index) => (
                  <div
                    className={`${
                      index === 2 || index === 3 ? "mt-[30px] xl:mt-[40px]" : ""
                    }`}
                  >
                    <img className="max-sm:w-[50px] m-auto md:m-[0] " src={item.image} alt="img" />
                    <h2 className="font-normal text-[18px] sm:text-2xl mt-2.5">
                      {item.name}
                    </h2>
                    <p className="font-normal text-[13px] sm:text-[18px] text-[#98A1BB]">
                      {item.lorem}
                    </p>
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
