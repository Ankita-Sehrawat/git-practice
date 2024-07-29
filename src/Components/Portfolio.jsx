import React from 'react'
import { Arrow_ylw, Blue_dot_icon, Green_dot_icon, Red_dot_icon, Ylw_dot_icon } from './Common/Icons'
import { Portfolio_data } from './Common/Helper'
// import Slider from "react-slick";

const Portfolio = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='container px-5 custom_container flex justify-center flex-col items-center m-auto py-16 lg:pt-[124px] lg:pb-[75px] relative'>
            <div className='animate_scale hidden lg:block '>
                <div className='absolute top-[10%] left-[30%] '>
                    <Red_dot_icon />
                </div>
                <div className='absolute top-[25%] right-[16%] '>
                    <Blue_dot_icon />
                </div>
                <div className='absolute top-[12%] right-[7%] '>
                    <Green_dot_icon />
                </div>
                <div className='absolute top-[16%] left-[16%] '>
                    <Ylw_dot_icon />
                </div>
            </div>

            <p className='text-xl text-[#4857EC] font-medium mb-2 lg:mb-6 text-center uppercase '>Portfolio</p>
            <h1 className='text-[30px] sm:text-[36px] lg:text-[48px] text-black font-bold text-center'>Introducing our works</h1>


            <div className='flex flex-wrap justify-center py-6 lg:pt-[83px] lg:pb-[76px] max-[470px]:-mx-0 xl:-mx-5 -mx-3 w-full'>

                {/* <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider> */}

                {Portfolio_data.map((item, i) => {
                    return (
                        <div key={i} className='max-[470px]:w-full max-[470px]:px-0 w-8/12 sm:w-6/12 md:w-4/12 h-full my-4 lg:my-0 xl:px-5 px-3'>
                            <img className='max-[400px]:w-full max-sm:w-8/12  max-sm:m-auto ' src={item.img} alt="img" />
                            <div className='flex justify-between mt-3 sm:mt-6'>
                                <div className='w-10/12'>
                                    <p className='text-base md:text-xl xl:text-2xl font-medium text-black'> {item.title} </p>
                                    <p className='text-[#98A1BB] text-xs md:text-sm xl:text-lg font-normal mt-1 '>{item.details} </p>
                                </div>
                                <div className='transition-[4s] arrow_ylw_hover'>
                                    <Arrow_ylw />
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>

            <div className='text-center'>
                <button className='text-white font-bold text-sm sm:text-base p-[13px_15px] bg-[#4857EC] rounded-[3px]  '>View portfolio</button>
            </div>

        </div>
    )
}

export default Portfolio
