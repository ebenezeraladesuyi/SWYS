// import React from 'react'

interface iSpeakerCard {
    speakerImage? : string;
    speakerName? : string;
    speakerPosition? : string;
    speakerInfo? : string;
}


const SpeakersCard:React.FC<iSpeakerCard> = ({speakerImage, speakerInfo, speakerPosition, speakerName}) => {
  return (
    <div className='w-[270px] lg:w-[250px] h-[340px] flex flex-col justify-between items-center pb-[25px rounded shadow-md overflow-hidden font-mont mb-[25px] ml-[20px sm:ml-[30px] lg:ml-[20px] pb-[20px]'>
        
        <div className='h-[90%] rounded-none '>
            <img className='h-[100%] w-full' src={speakerImage} alt="speaker" />
        </div>

        <h6 className='text-[15px] ml-[13px font-semibold w-[90%] mt-[10px] text-center text-[#00a4f2]'>{speakerName}</h6>

        <h6 className='text-[11px] ml-[13px font-semibold w-[90%] mt-[5px text-center text-[#00a4f2'>{speakerPosition}</h6>

        <h6 className='text-[10px] text-justify ml-[13px text-[#0a4757] w-[85%] mt-[5px] '>{speakerInfo}</h6>
    </div>
  )
}

export default SpeakersCard