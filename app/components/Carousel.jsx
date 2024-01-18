import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  return (
    <div id="carousel-parent" className='flex w-2/3 h-auto px- mx-10 my-5 flex-col sm:flex-row justify-around'>
        <div id='carousel-header' className='flex flex-row w-full justify-between'>
        <p className='text-xl font-medium w-1/2' >Continue Watching</p>
        <div className='flex flex-row space-x-10 w-1/2 items-center justify-end'>
            <div className='rounded-full h-[35px] w-[35px] bg-whitish flex justify-center items-center'>
                <IoIosArrowBack className='text-ttviolet'/>
            </div>
            <div className='rounded-full h-[35px] w-[35px] bg-ttviolet flex justify-center items-center'>
                <IoIosArrowForward className='text-whitish'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Carousel