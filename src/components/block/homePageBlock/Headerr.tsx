import React from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import logo from "../../../assets/images/logo.png";

const Headerr = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div className="w-full h-[70px] bg-white flex justify-center items-center font-mont shadow-md fixed z-20">
        <div className="w-[85%] h-full flex justify-between items-center">
            <div className="w-[90px]">
                <img src={logo} alt="" />
            </div>
            
            <div>
                <li className="hidden md:flex items-center gap-5">
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>Home</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>About</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>News</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>Speakers</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>Sponsors</ol>
                </li>

                

            { dropdown ?
                <div className="md:hidden text-[22px] cursor-pointer  ml-[6px] text-blue-500" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="md:hidden text-[22px] cursor-pointer text-blue-500 ml-[6px]" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }

            </div>
        </div>

        { dropdown ? 

            <div className="lg:hidden w-full h-[100vh] absolute top-[71px] bg-white transition ease-in-out duration-100 " onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] gap-4 text-[#1f2035]">
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>Home</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>About</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>News</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>Speakers</ol>
                    <ol className='text-blue-600 hover:text-orange-500 cursor-pointer font-semibold'>Sponsors</ol>
                </div>
            </div>
        :
        null
        }

    </div>
  )
}

export default Headerr