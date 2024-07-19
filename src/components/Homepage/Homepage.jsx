import React,{useEffect,useState} from 'react'
import Navbar from '../Allpages/Navbar'
import Home from '../Allpages/Home'
import Process from '../Allpages/Process'
import Footer from '../Footer/Footer'
import Testimonials from '../Testimonial/Testimonials'
import Categories from '../../categories/Categories'

// import Testimonial from '../Team/Team'

function Homepage() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Categories/>
    <Process/>
     <Testimonials/>
    <Footer/>
  
    {/* <Testimonial/> */}
    </>
  )
}

export default Homepage
