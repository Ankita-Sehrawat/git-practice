import React from "react";
import mainimg from "../assets/images/png/mainimage.png";
import positiondot from "../assets/images/png/position dot.png";
import riot from "../assets/images/png/riot-games-seeklogo.com 1.png";
import blizaard from "../assets/images/png/Blizzard.png";
import zynga from "../assets/images/png/zynga (1) 1.png";
import sega from "../assets/images/png/sega.png";
import Activision from "../assets/images/png/Activision 1.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container custom_container mx-auto flex mt-5 items-center">
          <a className="font-black text-[32px] cursor-pointer">play_</a>
          <nav className="md:ml-auto  text-base justify-center hidden md:block">
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">
              Home
            </a>
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">
              Services
            </a>
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">
              Pricing
            </a>
            <a className="mr-[60px] text-xs font-medium cursor-pointer buttonHover">
              About
            </a>
            <button className="items-center font-bold hover:bg-[#4857EC] hover:text-white py-[13px] px-[25px] rounded text-base text-black duration-200 border-[#4857EC] border hover:border">
              Contact us
            </button>
          </nav>
        </div>

        <section className="relative">
          <img
            className="absolute right-0 hidden md:block top-[102px]"
            src={positiondot}
            alt=""
          />
          <div className="container custom_container  mx-auto flex py-[42px] md:flex-row flex-col-reverse items-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-[70px]">
                We design
                <br className="hidden lg:inline-block" />
                for{" "}
                <span className="underline decoration-4 decoration-[#FF3344] ">games</span>
              </h1>
              <p className="mb-8 font-normal text-lg max-w-[302px] mt-[26px]">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className="items-center font-bold hover:bg-[#4857EC] hover:text-white py-[13px] px-[25px] rounded text-base text-black duration-200 border-[#4857EC] border hover:border">
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

        <div>
          <p className="text-center font-normal text-2xl text-[#8A94A6]">
            We are trusted by hundreads of game companies
          </p>
          <div className="flex justify-center gap-20 mt-[23px] flex-wrap">
            <img src={riot} alt="" />
            <img src={blizaard} alt="" />
            <img src={zynga} alt="" />
            <img src={sega} alt="" />
            <img src={Activision} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
