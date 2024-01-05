// import React from 'react'

import { SpeakersCard } from "../../components";
import speaker1 from "../../assets/images/DSC_5483.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Panelist = () => {
    
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
    <div className="w-full h-[100vh  flex justify-center items-center font-mont bg-gray-100 bg-center bg-cover relative py-[20px]">
        <div className="w-[85%] flex flex-col justify-center items-center">

            <h5 className="font-semibold text-[#00a4f2] text-[16px] md:text-[26px] lg:text-[30px] mb-[20px] mt-[10px] border-b-[3px border-b-[#00a4f2] animate-bounce">OUR PANELISTS</h5>

            <div className="w-full">

                <Slider {...settings}>

                    <SpeakersCard 
                        speakerImage={speaker1}
                        speakerName="HON. OLUMIDE FASUBA"
                        speakerPosition="Special Adviser to the President on Youth Affairs"
                        speakerInfo="The youths of the six states that make up the Southwest region of Nigeria. Upon proper finace, we look forward to receiving in attendance 50 delegates from each state with, atleast, 5 of thes 50 delegates comig from each of the Local Government that makes up the state. We equally look forward to extending invitations to the leaders of the relevant state youth formations within Southwest such as NYCN, NYC and  NANS."
                    />

                    <SpeakersCard 
                        speakerImage={speaker1}
                        speakerName="HON. OLUMIDE FASUBA"
                        speakerPosition="Special Adviser to the President on Youth Affairs"
                        speakerInfo="The youths of the six states that make up the Southwest region of Nigeria. Upon proper finace, we look forward to receiving in attendance 50 delegates from each state with, atleast, 5 of thes 50 delegates comig from each of the Local Government that makes up the state. We equally look forward to extending invitations to the leaders of the relevant state youth formations within Southwest such as NYCN, NYC and  NANS."
                    />

                    <SpeakersCard 
                        speakerImage={speaker1}
                        speakerName="HON. OLUMIDE FASUBA"
                        speakerPosition="Special Adviser to the President on Youth Affairs"
                        speakerInfo="The youths of the six states that make up the Southwest region of Nigeria. Upon proper finace, we look forward to receiving in attendance 50 delegates from each state with, atleast, 5 of thes 50 delegates comig from each of the Local Government that makes up the state. We equally look forward to extending invitations to the leaders of the relevant state youth formations within Southwest such as NYCN, NYC and  NANS."
                    />

                    <SpeakersCard 
                        speakerImage={speaker1}
                        speakerName="HON. OLUMIDE FASUBA"
                        speakerPosition="Special Adviser to the President on Youth Affairs"
                        speakerInfo="The youths of the six states that make up the Southwest region of Nigeria. Upon proper finace, we look forward to receiving in attendance 50 delegates from each state with, atleast, 5 of thes 50 delegates comig from each of the Local Government that makes up the state. We equally look forward to extending invitations to the leaders of the relevant state youth formations within Southwest such as NYCN, NYC and  NANS."
                    />

                    <SpeakersCard 
                        speakerImage={speaker1}
                        speakerName="HON. OLUMIDE FASUBA"
                        speakerPosition="Special Adviser to the President on Youth Affairs"
                        speakerInfo="The youths of the six states that make up the Southwest region of Nigeria. Upon proper finace, we look forward to receiving in attendance 50 delegates from each state with, atleast, 5 of thes 50 delegates comig from each of the Local Government that makes up the state. We equally look forward to extending invitations to the leaders of the relevant state youth formations within Southwest such as NYCN, NYC and  NANS."
                    />

                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Panelist;