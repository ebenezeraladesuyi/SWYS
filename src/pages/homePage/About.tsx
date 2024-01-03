// import React from 'react'

import { AboutCard } from "../../components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
    //     responsive: [
    //         {
    //             breakpoint: 1000,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 770,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidestoShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 475,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    }


  return (
    <div className="w-full flex justify-center items-center mb-[30px]">
        <div className="w-[85%]">
            <Slider {...settings}>
                <AboutCard 
                    title="AIMS and OBJECTIVES OF THE SUMMIT"
                    content1="1. The program seeks to extend a sense of belonging to the teeming youths of the region through an interface with traditional heads, political office holders and captains of industries."
                    content2="2. The program equally seeks to give an avenue for cross-fertilization of productive ideas between the youths of the region and the leaders of the region."
                    content3="3. The summit which is expected to have about one thousand (1000) youths in attendance, also seeks to provide an avenue for mentorship of talents by citizens of the regions that have excelled in their fields of practice."
                    content4="4. The summit also seeks to empower the youths to become job generators rather than job seekers and to improve the living standards of the youth through the opportunities at hand."
                    content5="5. Promoting peace in the southwestern region of Nigeria."
                />
                
                <AboutCard 
                    title="AIMS and OBJECTIVES OF THE SUMMIT"
                    content1="1. The program seeks to extend a sense of belonging to the teeming youths of the region through an interface with traditional heads, political office holders and captains of industries."
                    content2="2. The program equally seeks to give an avenue for cross-fertilization of productive ideas between the youths of the region and the leaders of the region."
                    content3="3. The summit which is expected to have about one thousand (1000) youths in attendance, also seeks to provide an avenue for mentorship of talents by citizens of the regions that have excelled in their fields of practice."
                    content4="4. The summit also seeks to empower the youths to become job generators rather than job seekers and to improve the living standards of the youth through the opportunities at hand."
                    content5="5. Promoting peace in the southwestern region of Nigeria."
                />
            </Slider>

        </div>
    </div>
  )
}

export default About