import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Blue_smiley, FiveStar_icon, Test_left_arrow, Test_right_arrow } from './Common/Icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Test_data } from './Common/Helper';

const Testimonial = () => {
    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: true,
        speed: 500,
        autoplay:false,
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
        centerPadding: '20px', // Adjusted for better centering
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className='bg-[#f5f6fb]'>
            <div className='container px-5 custom_container m-auto pt-[65px]'>
                <p className='text-xl text-[#4857EC] font-medium uppercase'>Testimonial</p>
                <div className='flex justify-between items-center mt-6'>
                    <h1 className='text-[30px] sm:text-[36px] lg:text-[48px] text-black font-bold'>What are they saying?</h1>
                    <div className='flex gap-4'>
                        <Test_left_arrow onClick={handlePrev} />
                        <Test_right_arrow onClick={handleNext} />
                    </div>
                </div>
                <div className='bg-map_bg bg-cover min-h-screen'>
                    <div className='pt-[95px] pb-[83px]'>
                        <Slider {...sliderSettings} ref={sliderRef}>
                            {Test_data.map((item, i) => (
                                <div key={i} className='pr-8 '> 
                                    <div className="w-[460px]  bg-white rounded-[10px] border-[3px] border-[#4857EC] p-[30px_26px_32px_26px] ">
                                        <div className='flex items-center justify-between'>
                                            <div className='flex gap-5'>
                                                <div>{item.icon} </div>
                                                <div>
                                                    <p className='text-lg font-normal text-black'>{item.name}</p>
                                                    <p className='text-base text-[#98A1BB] font-normal mt-1'>{item.position}</p>
                                                </div>
                                            </div>
                                            <div>{<FiveStar_icon />}</div>
                                        </div>
                                        <p className='text-base font-normal text-black  mt-6'>{item.details} </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
