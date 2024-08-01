import React from 'react';
import footlogo from '../assets/images/png/play_ .png';
import { Facebook_icon, Net_icon, Tweeter_icon, Youtube_icon } from './Common/Icons';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#ffffff] xl:pt-[145px] md:pt-24 pt-[50px] pb-[50px] lg:pb-[88px] relative">
      <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
        <div className="flex flex-row flex-wrap  mb-[62px]">
          <div className=" w-full lg:w-4/12 px-3 flex flex-col justify-center sm:justify-start items-center sm:items-start  ">
            <img src={footlogo} alt="footlogo" className="cursor-pointer m-auto lg:m-0" />
            <p className="text-[#AAB2C8] font-[400] leading-[24px] text-[16px] lg:text-[20px] lg:max-w-[369px] pt-6 text-center lg:text-start">
              Beneath the surface of every groundbreaking application lies a foundation built on
              countless lines of code, each meticulously crafted to achieve perfection.
            </p>
            <div className="flex gap-5 w-full justify-center lg:justify-start  my-4 sm:my-[10px] lg:mb-[0px] lg:mt-8">
              <div className="social_hover cursor-pointer ">
                <Net_icon />
              </div>
              <div className="social_hover cursor-pointer ">
                <a href="https://facebook.com/">
                  <Facebook_icon />
                </a>
              </div>
              <div className="social_hover cursor-pointer ">
                <Tweeter_icon />
              </div>
              <div className="social_hover cursor-pointer ">
                <Youtube_icon />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 px-3 pt-7 lg:pt-[0px] ">
            <div className="flex flex-row flex-wrap">
              <div className="sm:w-3/12 w-1/2 flex justify-center lg:justify-end">
                <ul>
                  <li className="text-[#000000] font-bold text-[18px] lg:text-[24px] leading-[29px] mb-2 lg:mb-[27px] text-center sm:text-start ">
                    Home
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start  ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Partners
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Features
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Testimonial
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sm:w-3/12 w-1/2 flex justify-center lg:justify-end">
                <ul>
                  <li className="text-[#000000] font-bold  text-[18px] lg:text-[24px] leading-[29px] mb-2 lg:mb-[27px] text-center sm:text-start ">
                    Pages
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      About Us
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Careers
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Case Studies
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sm:w-3/12 w-1/2 flex justify-center lg:justify-end mt-5 sm:mt-0">
                <ul>
                  <li className="text-[#000000] font-bold  text-[18px] lg:text-[24px] leading-[29px] mb-2 lg:mb-[27px] text-center sm:text-start ">
                    Blog
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Blog Listing
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Blog Article
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Newsroom
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sm:w-3/12 w-1/2 flex justify-center lg:justify-end mt-5 sm:mt-0">
                <ul>
                  <li className="text-[#000000] font-bold  text-[18px] lg:text-[24px] leading-[29px] mb-2 lg:mb-[27px] text-center sm:text-start ">
                    Portfolio
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Portfolio
                    </a>
                  </li>
                  <li className="mb-[10px] lg:mb-[19px] text-center sm:text-start ">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[16px] lg:text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Single Case
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-[#808080] font-[500] text-[18px] leading-[22px]  text-center lg:text-start">
          © {year} Game Analytics
        </p>
      </div>
    </div>
  );
};

export default Footer;
