import React from 'react'
import CallToAction from './CallToAction'

const Banner = () => {
  return (
    <div className='bg-secondary w-2/3 h-auto px-5 mx-10 rounded-2xl flex flex-col justify-between '>
        <p className='text-primary text-xl opacity-70 py-5'>ONLINE COURSE</p>
        <div className='font-medium py-5 space-y-2'>
            <p className='text-primary text-4xl'>Sharpen Your Skills with</p>
            <p className='text-primary text-4xl'>Professional Online Courses</p>
        </div>
        <div className='py-5'>
        <CallToAction />
        </div>
        
    </div>
  )
}

export default Banner