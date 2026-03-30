// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import pic12 from "../../assets/swys2026/12.jpg";
import pic13 from "../../assets/swys2026/13.jpg";
import pic14 from "../../assets/swys2026/14.jpg";
import pic15 from "../../assets/swys2026/15.jpg";
import pic16 from "../../assets/swys2026/16.jpg";
import pic17 from "../../assets/swys2026/17.jpg";
import pic18 from "../../assets/swys2026/18.jpg";
import pic19 from "../../assets/swys2026/19.jpg";
import pic20 from "../../assets/swys2026/20.jpg";
// import pic10 from "../../assets/swys2026/10.jpg";
// import pic11 from "../../assets/swys2026/11.jpg";
// import pic12 from "../../assets/swys2026/12.jpg";
// import pic13 from "../../assets/swys2026/13.jpg";

const Panelists = () => {
    const panelists = [
        { id: 1, image: pic12 },
        { id: 2, image: pic13 },
        { id: 3, image: pic14 },
        { id: 4, image: pic15 },
        { id: 5, image: pic16 },
        { id: 6, image: pic17 },
        { id: 7, image: pic18 },
        { id: 8, image: pic19 },
        { id: 9, image: pic20 },
        // { id: 10, image: pic10, name: "Panelist 10" },
        // { id: 11, image: pic11, name: "Panelist 11" },
        // { id: 12, image: pic12, name: "Panelist 12" },
        // { id: 13, image: pic13, name: "Panelist 13" },
    ];

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div id="panelists" className="w-full bg-[#f5f7fa] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2c3e] mb-4">
                        Our Panelists
                    </h2>
                    <div className="w-24 h-1 bg-[#00a4f2] mx-auto rounded-full"></div>
                    <p className="mt-4 text-[#5a6c7e] text-base md:text-lg max-w-2xl mx-auto">
                        Meet our distinguished panel of industry experts and thought leaders
                    </p>
                </div>

                {/* Carousel */}
                <div className="panelists-carousel">
                    <Slider {...settings}>
                        {panelists.map((panelist) => (
                            <div key={panelist.id} className="px-2">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                    <div className="relative overflow-hidden h-64 md:h-72 lg:h-80">
                                        <img
                                            src={panelist.image}
                                            // alt={panelist.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2c3e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    {/* <div className="p-4 text-center">
                                        <h3 className="text-lg md:text-xl font-semibold text-[#1a2c3e] mb-1">
                                            {panelist.name}
                                        </h3>
                                        <p className="text-[#00a4f2] text-sm md:text-base">Panelist</p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Panelists;