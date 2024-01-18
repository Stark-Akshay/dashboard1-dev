import React from 'react'
import Card from './Card'
import { RiPencilRuler2Line } from "react-icons/ri";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaLaravel } from "react-icons/fa";


const Cards = () => {
  return (
    <div className='w-2/3 h-auto px- mx-10 my-5 flex flex-col sm:flex-row justify-around'>
        <Card Icon={<RiPencilRuler2Line />} Title="2/8 watched" Description="UI/UX Design" bgColor="bg-bgviolet" textColor="text-ttviolet"/>
        <Card Icon={<MdOutlineBrandingWatermark />} Title="3/8 watched" Description="Branding" bgColor="bg-bgpurple" textColor="text-ttpurple"/>
        <Card Icon={<FaLaravel />} Title="6/12 watched" Description="Front End" bgColor="bg-bgpink" textColor="text-ttpink"/>
    </div>
  )
}

export default Cards