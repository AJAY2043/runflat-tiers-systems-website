import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../services/Services'
import Products from '../Products/Products'
import Address from '../Address/Address'
import Contact from '../Contact/Contact'
import Hero2 from '../HeroPart2/Hero2'
import Hero3 from '../HeroPart3/Hero3'
import Hero4 from '../HeroPart4/Hero4'

const Sections = () => {
  return (
    <div>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <About/>
        <Services/>
        <Products/>
        <Address/>
        <Contact/>
    </div>
  )
}

export default Sections
