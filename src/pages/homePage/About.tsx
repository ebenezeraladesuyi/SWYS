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
                    title="TARGET of the SUMMIT"
                    content1="1. The youths of the six states that make up the Southwest region of Nigeria. Upon proper finace, we look forward to receiving in attendance 50 delegates from each state with, atleast, 5 of thes 50 delegates comig from each of the Local Government that makes up the state. We equally look forward to extending invitations to the leaders of the relevant state youth formations within Southwest such as NYCN, NYC and  NANS."
                    content2="2. The captains of industries, political office holders and Traditional rulers of the region."
                    content3="3. The six (6) Governors of the Southwestern states and members of the National Assembly of the region."
                />
                
                <AboutCard 
                    title="BENEFIT of the SUMMIT to the SOUTHWEST"
                    content1="1. The program will help Southwest enlighten her youth through several breakout and lecture sessions that have been incorporated into the summit"
                    content2="2. The program will help the Southwest youth get mentorship from reputable and outstanding indigenes of the region that has exhibited integrity and unmatched success in their endeavours."
                    content3="3. It will help the Southwest identify the problem facing her youth and also help proffer long-lasting solutions to the problems identified."
                    content4="4. It will help the Southwest fashion out a reliable model career and entrepreneurship development of the youth of the region."
                />
            </Slider>

        </div>
    </div>
  )
}

export default About