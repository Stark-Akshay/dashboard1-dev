import React from 'react'
import { IoMdMore } from "react-icons/io";

const Card = ({Icon, Title, Description,color}) => {
  return (
    <div className='bg-whitish flex flex-row rounded-full p-2 space-x-5 items-center '>
        <div className={`flex justify-center items-center text-3xl bg-[${color}] p-5 rounded-full`}>
            {Icon}
        </div>

        <div className='flex flex-col justify-around items-start'>
            <p className='text-grayish text-xs font-medium'>{Title}</p>
            <p className='text-accent text-md font-bold'>{Description}</p>
        </div>

        {/* more icon */}
        <IoMdMore className='text-3xl'/>
    </div>
  )
}

export default Card