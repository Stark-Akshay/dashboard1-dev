import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const CallToAction = () => {
  return (
    <div className='bg-accent w-40 h-auto py-4 px-2 rounded-full flex flex-row justify-around items-center'>
        <p className='text-whitish text-xl'>Join Now</p>
        <div className='bg-whitish rounded-full flex justify-center items-center w-[35px] h-[35px]'>
            <IoIosArrowForward />
        </div>
    </div>
  )
}

export default CallToAction