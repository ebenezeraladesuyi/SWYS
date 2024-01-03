// import React from 'react'

import { Outlet } from "react-router-dom";
import { Footerr, Headerr } from "../components/block";

const HomePageLayout = () => {
  return (
    <div>

        <Headerr />

        <Outlet />

        <Footerr />

    </div>
  )
}

export default HomePageLayout;