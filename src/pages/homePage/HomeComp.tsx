// import React from 'react'

// import { Footerr } from "../../components"
import About from "./About"
import Hero from "./Hero"
import Panelist from "./Panelist"
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
    </div>
  )
}

export default HomeComp