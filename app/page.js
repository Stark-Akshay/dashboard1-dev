import Image from 'next/image'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'

export default function Home() {
  return (
      <div className='flex flex-row bg-offaccent'>
        {/* sidenav bar */}
        <SideBar />
        {/* rest of the area */}
        <section className='flex flex-col w-full'>
          <Navbar />
        </section>
      </div>
  )
}
