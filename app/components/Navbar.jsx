import React from 'react'
import { LuMail, LuBell } from "react-icons/lu";
import SearchBar from './SearchBar';
import Divider from './Divider';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex flex-row my-5 px-5 justify-around items-center w-full'>

        {/* search area */}
        <div className='w-1/2'>
        <SearchBar />
        </div>
        
        {/* mail and bell */}
        <div className='flex flex-row space-x-10 mx-5'>
            <div className='flex justify-center items-center border border-1 w-10 h-10 rounded-full'>
                <LuMail className='text-xl text-accent'/> 
            </div>

            <div className='flex justify-center items-center border border-1 w-10 h-10 rounded-full'>
                <LuBell className='text-xl text-accent'/> 
            </div>
        </div>
        
        <Divider />

        <div className='flex flex-row justify-between items-center w-[15%]'>
        <RxAvatar className='text-4xl text-secondary'/> 
        <p>Akshay Manoj</p>
        </div>
        

    </div>
  )
}

export default Navbar