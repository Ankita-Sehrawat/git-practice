import React from "react";
import mainimg from "../assets/images/png/mainimage.png";
import positiondot from "../assets/images/png/position dot.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto flex mt-5 items-center">
          <a className="font-black text-[32px] cursor-pointer">play_</a>
          <nav className="md:ml-auto  text-base justify-center hidden md:block">
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">Home</a>
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">
              Services
            </a>
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">
              Pricing
            </a>
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">
              About
            </a>
            <button className="items-center font-bold bg-[#4857EC] text-white border-0 py-[13px] px-[25px] rounded text-base">
              Contact us
            </button>
          </nav>
        </div>

        <section className="relative">
          <img
            className="absolute right-0 hidden md:block w-[75%] top-[102px]"
            src={positiondot}
            alt=""
          />
          <div className="container mx-auto flex py-[42px] md:flex-row flex-col-reverse items-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="font-bold sm:text-4xl text-[70px]">
                We design
                <br className="hidden lg:inline-block" />
                 for games
              </h1>
              <p className="mb-8 font-normal text-lg max-w-[302px] mt-[26px]">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className="items-center font-bold bg-[#4857EC] text-white border-0 py-[13px] px-[25px] rounded text-base">
                Get started
              </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={mainimg}
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
