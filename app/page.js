import Image from 'next/image'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Cards from './components/Cards'

export default function Home() {
  return (
      <div className='flex flex-row bg-offaccent'>
        {/* sidenav bar */}
        <SideBar />
        {/* rest of the area */}
        <section className='flex flex-col w-full'>
          <Navbar />

          <section className='flex flex-col w-full h-full '>
            
              {/* Banner */}
                <Banner />
              {/* Cards */}
                <Cards />
              {/* Carousel */}

              {/* Lesson  */}
          

            <div id='statistic'>

            </div>

          </section>
        </section>
      </div>
  )
}
