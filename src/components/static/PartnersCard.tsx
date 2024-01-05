import React from 'react'

interface iPhotos {
    pics? : string;
}

const PartnersCard:React.FC<iPhotos> = ({pics}) => {
  return (
    <div className='w-[80px] lg:w-[250px h-[200px flex flex-col justify-between items-center rounded shadow-md overflow-hidden font-mont mb-[25px] ml-[20px sm:ml-[20px] lg:ml-[20px] pb-[20px'>

            <img className='h-[100% w-full' src={pics} alt="speaker" />

    </div>
  )
}

export default PartnersCard;