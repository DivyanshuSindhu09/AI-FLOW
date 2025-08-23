import LeftSideBar from '@/components/navigation/LeftSideBar'
import Navbar from '@/components/navigation/navbar'
import React, { ReactNode } from 'react'

const RootLayout = ({children} : {children : ReactNode}) => {
    //! route groups =>
    //! () ka jo folder hoga wo url mein kaam nhi krega, app -> (dashbord) iske andar ki page.jsx '/' pe render hogi, or iska layout.jsx iske andar k sare routes ke parent ki tarah act krega
    
  return (
    <main className='background-light850_dark100 relative'>
      <Navbar/>
      <div className='flex'>
        <LeftSideBar/>
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'> {children} </div>
        </section>
      </div>
    </main>
  )
}

export default RootLayout