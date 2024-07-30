import React from 'react';
import footlogo from '../assets/images/png/play_ .png';
import { Facebook_icon, Net_icon, Tweeter_icon, Youtube_icon } from './Common/Icons';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#ffffff] lg:pt-[145px] pt-[50px] pb-[50px] lg:pb-[88px] relative">
      <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
        <div className="flex flex-row flex-wrap mb-[62px]">
          <div className="xl:w-4/12 px-3 w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
            <img src={footlogo} alt="footlogo" className="cursor-pointer" />
            <p className="text-[#AAB2C8] text-[400]  text-center lg:text-start leading-[24px] text-[20px] lg:max-w-[369px] pt-6">
              Beneath the surface of every groundbreaking application lies a foundation built on
              countless lines of code, each meticulously crafted to achieve perfection.
            </p>
            <div className="flex gap-5 mt-[32px] mb-[30px] lg:mb-[0px]">
              <div className="social_hover cursor_pointer">
                <Net_icon />
              </div>
              <div className="social_hover cursor_pointer">
                <Facebook_icon />
              </div>
              <div className="social_hover cursor_pointer">
                <Tweeter_icon />
              </div>
              <div className="social_hover cursor_pointer">
                <Youtube_icon />
              </div>
            </div>
          </div>
          <div className="xl:w-8/12 px-3 md:pt-10 lg:pt-[0px] w-full ">
            <div className="flex flex-row flex-wrap">
              <div className="md:w-3/12 w-1/2 flex justify-center lg:justify-start">
                <ul>
                  <li className="text-[#000000] font-bold text-[24px] leading-[29px] mb-[27px] ">
                    Home
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Partners
                    </a>
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Features
                    </a>
                  </li>{' '}
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Testimonial
                    </a>
                  </li>{' '}
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-3/12 w-1/2 flex justify-center lg:justify-start">
                <ul>
                  <li className="text-[#000000] font-bold text-[24px] leading-[29px] mb-[27px] ">
                    Pages
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      About Us
                    </a>
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Careers
                    </a>
                  </li>{' '}
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Case Studies
                    </a>
                  </li>{' '}
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-3/12 w-1/2 flex justify-center lg:justify-start">
                <ul>
                  <li className="text-[#000000] font-bold text-[24px] leading-[29px] mb-[27px] ">
                    Blog
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Blog Listing
                    </a>
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Blog Article
                    </a>
                  </li>{' '}
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Newsroom
                    </a>
                  </li>{' '}
                </ul>
              </div>
              <div className="md:w-3/12 w-1/2 flex justify-center lg:justify-start">
                <ul>
                  <li className="text-[#000000] font-bold text-[24px] leading-[29px] mb-[27px] ">
                    Portfolio
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Portfolio
                    </a>
                  </li>
                  <li className="mb-[19px]">
                    <a
                      href=""
                      className="text-[#AAB2C8] text-[600] text-[20px] leading-[29px] hover:text-[#000] transition-all duration-500 ">
                      Single Case
                    </a>
                  </li>{' '}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-[#808080] text-[500] text-[18px] leading-[22px] pt-5  text-center lg:text-start">
          © {year} Game Analytics
        </p>
      </div>
    </div>
  );
};

export default Footer;
