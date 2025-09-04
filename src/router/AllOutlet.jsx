import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

const AllOutlet = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AllOutlet
