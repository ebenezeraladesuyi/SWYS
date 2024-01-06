import React from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import logo from "../../../assets/images/logo.png";
import { Link } from 'react-scroll';

const Headerr = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div id='header' className="w-full h-[70px] bg-white flex justify-center items-center font-mont shadow-md fixed z-20">
        <div className="w-[85%] h-full flex justify-between items-center">
            <div className="w-[90px]">
                <img src={logo} alt="" />
            </div>
            
            <div>
                <li className="hidden lg:flex items-center gap-5 text-[14px]">
                    <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>Home</ol>

                    <Link offset={-100} smooth={true} duration={500} to="about">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>About</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="speaker">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>Speaker</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="panelists">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>Panelists</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="photos">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>Photos(SWYS 1.0)</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="partners">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>Partners</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="donate">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>Donate</ol>
                    </Link>

                    <button className=' px-3 py-2 bg-orange-400 border-none hover:bg-orange-600 text-white font-semibold animate-pulse'>
                        Register
                    </button>
                </li>

                

            { dropdown ?
                <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] text-blue-500" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-blue-500 ml-[6px]" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }

            </div>
        </div>

        { dropdown ? 

            <div className="lg:hidden w-full h-[100vh] absolute top-[71px] bg-white transition ease-in-out duration-100  " onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] gap-4 text-[#1f2035]">
                    <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold'>Home</ol>

                    <Link offset={-100} smooth={true} duration={500} to="about">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold' onClick={showDropdown}>About</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="speaker">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold' onClick={showDropdown}>Speaker</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="panelists">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold' onClick={showDropdown}>Panelists</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="photos">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold' onClick={showDropdown}>Photos(SWYS 1.0)</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="partners">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold' onClick={showDropdown}>Partners</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={500} to="donate">
                        <ol className='text-[#00a4f2] hover:text-orange-500 cursor-pointer font-semibold' onClick={showDropdown}>Donate</ol>
                    </Link>

                    <button className='px-3 py-2 w-[120px] bg-orange-400 border-none hover:bg-orange-600 text-white font-semibold'>
                        Register
                    </button>
                </div>
            </div>
        :
        null
        }

    </div>
  )
}

export default Headerr