// import React from 'react'

// import { Footerr } from "../../components"
import About from "./About"
import Hero from "./Hero"
import Panelist from "./Panelist"
import Partners from "./Partners"
import Photos from "./Photos"
import Register from "./Register"
import Speakers from "./Speakers"

const HomeComp = () => {
  return (
    <div className="">
        <Hero />
        <About />
        <Speakers />
        <Panelist />
        <Register />
        <Photos />
        <Partners />
    </div>
  )
}

export default HomeComp