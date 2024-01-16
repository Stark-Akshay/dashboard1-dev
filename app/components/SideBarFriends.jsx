import React from 'react'
import { RxAvatar } from "react-icons/rx";


const SideBarFriends = ({content, status}) => {
    return (
      <div className='flex flex-row justify-start gap-x-5 items-center'>
                
                <div className='text-secondary text-4xl flex items-center justify-center'>
                  <RxAvatar />
                </div>
                <div className='flex flex-col flex-start'>
                <p className='text-accent font-semibold text-md'>{content}</p>
                <p className='text-grayish text-sm'>{status}</p>
                </div>
                
       </div>
    )
  }
export default SideBarFriends