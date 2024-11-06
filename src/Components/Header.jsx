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

  function closeNav(){
    setNavbar(false);
  }

  return (
    <div className="bg-[#f5f7fc]">
      <header className="p-5 md:p-0">
        <div className="container custom_container px-5 mx-auto flex justify-between pt-5 items-center">
          <a className="font-black text-[20px] sm:text-[32px] cursor-pointer z-50">
            play_
          </a>
          <nav
            className={`md:flex items-center navb ${navbar ? "open" : "navb"}`}
          >
            <a className="md:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0" onClick={closeNav}>
              Home
            </a>
            <a className="md:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0" onClick={closeNav}>
              Services
            </a>
            <a className="md:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0" onClick={closeNav}>
              Pricing
            </a>
            <a className="md:mr-[50px] text-sm font-medium cursor-pointer buttonHover mt-5 md:mt-0" onClick={closeNav}>
              About
            </a>
            <button className="items-center font-bold bg-[#4857EC] py-[13px] px-[25px] rounded text-base text-white duration-200  mt-5 md:mt-0 border border-[#4857EC]  hover:bg-white hover:text-[#4857EC]  ">
              Contact us
            </button>
          </nav>
          <div className="md:hidden z-50" onClick={shownav}>
            {navbar ? (<img className="h-6 w-6 rotate-[45deg]" src={close} alt="img"/>) : (<img className="h-6 w-6" src={menu} alt="img"/>)}
          </div>
        </div>

        <section className="relative container custom_container mx-auto">
          <img
            className="absolute right-0 hidden lg:block top-[102px] "
            src={positiondot}
            alt=""
          />
          <div className="container custom_container px-5 mx-auto flex md:py-[42px] py-[30px] md:flex-row flex-col-reverse items-center justify-between">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-[20px] md:mb-0 items-center text-center">
              <h1 className="font-bold text-[30px] sm:text-[45px] lg:text-[70px]  leading-8 lg:leading-[65px]">
                We design for{" "}
                <span className="underline decoration-4 decoration-[#FF3344] ">
                  games
                </span>
              </h1>
              <p className="mb-4 md:mb-8 font-normal text-lg md:max-w-[302px] mt-3 md:mt-6">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className="items-center font-bold bg-[#4857EC] py-[13px] px-[25px] rounded text-base text-white duration-200 border border-[#4857EC]  hover:bg-white hover:text-[#4857EC] ">
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
          <div className="mt-[23px] md:pb-[84px] pb-[30px] pt-[23px]">
            <div className="mt-[23px] container custom_container text-center mx-auto">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
