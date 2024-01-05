// import React from 'react'

import { SpeakersCard } from "../../components";
import panelist from "../../assets/guests/Abiola Odetola.jpg";
import panelist1 from "../../assets/guests/Adijat.jpg";
import panelist2 from "../../assets/guests/Akin AKinwale.jpg";
import panelist3 from "../../assets/guests/Henrich.jpg";
import panelist4 from "../../assets/guests/Joshua Adedeji.jpg";
import panelist5 from "../../assets/guests/Morayo Brown.jpg";
import panelist6 from "../../assets/guests/Moremi Ojudu.jpg";
import panelist7 from "../../assets/guests/Rinsola.jpg";
import panelist8 from "../../assets/guests/Tosin Durodola.jpg";
import panelist9 from "../../assets/guests/moderator.jpg";
// import panelist10 from "../../assets/guests/";
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

            <h5 className="font-semibold text-[#00a4f2] text-[16px] md:text-[26px] lg:text-[30px] mb-[20px] mt-[10px] border-b-[3px border-b-[#00a4f2] animate-bounce">OUR PANELISTS</h5>

            <div className="w-full">

                <Slider {...settings}>

                    <SpeakersCard 
                        speakerImage={panelist}
                        speakerName="HON. ABIOLA ODETOLA"
                        speakerPosition=""
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist1}
                        speakerName="HON. ADIJAT ADELEYE"
                        speakerPosition="Ogun State, Commissioner for Women Affairs and Social Development"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist2}
                        speakerName="AKIN AKINWALE"
                        speakerPosition="Digicom and New Media Expert"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist3}
                        speakerName="ENGR. HENRICH BANKOLE KOMOLAFE"
                        speakerPosition="MD, Akotex Group"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist4}
                        speakerName="JOSHUA ADEDEJI"
                        speakerPosition="Nigeria Country Lead, Innovate UK"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist9}
                        speakerName="RHODIYAT OGBARA Esq."
                        speakerPosition="Moderator, First Panel Session"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist5}
                        speakerName="MORAYO AFOLABI-BROWN"
                        speakerPosition="MD. TVCe Lagos State."
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist6}
                        speakerName="Ms. MOREMI OJUDU"
                        speakerPosition="SSA to the President on Community Engagement (SW)"
                    />

                    <SpeakersCard 
                        speakerImage={panelist7}
                        speakerName="Ms. RINSOLA ABIOLA"
                        speakerPosition="SSA to the President on Citizenship and Leadership"
                        speakerInfo=""
                    />

                    <SpeakersCard 
                        speakerImage={panelist8}
                        speakerName="TOSIN DUROTOLA ESq."
                        speakerPosition="Moderator, Second Panel Session"
                        speakerInfo=""
                    />

                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Panelist;