// import React from 'react'

import PhotosCard from "../../components/static/PhotosCard";
import pic1 from "../../assets/swys2026/1.jpg";
import pic2 from "../../assets/swys2026/2.jpg";
import pic3 from "../../assets/swys2026/3.jpg";
import pic4 from "../../assets/swys2026/4.jpg";
import pic5 from "../../assets/swys2026/5.jpg";
import pic6 from "../../assets/swys2026/6.jpg";
import pic7 from "../../assets/swys2026/7.jpg";
import pic8 from "../../assets/swys2026/8.jpg";
import pic9 from "../../assets/swys2026/9.jpg";
import pic10 from "../../assets/swys2026/10.jpg";
import pic11 from "../../assets/swys2026/11.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Photo = () => {

    
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 1,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }


  return (
    <div id="photos" className="w-full h-[100vh  flex justify-center items-center font-mont bg-gray-100 bg-center bg-cover relative py-[30px] md:pt-[45px]">
        <div className="w-[85%] flex flex-col justify-center items-cente md:justify-between ">

            <h5 className="font-semibold text-[#00a4f2] text-[16px] md:text-[26px] lg:text-[27px] mb-[20px] mt-[10px] border-b-[3px border-b-[#00a4f2] animate-bounce text-center">
                SOME PHOTOS FROM SWYS 2.0
            </h5>

            <div className="w-full">

                <Slider {...settings} >
                    <PhotosCard 
                        pics={pic1}
                    />
                    <PhotosCard 
                        pics={pic2}
                    />
                    <PhotosCard 
                        pics={pic3}
                    />
                    <PhotosCard 
                        pics={pic4}
                    />
                    <PhotosCard 
                        pics={pic5}
                    />
                    <PhotosCard 
                        pics={pic6}
                    />
                    <PhotosCard 
                        pics={pic7}
                    />
                    <PhotosCard 
                        pics={pic8}
                    />
                    <PhotosCard 
                        pics={pic9}
                    />
                    <PhotosCard 
                        pics={pic10}
                    />
                    <PhotosCard 
                        pics={pic11}
                    />

                </Slider>
            </div>


        </div>
    </div>
  )
}

export default Photo