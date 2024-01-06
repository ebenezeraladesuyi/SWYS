// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersCard from "../../components/static/PartnersCard";
import ondo from "../../assets/partners/ondo.png";
import ekiti from "../../assets/partners/ekiti.jpg";
import oyo from "../../assets/partners/oyo.png";
import osun from "../../assets/partners/osun.jpg";
import lagos from "../../assets/partners/lagos.jpeg";
import ogun from "../../assets/partners/ogun.jpg"
import volatic from "../../assets/partners/vola2.png";
import dwc from "../../assets/partners/DWC.png";
import fash from "../../assets/partners/Fashfam.png";


const Partners = () => { const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidestoShow: 4,
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
}


  return (
    <div id="partners" className="w-full h-[100vh  flex justify-center items-center font-mont bg-center bg-cover relative py-[30px] md:pt-[45px]">
        
        <div className="w-[85%] flex flex-col justify-center items-cente md:justify-between ">

            <h5 className="font-semibold text-[#00a4f2] text-[16px] md:text-[26px] lg:text-[27px] mb-[20px] mt-[10px] border-b-[3px border-b-[#00a4f2] animate-bounce text-center">
                OUR PARTNERS
            </h5>

            <div className="w-full">
                <Slider {...settings}>
                    <PartnersCard 
                        pics={ondo}
                    />
                    <PartnersCard 
                        pics={oyo}
                    />
                    <PartnersCard 
                        pics={ekiti}
                    />
                    <PartnersCard 
                        pics={osun}
                    />
                    <PartnersCard 
                        pics={ogun}
                    />
                    <PartnersCard 
                        pics={lagos}
                    />
                    <PartnersCard 
                        pics={volatic}
                    />
                    <PartnersCard 
                        pics={osun}
                    />
                    <PartnersCard 
                        pics={ogun}
                    />
                    <PartnersCard 
                        pics={lagos}
                    />
                    <PartnersCard 
                        pics={volatic}
                    />
                    <PartnersCard 
                        pics={dwc}
                    />
                    <PartnersCard 
                        pics={fash}
                    />
                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Partners;