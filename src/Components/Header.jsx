import React, { useState } from "react";
import mainimg from "../assets/images/png/mainimage.png";
import positiondot from "../assets/images/png/position dot.png";
import menu from "../assets/images/png/menu.png";
import SimpleSlider from "./Slider";
import close from "../assets/images/png/close.png";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  function shownav() {
    setNavbar(!navbar);
  }

  return (
    <>
      <header className="p-5 md:p-0">
        <div className="container custom_container md:px-5 mx-auto flex justify-between  md:mt-5 items-center">
          <a className="font-black text-[20px] sm:text-[32px] cursor-pointer">
            play_
          </a>
          <nav
            className={`xl:flex items-center navb ${navbar ? "open" : "navb"}`}
          >
            <a className="lg:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0">
              Home
            </a>
            <a className="xl:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0">
              Services
            </a>
            <a className="xl:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0">
              Pricing
            </a>
            <a className="xl:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0">
              About
            </a>
            <button className="items-center font-bold hover:bg-[#4857EC] hover:text-white py-[13px] px-[25px] rounded text-base text-black duration-200 border-[#4857EC] border hover:border mt-5 md:mt-0">
              Contact us
            </button>
          </nav>
          <div className="xl:hidden z-50" onClick={shownav}>
            {/*  */}
            {navbar ? (
              <img className="h-6 w-6 rotate-[45deg]" src={close} alt="" />
            ) : (
              <img className="h-6 w-6" src={menu} alt="" />
            )}
          </div>
        </div>

        <section className="relative container custom_container mx-auto">
          <img
            className="absolute right-0 hidden lg:block top-[102px] "
            src={positiondot}
            alt=""
          />
          <div className="container custom_container px-5 mx-auto flex md:py-[42px] py-[30px] md:flex-row flex-col-reverse items-center justify-between">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="font-bold text-[30px] md:text-[50px] lg:text-[70px] md:leading-[65px] leading-tight">
                We design for{" "}
                <span className="underline decoration-4 decoration-[#FF3344] ">
                  games
                </span>
              </h1>
              <p className="mb-8 font-normal text-lg max-w-[302px] mt-[26px]">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className="items-center font-bold hover:bg-[#4857EC] hover:text-white py-[13px] px-[25px] rounded text-base text-black duration-200 border-[#4857EC] border hover:border">
                Get started
              </button>
            </div>
            <div className="lg:max-w-lg md:w-1/2 w-5/6 sm:w-[65%]">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={mainimg}
              />
            </div>
          </div>
        </section>

        <div>
          <p className="text-center font-normal text-xl text-[#8A94A6]">
            We are trusted by hundreads of game companies
          </p>
          <div className="mt-[23px] pb-[84px] pt-[23px]">
            <div className="mt-[23px] container custom_container text-center mx-auto">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
