import React from 'react'
import { GiDeathStar } from "react-icons/gi";
import { LuLayoutPanelLeft,LuInbox } from "react-icons/lu";
import { MdOutlinePlayLesson } from "react-icons/md";
import { GoTasklist } from "react-icons/go";

import SideBarIconComp from './SideBarIconComp';
import SideBarFriends from './SideBarFriends';


const SideBar = () => {
  
  return (
    <div className='flex flex-col items-center bg-whitish w-[20rem] h-[100vh]'>
        
        <div className='flex flex-row justify-center items-center mt-5 mb-[5rem] w-full'>
            <GiDeathStar className='text-secondary text-3xl'/>
            <p className='text-3xl text-offset font-semibold'>Coursue</p>
        </div>
        
        {/* Section 1 of Sidebar */}
        <div className='flex flex-col justify-start w-[80%] h-full'>
          <p className='text-md text-grayish mb-5'>OVERVIEW</p>

          <div className='flex flex-col justify-between gap-5'>
          <SideBarIconComp content="Dashboard" Icon={<LuLayoutPanelLeft/>} active="true"/>
          <SideBarIconComp content="Inbox" Icon={<LuInbox/>} />
          <SideBarIconComp content="Lesson" Icon={<MdOutlinePlayLesson/>} />
          <SideBarIconComp content="Tasks" Icon={<GoTasklist/>} />

          </div>
          

        </div>
        
        {/* Section 2 of Sidebar */}

        <div className='flex flex-col justify-start w-[80%] h-full'>
          <p className='text-md text-grayish mb-5'>FRIENDS</p>

          <div className='flex flex-col justify-between gap-5'>
         <SideBarFriends content="Krishnapriya" status="Girl Friend" />
         <SideBarFriends content="Clins" status="Old Friend" />
         <SideBarFriends content="Jacob" status="Old Friend" />
          </div>
          

        </div>

    </div>
  )
}

export default SideBar