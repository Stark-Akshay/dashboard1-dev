import React from 'react'


const SideBarIconComp = ({content,Icon,active}) => {
  return (
    <div className='flex flex-row justify-start gap-x-5 items-center'>
              
              <div className={active?'text-secondary text-3xl':'text-accent text-3xl'}>
                {Icon}
              </div>
              <p className='text-accent font-semibold text-2xl'>{content}</p>
     </div>
  )
}

export default SideBarIconComp