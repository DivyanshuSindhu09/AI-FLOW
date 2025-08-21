import Navbar from '@/components/navigation/navbar'
import React, { ReactNode } from 'react'

const RootLayout = ({children} : {children : ReactNode}) => {
    //! route groups =>
    //! () ka jo folder hoga wo url mein kaam nhi krega, app -> (dashbord) iske andar ki page.jsx '/' pe render hogi, or iska layout.jsx iske andar k sare routes ke parent ki tarah act krega
    
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default RootLayout