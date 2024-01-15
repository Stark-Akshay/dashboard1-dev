import Image from 'next/image'
import SideBar from './components/SideBar'

export default function Home() {
  return (
      <div className='flex flex-row bg-offaccent'>
        {/* sidenav bar */}
        <SideBar />
        {/* rest of the area */}
      </div>
  )
}
