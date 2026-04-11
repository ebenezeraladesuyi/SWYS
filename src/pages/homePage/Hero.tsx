/* eslint-disable @typescript-eslint/no-explicit-any */
import Countdown from "../../components/static/Countdown";
import Typewriter from 'typewriter-effect';
import { FaArrowDown, FaArrowUp, FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
    const targetDate = new Date('2027-04-10T10:00:00');
    const [scroll, setScroll] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const showScroll = () => {
        setScroll(!scroll);
    };

    // Dynamic gradient based on mouse position
    const gradientStyle = {
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #f97316 0%, #0a0a0a 10%)`,
    };

    return (
        <div 
            id="hero" 
            className="w-full min-h-screen bg-hero-img flex justify-center items-center font-mont relative overflow-hidden py-8 md:py-12 lg:py-0"
            style={gradientStyle}
        >
            {/* Animated background particles - reduced for mobile */}
            <div className="absolute inset-0 overflow-hidden opacity-30 md:opacity-50">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-[#f97316] rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                        }}
                        animate={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            transition: {
                                duration: Math.random() * 15 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    />
                ))}
            </div>

            {/* Floating orbs - adjusted for mobile */}
            <motion.div
                className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-[#f97316] opacity-5 blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 25, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ left: '5%', top: '10%' }}
            />
            <motion.div
                className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-[#2563eb] opacity-5 blur-3xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, -25, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ right: '5%', bottom: '10%' }}
            />

            {/* Main content container */}
            <motion.div 
                className="w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl z-10 flex flex-col items-center mt-16 md:mt-20 lg:mt-24"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Top badge - adjusted for mobile */}
                {/* <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 bg-[#ffffff1a] backdrop-blur-sm rounded-full border border-[#f9731666]"
                >
                    <span className="text-[#f97316] text-xs md:text-sm font-semibold tracking-wider">
                        🚀 THE FUTURE IS NOW
                    </span>
                </motion.div> */}

                {/* Main title - better mobile sizing */}
                <motion.div 
                    className="w-full mb-4 md:mb-6 lg:mb-8 text-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h1 className="text-white text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[75px] font-black leading-tight">
                        <span className="bg-gradient-to-r from-[#f97316] to-[#fb923c] bg-clip-text text-transparent block sm:inline">
                            SOUTH WEST
                        </span>
                        <br className="hidden sm:block" />
                        <span className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[55px] xl:text-[70px]">
                            YOUTH SUMMIT 4.0
                        </span>
                    </h1>
                </motion.div>

                {/* Theme section with typewriter - adjusted height */}
                <motion.div 
                    className="w-full mb-6 md:mb-8 lg:mb-10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="inline-block">
                        <span className="text-[#f97316] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-semibold tracking-[2px] md:tracking-[4px] block mb-1 md:mb-2">
                            THEME
                        </span>
                        <div className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[35px] xl:text-[42px] font-bold h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]">
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    cursor: '|',
                                    cursorClassName: 'text-[#f97316] text-[24px] md:text-[40px]',
                                    delay: 50,
                                }}
                                onInit={(typewriter: any) => {
                                    typewriter
                                        .typeString('<span style="color: #f97316">DRIVING</span>')
                                        .pauseFor(2000)
                                        .deleteAll(25)
                                        .typeString(' <span style="color: #ffffff">LASTING</span>')
                                        .pauseFor(2000)
                                        .deleteAll(25)
                                        .typeString(' <span style="color: #ffffff">IMPACT</span>')
                                        .pauseFor(2000)
                                        .deleteAll(25)
                                        .typeString('<span style="color: #ffffff">DRIVING LASTING IMPACT</span>')
                                        .pauseFor(2000)
                                        .deleteAll(25)
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Countdown section - IMPROVED CONTAINER */}
                <motion.div 
                    className="w-full flex items-center justify-center mb-6 md:mb-8 lg:mb-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <div className="bg-[#ffffff1a] backdrop-blur-md px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-2xl border border-[#f9731666] shadow-2xl w-full max-w-3xl">
                        <Countdown targetDate={targetDate} />
                    </div>
                </motion.div>

                {/* Event details with icons - better grid for mobile */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full max-w-4xl mb-6 md:mb-8 lg:mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <motion.div 
                        className="bg-[#ffffff1a] backdrop-blur-sm p-3 md:p-4 rounded-xl border border-[#f9731633] hover:border-[#f97316] transition-all duration-300 text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaCalendarAlt className="text-[#f97316] text-xl md:text-2xl mb-1 md:mb-2 mx-auto" />
                        <h6 className="text-[#f97316] text-xs md:text-sm font-semibold">DATE</h6>
                        <p className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base">
                            {/* Friday, 10th  */}
                            April, 2027
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-[#ffffff1a] backdrop-blur-sm p-3 md:p-4 rounded-xl border border-[#f9731633] hover:border-[#f97316] transition-all duration-300 text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaMapMarkerAlt className="text-[#f97316] text-xl md:text-2xl mb-1 md:mb-2 mx-auto" />
                        <h6 className="text-[#f97316] text-xs md:text-sm font-semibold">VENUE</h6>
                        <p className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base">
                            {/* THE DOME, Akure,  */}
                            Lagos State
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-[#ffffff1a] backdrop-blur-sm p-3 md:p-4 rounded-xl border border-[#f9731633] hover:border-[#f97316] transition-all duration-300 text-center sm:col-span-2 md:col-span-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaClock className="text-[#f97316] text-xl md:text-2xl mb-1 md:mb-2 mx-auto" />
                        <h6 className="text-[#f97316] text-xs md:text-sm font-semibold">TIME</h6>
                        <p className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base">10:00 AM Prompt</p>
                    </motion.div>
                </motion.div>

                {/* CTA Buttons - stacked on mobile */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    {/* <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#f97316] text-white font-bold rounded-full shadow-lg shadow-[#f973164d] hover:shadow-xl hover:shadow-[#f9731666] transition-all duration-300 text-sm sm:text-base"
                    >
                        Register Now
                    </motion.button> */}
                    {/* <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white font-bold rounded-full border-2 border-[#f97316] hover:bg-[#f97316] transition-all duration-300 text-sm sm:text-base"
                    >
                        Learn More
                    </motion.button> */}
                </motion.div>
            </motion.div>

            {/* Scroll button - adjusted position for mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="fixed bottom-4 md:bottom-[30px] right-4 md:right-[30px] z-30"
            >
                <Link offset={-100} smooth={true} duration={500} to={scroll ? "hero" : "footer"}>
                    <motion.div 
                        className='w-10 h-10 md:w-[50px] md:h-[50px] rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white cursor-pointer flex justify-center items-center shadow-lg shadow-[#f973164d] border-2 border-white'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        onClick={showScroll}
                    >
                        {scroll ? <FaArrowUp size={16} /> : <FaArrowDown size={16} />}
                    </motion.div>
                </Link>
            </motion.div>

            {/* Corner decorations - adjusted for mobile */}
            <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-l-2 md:border-l-4 border-t-2 md:border-t-4 border-[#f97316] rounded-tl-2xl md:rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-r-2 md:border-r-4 border-t-2 md:border-t-4 border-[#f97316] rounded-tr-2xl md:rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-l-2 md:border-l-4 border-b-2 md:border-b-4 border-[#f97316] rounded-bl-2xl md:rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-r-2 md:border-r-4 border-b-2 md:border-b-4 border-[#f97316] rounded-br-2xl md:rounded-br-3xl"></div>
        </div>
    );
};

export default Hero;