// import React from 'react'

import { Outlet } from "react-router-dom";
import { Footerr, Headerr } from "../components/block";

const HomePageLayout = () => {
  return (
    <div className="bg-white">

        <Headerr />

        <Outlet />

        <Footerr />

    </div>
  )
}

export default HomePageLayout;