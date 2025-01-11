// import React from 'react'

import { SpeakersCard } from "../../components";
import panelist from "../../assets/swys2025/Red Crpet Host.jpg";
import panelist1 from "../../assets/swys2025/PANELIST Host 1.jpg";
import panelist2 from "../../assets/swys2025/PANELIST Host 2.jpg";
import panelist3 from "../../assets/swys2025/PANELIST 7.jpg";
import panelist4 from "../../assets/swys2025/PANELIST 6.jpg";
import panelist5 from "../../assets/swys2025/PANELIST 5.jpg";
import panelist6 from "../../assets/swys2025/PANELIST 4.jpg";
import panelist7 from "../../assets/swys2025/PANELIST 3.jpg";
import panelist8 from "../../assets/swys2025/PANELIST 2.jpg";
import panelist9 from "../../assets/swys2025/PANELIST 1.jpg";
// import panelist10 from "../../assets/swys2025/";
import panelist11 from "../../assets/swys2025/Modertor Fireside Cht.jpg";
import panelist12 from "../../assets/swys2025/Guest of Honour.jpg";
import panelist13 from "../../assets/swys2025/Guest Comedian.jpg";
import panelist14 from "../../assets/swys2025/Gbadebo.jpg";
import panelist15 from "../../assets/swys2025/Fireside cht.jpg";
import panelist16 from "../../assets/swys2025/Event Host.jpg";
import panelist17 from "../../assets/swys2025/Event Co-Host.jpg";
import panelist18 from "../../assets/swys2025/Breakout Session.jpg";
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
    <div id="panelists" className="w-full h-[100vh  flex justify-center items-center font-mont bg-gray-100 bg-center bg-cover relative py-[20px]">
        <div className="w-[85%] flex flex-col justify-center items-center">

            <h5 className="font-semibold text-[#00a4f2] text-[16px] md:text-[26px] lg:text-[27px] mb-[20px] mt-[10px] border-b-[3px border-b-[#00a4f2] animate-bounce">OUR PANELISTS</h5>

            <div className="w-full">

                <Slider {...settings}>

                    <SpeakersCard 
                        speakerImage={panelist}
                        speakerName="Tomisin Kolawole"
                        speakerPosition="Red Carpet Host"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist1}
                        speakerName="Ayobami T. Durodola Esq."
                        speakerPosition="Lead Attorney, Royal Standard Attornys"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist2}
                        speakerName="Deborah Soladoye"
                        speakerPosition="OAP/Media Expert"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist3}
                        speakerName="Hon. Adewumi Adeyemi"
                        speakerPosition="Member, Osun State HOA."
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist4}
                        speakerName="Hon. Dr. Abolarin K. Ajibade"
                        speakerPosition="Member, Osun State HOA."
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist9}
                        speakerName="Hon. Abiola Awoyeye"
                        speakerPosition="Member, Osun State HOA."
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist5}
                        speakerName="Monsurat Ololade"
                        speakerPosition="Educator. Entrprenuer."
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist6}
                        speakerName="Dr. Samuel Anisulowo"
                        speakerPosition="CEO FollyBea Nig. Ltd."
                    />

                    <SpeakersCard 
                        speakerImage={panelist7}
                        speakerName="Ewatomilola Emiola-Owoeye"
                        speakerPosition="SA to Ondo State Gov. on Research & Documentation"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist8}
                        speakerName="Hon. Bamikola Omisore"
                        speakerPosition="sA to Osun State Gov. on SDG & Multilateral Relations"
                        speakerInfo=""
                    />
                    {/* <SpeakersCard 
                        speakerImage={panelist10}
                        speakerName="TOSIN DUROTOLA ESq."
                        speakerPosition="Moderator, Second Panel Session"
                        speakerInfo=""
                    /> */}
                    <SpeakersCard 
                        speakerImage={panelist11}
                        speakerName="Motolani Oyedeji"
                        speakerPosition="Managing Partner, Danielle Chambers"
                        speakerInfo=""
                    />
                    <SpeakersCard 
                        speakerImage={panelist12}
                        speakerName="Hon. Oriade A. Taofeek"
                        speakerPosition="Forum of Senatorial Youth (National Sec.)"
                        speakerInfo=""
                    />
                    <SpeakersCard 
                        speakerImage={panelist13}
                        speakerName="Prolific Hephta"
                        speakerPosition="Guest Comedian"
                        speakerInfo=""
                    />
                    <SpeakersCard 
                        speakerImage={panelist14}
                        speakerName="Gbadebo Rhodes-Vivour"
                        speakerPosition="L.P. Gov. Candidate, Lagos State"
                        speakerInfo=""
                    />
                    <SpeakersCard 
                        speakerImage={panelist15}
                        speakerName="Rt. Hon. Prince Akinyode A. Oyewusi"
                        speakerPosition="Deputy Speaker, Osun State HOA"
                        speakerInfo=""
                    />
                    <SpeakersCard 
                        speakerImage={panelist16}
                        speakerName="Muhammed Adisa Raji"
                        speakerPosition="Event Host"
                        speakerInfo=""
                    />
                    <SpeakersCard 
                        speakerImage={panelist17}
                        speakerName="DanWilliams"
                        speakerPosition="Event Co-Host"
                        speakerInfo=""
                    />
                    <SpeakersCard 
                        speakerImage={panelist18}
                        speakerName="Oluwaseun Oyekan-Nash."
                        speakerPosition="Creative Director, TiwaDigi Hauze"
                        speakerInfo=""
                    />

                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Panelist;