import React from 'react'
import Card from './Card'
import { RiPencilRuler2Line } from "react-icons/ri";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaLaravel } from "react-icons/fa";


const Cards = () => {
  return (
    <div className='w-2/3 h-auto px- mx-10 my-5 flex flex-row justify-around'>
        <Card Icon={<RiPencilRuler2Line />} Title="2/8 watched" Description="UI/UX Design"/>
        <Card Icon={<MdOutlineBrandingWatermark />} Title="3/8 watched" Description="Branding"/>
        <Card Icon={<FaLaravel />} Title="6/12 watched" Description="Front End"/>
    </div>
  )
}

export default Cards