
import { motion, Variants } from 'framer-motion';
import { 
    FaCalendarAlt, 
    FaMapMarkerAlt, 
    FaLightbulb, 
    FaUsers, 
    FaTasks,
    FaClock,
    FaRegHandshake,
    FaMicrophoneAlt,
    FaNetworkWired,
    FaRocket,
    FaUserTie,
    FaChartLine
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Info = () => {
    const infoCards = [
        {
            id: 1,
            title: "Date & Time",
            icon: <FaCalendarAlt className="text-[#f97316] hover:text-[#ffffff] text-2xl md:text-3xl" />,
            content: (
                <div className="space-y-2">
                    <p className="text-[#333333] text-sm md:text-base flex items-center gap-2">
                        <FaCalendarAlt className="text-[#f97316] text-sm" />
                        <span className="font-semibold">Date:</span> Friday, 10th April, 2026
                    </p>
                    <p className="text-[#333333] text-sm md:text-base flex items-center gap-2">
                        <FaClock className="text-[#f97316] text-sm" />
                        <span className="font-semibold">Time:</span> 10:00 AM Prompt
                    </p>
                </div>
            )
        },
        {
            id: 2,
            title: "Venue",
            icon: <FaMapMarkerAlt className="text-[#f97316] hover:text-[#ffffff] text-2xl md:text-3xl" />,
            content: (
                <p className="text-[#333333] text-sm md:text-base leading-relaxed">
                    <span className="font-semibold">The International Conference and Cultural Centre (The Dome),</span><br />
                    Alagbaka, Akure, Ondo State
                </p>
            )
        },
        {
            id: 3,
            title: "Theme",
            icon: <FaLightbulb className="text-[#f97316] hover:text-[#ffffff] text-2xl md:text-3xl" />,
            content: (
                <p className="text-[#333333] text-sm md:text-base font-semibold italic">
                    "Driving Lasting Impact"
                </p>
            )
        },
        {
            id: 4,
            title: "Expected Attendees",
            icon: <FaUsers className="text-[#f97316] hover:text-[#ffffff] text-2xl md:text-3xl" />,
            content: (
                <div className="flex flex-wrap gap-2">
                    {[
                        { icon: <FaUserTie />, text: "Government Officials" },
                        { icon: <FaUsers />, text: "Youth Stakeholders" },
                        { icon: <FaChartLine />, text: "DFIs" },
                        { icon: <FaUserTie />, text: "CEOs" },
                        { icon: <FaRocket />, text: "Entrepreneurs" },
                        { icon: <FaLightbulb />, text: "Innovators" },
                        { icon: <FaRegHandshake />, text: "International Partners" }
                    ].map((item, index) => (
                        <span 
                            key={index}
                            className="bg-[#f9731610] text-[#333333] text-xs md:text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#f9731620]"
                        >
                            <span className="text-[#f97316] text-xs md:text-sm">{item.icon}</span>
                            {item.text}
                        </span>
                    ))}
                </div>
            )
        },
        {
            id: 5,
            title: "Key Activities",
            icon: <FaTasks className="text-[#f97316]  hover:text-[#ffffff] text-2xl md:text-3xl" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { icon: <FaMicrophoneAlt />, text: "Keynote Speeches" },
                        { icon: <FaUsers />, text: "Panel Sessions" },
                        { icon: <FaRocket />, text: "Innovation Showcase" },
                        { icon: <FaRegHandshake />, text: "MOU Signing (Delegates)" },
                        { icon: <FaNetworkWired />, text: "Networking" }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="bg-[#f9731605] p-2.5 rounded-lg border border-[#f9731610] flex items-center gap-2"
                        >
                            <span className="text-[#f97316] text-sm md:text-base">{item.icon}</span>
                            <span className="text-[#333333] text-xs md:text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            )
        }
    ];

    // Fixed variants with proper typing
    const containerVariants: Variants = {
        hidden: { 
            opacity: 0 
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { 
            y: 20, 
            opacity: 0 
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.5
            }
        }
    };

    return (
        <section id="info" className="w-full bg-[#ffffff] py-12 md:py-16 lg:py-20 font-mont">
            <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-10 md:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[#f97316] text-sm md:text-base font-semibold tracking-[4px] mb-3">
                        4.0 SUMMIT DETAILS 
                    </h2>
                    <h3 className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl font-bold">
                        Everything You Need To Know
                    </h3>
                    <div className="w-20 h-1 bg-[#f97316] mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Cards Container - Flex on desktop, column on mobile */}
                <motion.div 
                    className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-5 lg:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {infoCards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={itemVariants}
                            className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-16px)] bg-[#ffffff] rounded-xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f0f0f0] hover:border-[#f97316] group relative"
                            whileHover={{ 
                                y: -5,
                                transition: { 
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                    duration: 0.2 
                                }
                            }}
                        >
                            {/* Card Header with Icon */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f9731610] rounded-lg flex items-center justify-center group-hover:bg-[#2c2b2b] transition-colors duration-300">
                                    <div className="group-hover:text-[#ffffff] transition-colors duration-300">
                                        {card.icon}
                                    </div>
                                </div>
                                <h4 className="text-[#1a1a1a] text-lg md:text-xl font-bold">
                                    {card.title}
                                </h4>
                            </div>

                            {/* Card Content */}
                            <div className="text-[#4a4a4a]">
                                {card.content}
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-xl"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div 
                    className="text-center mt-12 md:mt-16 lg:mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <p className="text-[#4a4a4a] text-sm md:text-base mb-4">
                        Don't miss this opportunity to be part of the biggest youth summit in the South West
                    </p>
                    <NavLink to="/registerattendee">
                        <button className="bg-[#f97316] text-[#ffffff] px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#e05f00] transition-colors duration-300 shadow-md hover:shadow-lg">
                            Register Now
                        </button>
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Info;