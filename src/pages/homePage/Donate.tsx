// import React from 'react'

const Donate = () => {
  return (
    <div id="donate" className="w-full h-[70vh] bg-white flex justify-center items-center font-mont bg-donate-bg bg-center bg-cover relative">
        

        <div className="absolute bg-black w-full h-full opacity-60"></div>

        <div className="w-[85%] z-10 flex flex-col gap-1 md:gap-5 mt-[25px md:mt-[0px] lg:mt-[0px] items-center ">
            <h5 className="text-gray-300 font-semibold text-[15px] md:text-[20px] lg:text-[25px] lg:w-[70%] md:w-[70%] text-center mb-[7px]">TO DONATE TO SOUTHWEST YOUTH SUMMIT</h5>
            
            <h5 className="text-white font-semibold text-[19px] text-center mb-[6px"><span className="text-[14px] text-gray-300">Account Name:</span> <br/>SOUTHWEST YOUTH SUMMIT</h5>
            <h5 className="text-white font-semibold text-[19px] text-center mb-[6px"><span className="text-[14px] text-gray-300">Account Number:</span> <br />0092242253</h5>
            <h5 className="text-white font-semibold text-[19px] text-center mb-[6px"><span className="text-[14px] text-gray-300">Bank Name:</span> <br />STERLING BANK</h5>

            {/* <button className=' px-3 py-2 md:w-[250px] bg-orange-400 border-none animate-pulse hover:bg-orange-600 text-white font-semibold'>
                Register
            </button> */}
        </div>
    </div>
  )
}

export default Donate;