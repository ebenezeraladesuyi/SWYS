import React from 'react';


interface iAbout {
    title?: string;
    content1?: string;
    content2?: string;
    content3?: string;
    content4?: string;
    content5?: string;
}

const AboutCard:React.FC<iAbout> = ({title, content1, content2, content3, content4, content5}) => {

  return (
    <div className='w-full font-mont text-center'>

        <h3 className='mb-[20px] mt-[30px] text-[17px] md:text-[20px] lg:text-[25px] text-[#00a4f2] font-semibold text-center animate-bounce'>
            {/* AIMS and OBJECTIVES OF THE SUMMIT */}
            {title}
        </h3> 

        <h5 className='flex flex-col gap-2 font-semibold text-[12px] md:text-[14px] lg:text-[16px]'>
            <p>{content1}</p>
            <p>{content2}</p>
            <p>{content3}</p>
            <p>{content4}</p>
            <p>{content5}</p>
        </h5>       
    </div>
  )
}

export default AboutCard