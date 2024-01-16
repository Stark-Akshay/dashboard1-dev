import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className='h-full w-full bg-whitish flex flex-row space-x-3 p-3 rounded-full items-center'>
            <IoIosSearch className='text-accent text-2xl font-medium' />
            <input type='text' placeholder='Search your courses....' className='text-xl bg-whitish h-full outline-none ring-transparent w-full'/>
        </div>
  )
}

export default SearchBar