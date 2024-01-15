import React from 'react'
import { GiDeathStar } from "react-icons/gi";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { MdOutlinePlayLesson } from "react-icons/md";


import SideBarIconComp from './SideBarIconComp';


const SideBar = () => {
  
  return (
    <div className='flex flex-col items-center bg-whitish w-[20%] h-[100vh]'>
        
        <div className='flex flex-row justify-center items-center mt-5 mb-[5rem] w-full'>
            <GiDeathStar className='text-secondary text-3xl'/>
            <p className='text-3xl text-offset font-semibold'>Coursue</p>
        </div>
        
        <div className='flex flex-col justify-start w-[80%] h-full'>
          <p className='text-md text-grayish mb-5'>OVERVIEW</p>

          <SideBarIconComp content="Dashboard" Icon={<LuLayoutPanelLeft/>}/>
          <SideBarIconComp content="Inbox" Icon={<LuInbox/>} />
          <SideBarIconComp content="Lesson" Icon={<MdOutlinePlayLesson/>} />

        </div>

    </div>
  )
}

export default SideBar