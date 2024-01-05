// import React from 'react';
import logo from "../../../assets/images/logo.png";

const Footerr = () => {
  return (
    <div id="footer" className="w-full py-5 bg-[#00a4f2] flex justify-center items-center font-mont shadow-md z-2">
        <div className="w-[85%] h-full flex gap-5 flex-col justify-between items-cente">
            <div className="w-[90px]">
                <img src={logo} alt="" />
            </div>

            <div>
                <p className="text-white text-[9px] md:text-[11px] md:w-[70%] lg:w-[55%] text-justify mb-[10px]"><span className="text-[12px] font-semibold">AKINBIYI OLUMIDE FASUBA</span> is a dedicated youth advocate and social reformer with a passion for good governance and politics. Currently serving as the conener of the Southwest Youth Summit since 2022, leading strategic initiatives to unleash the potential of the youth in the Southwest region of Nigeria for socio-economic properity. A committed facilitator of platforms promoting peace, knowledge acquisition and mentorship for young individuals. Harnessing the transformative power of youth ideas and ambitions to contribute to positive change and progress in Nigeria.</p>

                <h5 className="text-white text-[11px] mb-[5px] md:text-[13px]  font-semibold">CONVENER | SOUTHWEST YOUTH SUMMIT</h5>
                <h5 className="text-white text-[11px] mb-[5px] md:text-[13px]  font-semibold">INITIATOR | EKITI YOUTH ARISE</h5>
                <h5 className="text-white text-[11px] mb-[5px] md:text-[13px]  font-semibold">DEPUTY SPEAKER | SOUTHWEST YOUTH PARLIAMENT</h5>
            </div>

            <hr className="border-[1px] border-white w-full" />

            <h5 className="text-white font-semibold text-[12px]">All Right Reserved. C. 2023. Southwest Youth Summit</h5>

        </div>
    </div>
  )
}

export default Footerr;