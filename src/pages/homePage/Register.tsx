// import React from 'react'

const Register = () => {
  return (
    <div className="w-full h-[60vh] bg-white flex justify-center items-center font-mont bg-reg-bg bg-center bg-cover relative">
        

        <div className="absolute bg-black w-full h-full opacity-60"></div>

        <div className="w-[85%] z-10 flex flex-col gap-4 md:gap-5 mt-[25px md:mt-[0px] lg:mt-[0px] items-center">
            <h5 className="text-white font-semibold text-[24px] md:text-[30px] lg:text-[40px] lg:w-[70%] md:w-[70%] text-center">WANT TO ATTEND SOUTHWEST YOUTH SUMMIT 2.0 ?</h5>

            <button className=' px-3 py-2 md:w-[250px] bg-orange-400 border-none animate-pulse hover:bg-orange-600 text-white font-semibold'>
                Register
            </button>
        </div>
    </div>
  )
}

export default Register