// import React from 'react'

import { BallTriangle } from "react-loader-spinner";
import logo from "../../assets/images/logo.png"

const IsLoading = () => {

  return (
    <div style={{width:"100%", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        {/* <i style={{fontSize:"15px", color:"#0a4757", marginBottom:"40px"}}>SWYS</i> */}

        <img src={logo} className="w-[80px]" alt="Logo" />

        <BallTriangle color="#00a4f2" width="80" visible={true} />

        <i style={{fontSize:"17px", color:"#00a4f2", marginTop:"40px"}}>Loading...</i>

    </div>
  )
}

export default IsLoading