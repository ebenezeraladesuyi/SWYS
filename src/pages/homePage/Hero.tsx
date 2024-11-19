/* eslint-disable @typescript-eslint/no-explicit-any */
import Countdown from "../../components/static/Countdown";
import Typewriter from 'typewriter-effect';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import React from "react";
import { Link } from "react-scroll";


const Hero = () => {

    const targetDate = new Date('2025-01-24T10:00:00');

    const [scroll, setScroll] = React.useState(false);

    const showScroll = () => {
        setScroll(!scroll)
    }

  return (
    <div id="hero" className="w-full h-[100vh] bg-white flex justify-center items-center font-mont bg-hero-img bg-center bg-cover relative">

        <div className="absolute bg-black w-full h-full opacity-50"></div>

        <div className="w-[85%] z-10 flex flex-col mt-[65px] md:mt-[60px] lg:mt-[70px]">
            <div className="w-full mb-[20px]">
                <h2 className="text-white text-[35px] md:text-[45px] lg:text-[60px] text-center font-semibold leading-10 md:leading-[60px]">
                    SOUTH WEST YOUTH SUMMIT 3.0
                </h2>

                <h3 className="text-white text-[15px] md:text-[17px] lg:text-[20px] font-semibold text-center  lg:mt-[30px]">
                    <span className="text-orange-300 text-[13px] md:text-[15px] lg:text-[18px]">THEME: </span>
                    {/* QUEST FOR THE BEST */}
                    <span>
                        <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter: any) => {
                            typewriter

                                .typeString("SHAPING")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("THE")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("FUTURE")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("SHAPING THE FUTURE")
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </span>
                </h3>
            </div>

            <div className="w-full flex gap-3 items-center justify-center">
                <Countdown targetDate={targetDate} />
            </div>

            <div className="text-[12px] lg:text-[14px] text-orange-300 text-center  mt-[20px] font-semibold">
                <h6>Date: <span className="text-white text-[14px] lg:text-[16px]">Friday, 24th January, 2025</span></h6>
                <h6>Venue: <span className="text-white lg:text-[16px] text-[14px]">Osogbo Grammar School, Osogbo, Osun State.</span></h6>
                <h6>Time: <span className="text-white lg:text-[16px] text-[14px]">9am Prompt</span></h6>
            </div>
        </div>

        {scroll ?
            <Link offset={-100} smooth={true} duration={500} to="hero">
                <div className='fixed w-[40px] h-[40px] rounded-full bg-orange-400 text-white cursor-pointer flex justify-center items-center bottom-[30px] right-[30px] z-30 animate-bounce border-[1px] border-white' onClick={showScroll}>
                    <FaArrowUp />
                </div>
            </Link>
        :
            <Link offset={-100} smooth={true} duration={500} to="footer">
                <div className='fixed w-[40px] h-[40px] rounded-full bg-orange-400 text-white cursor-pointer flex justify-center items-center bottom-[30px] right-[30px] z-30 animate-bounce border-[1px] border-white' onClick={showScroll}>
                    <FaArrowDown />
                </div>
            </Link>
        }

    </div>
  )
}

export default Hero