// import React from 'react'

// import { Footerr } from "../../components"
import About from "./About"
// import Commissioners from "./Commissioners"
import Donate from "./Donate"
import Hero from "./Hero"
import Info from "./Info"
import Panel from "./Panel"
// import Panelist from "./Panelist"
import Partners from "./Partners"
import Photo from "./Photo"
import Photos from "./Photos"
import Register from "./Register"
import Speakers from "./Speakers"
import Subscribe from "./Subscribe"

const HomeComp = () => {
  return (
    <div className="">
        <Hero />
        <About />
        <Info />
        <Speakers />
        <Panel />
        <Register />
        <Photos />
        <Photo />
        {/* <Commissioners /> */}
        <Donate />
        <Subscribe />
        <Partners />
    </div>
  )
}

export default HomeComp