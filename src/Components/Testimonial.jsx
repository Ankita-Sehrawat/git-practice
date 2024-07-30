import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Blue_Arrow, Blue_smiley, FiveStar_icon, Test_left_arrow, Test_right_arrow } from './Common/Icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Test_data } from './Common/Helper';

const Testimonial = () => {
    const sliderRef = useRef();

    const sliderSettings = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='bg-[#f5f6fb]'>
            <div className='container px-5 custom_container m-auto pt-[65px]'>
                <p className='text-xl text-[#4857EC] font-medium uppercase text-center sm:text-start'>Testimonial</p>
                <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-3 lg:mt-6'>
                    <h1 className='text-[30px] sm:text-[36px] lg:text-[48px] text-black font-bold text-center sm:text-start'>What are they saying?</h1>
                    <div className='flex gap-4 mt-5 sm:mt-0'>
                        <span onClick={()=>sliderRef.current.slickPrev()}><Test_left_arrow  /></span>
                        <span onClick={()=>sliderRef.current.slickNext()}><Test_right_arrow  /></span>
                    </div>
                </div>
                <div className='bg-map_bg bg-cover'>
                    <div className='py-10 lg:pt-[95px] lg:pb-[83px]'>
                        <Slider {...sliderSettings} ref={sliderRef}>
                            {Test_data.map((item, i) => (
                                <div key={i} className='px-4 '>
                                    <div className="w-full sm:max-w-[460px] bg-white rounded-[10px] p-[15px_10px] lg:p-[30px_26px_32px_26px] card_layer">
                                        <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
                                            <div className='flex gap-3 sm:gap-5'>
                                                <div>{item.icon} </div>
                                                <div>
                                                    <p className='text-base md:text-lg font-normal text-black  '>{item.name}</p>
                                                    <p className='text-xs md:text-base text-[#98A1BB] font-normal mt-1'>{item.position}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-end sm:flex-none '>{<FiveStar_icon />}</div>
                                        </div>
                                        <p className='text-sm lg:text-base font-normal text-black mt-3 lg:mt-6'>{item.details} </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='flex justify-center pb-10 lg:pb-[136px]'>
                        <button className='text-lg text-[#4857EC] font-bold flex items-center gap-[15px] '>See all testimonials
                            <span>
                                <Blue_Arrow />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;
