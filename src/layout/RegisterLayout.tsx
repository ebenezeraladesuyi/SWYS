// import React from 'react'

import { Outlet } from "react-router-dom"

const RegisterLayout = () => {
  return (
    <div className="bg-white">
        <Outlet />
    </div>
  )
}

export default RegisterLayout