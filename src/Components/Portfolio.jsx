import React from 'react'
import { Arrow_ylw, Blue_dot_icon, Green_dot_icon, Red_dot_icon, Ylw_dot_icon } from './Common/Icons'
import { Portfolio_data } from './Common/Helper'

const Portfolio = () => {
    return (
        <div className='bg-[#f5f7fc]'>
            <div className='container px-5 custom_container flex justify-center flex-col items-center m-auto py-16 lg:pt-[124px] lg:pb-[75px] relative'>
                <div className=' hidden lg:block '>
                    <div className='absolute top-[10%] left-[30%] animate_scale'>
                        <Red_dot_icon />
                    </div>
                    <div className='absolute top-[25%] right-[16%] animate_scale'>
                        <Blue_dot_icon />
                    </div>
                    <div className='absolute top-[12%] right-[7%] animate_scale'>
                        <Green_dot_icon />
                    </div>
                    <div className='absolute top-[16%] left-[16%] animate_scale'>
                        <Ylw_dot_icon />
                    </div>
                </div>
                <p className='text-xl text-[#4857EC] font-medium mb-2 lg:mb-6 text-center uppercase tracking-[4px] '>Portfolio</p>
                <h1 className='text-[30px] leading-7 sm:text-[36px] lg:text-[48px] text-black font-bold text-center'>Introducing our works</h1>
                <div className='flex flex-wrap justify-center py-6 lg:pt-[83px] lg:pb-[76px] max-[470px]:-mx-0 xl:-mx-5 -mx-3 w-full'>
                    {Portfolio_data.map((item, i) => {
                        return (
                            <div key={i} className='max-[470px]:w-full max-[470px]:px-0 w-8/12 sm:w-6/12 md:w-4/12 h-full my-4 lg:my-0 xl:px-5 px-3 cursor-pointer '>
                                <div className='overflow-hidden rounded-3xl'>
                                    <img className='max-[400px]:w-full max-sm:w-8/12  max-sm:m-auto transition-[10s] hover:scale-125 ' src={item.img} alt="img" />
                                    </div>
                                <div className='flex justify-between mt-3 sm:mt-6'>
                                    <div className='w-11/12'>
                                        <p className='text-base md:text-xl xl:text-2xl font-medium text-black'> {item.title} </p>
                                        <p className='text-[#98A1BB] text-xs md:text-sm xl:text-lg font-normal mt-1 pr-2'>{item.details} </p>
                                    </div>
                                    <div className='arrow_ylw_hover cursor-pointer'>
                                        <Arrow_ylw />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center'>
                    <button className='text-white font-bold text-sm sm:text-base p-[13px_15px] bg-[#4857EC] rounded-[3px] '>View portfolio</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
