// import React from 'react'

// import { Footerr } from "../../components"
import About from "./About"
// import Commissioners from "./Commissioners"
import Donate from "./Donate"
import Hero from "./Hero"
import Info from "./Info"
import Panel from "./Panel"
import Panelists from "./Panelists"
// import Panelist from "./Panelist"
import Partners from "./Partners"
import Photo from "./Photo"
import Photos from "./Photos"
import Register from "./Register"
import Speakers from "./Speakers"
import Subscribe from "./Subscribe"
import Training from "./Training"

const HomeComp = () => {
  return (
    <div className="">
        <Hero />
        <About />
        <Info />
        <Training />
        <Speakers />
        <Panel />
        <Panelists />
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