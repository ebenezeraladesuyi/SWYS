import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import com1 from "../../assets/com/HON GOLD ADEDAYO.png";
import com2 from "../../assets/com/HON MOBOLAJI.png";
import com3 from "../../assets/com/HON OLAGUNJU MOSHOOD (2).png";
import com4 from "../../assets/com/HON WASILAT ADEFEMI.png";
import com5 from "../../assets/com/HON WASIU ISIAKA.png";
// import com6 from "../../assets/com/Hon Kafilat Ogbara.png";

const Commissioners = () => {

    const [show, setShow] = React.useState(false);

    const showDrop = () => {
        setShow(!show)
    }

    const [show2, setShow2] = React.useState(false);

    const showDrop2 = () => {
        setShow2(!show2)
    }

    const [show3, setShow3] = React.useState(false);

    const showDrop3 = () => {
        setShow3(!show3)
    }

    const [show4, setShow4] = React.useState(false);

    const showDrop4 = () => {
        setShow4(!show4)
    }

    const [show5, setShow5] = React.useState(false);

    const showDrop5 = () => {
        setShow5(!show5)
    }

    const [show6, setShow6] = React.useState(false);

    const showDrop6 = () => {
        setShow6(!show6)
    }

  return (
    <div id="" className="w-full h-[100vh  flex justify-center items-center font-mont bg-gray-100 bg-center bg-cover relative py-[30px] md:pt-[45px]">

        <div className="w-[85%] flex flex-col justify-center items-cente md:justify-between ">
            <h5 className="font-semibold text-[#00a4f2] text-[16px] md:text-[26px] lg:text-[27px] mb-[20px] mt-[10px] border-b-[3px border-b-[#00a4f2] animate-bounce text-center">MEET YOUR COMMISSIONERS</h5>

            <div className="flex flex-col gap-3">
                <div className='flex flex-col gap-3 transition-transform duration-300 ease-in-out delay-300'>
                    <div className="flex gap-3 items-center bg-[#00a4f2] py-2 px-1">
                        {show ?
                            <div className='text-white' onClick={showDrop}>
                                <IoIosArrowForward />
                            </div>
                        :
                            <div className='text-white' onClick={showDrop}>
                                <IoIosArrowDown />
                            </div>
                        }
                        <h5 className='text-[14px] lg:text-[16px] font-semibold text-white'>Ekiti State</h5>
                    </div>

                    {show ?
                        <div className='w-[270px] h-[340px] bg-white rounded-md pb-[20px] transition-transform duration-300 ease-in-out delay-300'>
                            <img className='w-full h-[75%' src={com1} alt="" />

                            <h5 className='text-[#00a4f2] font-semibold text-[14px] text-center mt-[6px]'>HON. ADESOLA GOLD ADEDAYO</h5>
                            <h5 className='text-[#00a4f2] font-semibold text-[12px] text-center mt-[px]'>
                                Commissioner for Youth Development (Ekiti State)
                            </h5>
                        </div>
                    :
                    null
                    }
                </div>

                <div className='flex flex-col gap-3 transition-transform duration-300 ease-in-out delay-300'>
                    <div className="flex gap-3 items-center bg-[#00a4f2] py-2 px-1">
                        {show2 ?
                            <div className='text-white' onClick={showDrop2}>
                                <IoIosArrowForward />
                            </div>
                        :
                            <div className='text-white' onClick={showDrop2}>
                                <IoIosArrowDown />
                            </div>
                        }
                        <h5 className='text-[14px] lg:text-[16px] font-semibold text-white'>Ondo State</h5>
                    </div>

                    {show2 ?
                        <div className='w-[270px] h-[340px] bg-white rounded-md pb-[20px] transition-transform duration-300 ease-in-out delay-300'>
                            <img className='w-full h-[75%' src={com1} alt="" />

                            <h5 className='text-[#00a4f2] font-semibold text-[14px] text-center mt-[6px]'>HON. BAMIDELE OLOGUN</h5>
                            <h5 className='text-[#00a4f2] font-semibold text-[12px] text-center mt-[px]'>Commissioner for  Youth and Sports(Ondo State)</h5>
                        </div>
                    :
                    null
                    }
                </div>

                <div className='flex flex-col gap-3 transition-transform duration-300 ease-in-out delay-300'>
                    <div className="flex gap-3 items-center bg-[#00a4f2] py-2 px-1">
                        {show3 ?
                            <div className='text-white' onClick={showDrop3}>
                                <IoIosArrowForward />
                            </div>
                        :
                            <div className='text-white' onClick={showDrop3}>
                                <IoIosArrowDown />
                            </div>
                        }
                        <h5 className='text-[14px] lg:text-[16px] font-semibold text-white'>Lagos State</h5>
                    </div>

                    {show3 ?
                        <div className='w-[270px] h-[340px] bg-white rounded-md pb-[20px] transition-transform duration-300 ease-in-out delay-300'>
                            <img className='w-full h-[75%' src={com2} alt="" />

                            <h5 className='text-[#00a4f2] font-semibold text-[14px] text-center mt-[6px]'>HON. MOBOLAJI OGUNLENDE</h5>
                            <h5 className='text-[#00a4f2] font-semibold text-[12px] text-center mt-[px]'>Commissioner for Youth (Lagos State)</h5>
                        </div>
                    :
                    null
                    }
                </div>

                <div className='flex flex-col gap-3 transition-transform duration-300 ease-in-out delay-300'>
                    <div className="flex gap-3 items-center bg-[#00a4f2] py-2 px-1">
                        {show4 ?
                            <div className='text-white' onClick={showDrop4}>
                                <IoIosArrowForward />
                            </div>
                        :
                            <div className='text-white' onClick={showDrop4}>
                                <IoIosArrowDown />
                            </div>
                        }
                        <h5 className='text-[14px] lg:text-[16px] font-semibold text-white'>Ogun State</h5>
                    </div>

                    {show4 ?
                        <div className='w-[270px] h-[340px] bg-white rounded-md pb-[20px] transition-transform duration-300 ease-in-out delay-300'>
                            <img className='w-full h-[75%' src={com5} alt="" />

                            <h5 className='text-[#00a4f2] font-semibold text-[14px] text-center mt-[6px]'>HON. WASIU ISIAKA</h5>
                            <h5 className='text-[#00a4f2] font-semibold text-[12px] text-center mt-[px]'>Commissioner for Sport and Youth (Ogun State)</h5>
                        </div>
                    :
                    null
                    }
                </div>

                <div className='flex flex-col gap-3 transition-transform duration-300 ease-in-out delay-300'>
                    <div className="flex gap-3 items-center bg-[#00a4f2] py-2 px-1">
                        {show5 ?
                            <div className='text-white' onClick={showDrop5}>
                                <IoIosArrowForward />
                            </div>
                        :
                            <div className='text-white' onClick={showDrop5}>
                                <IoIosArrowDown />
                            </div>
                        }
                        <h5 className='text-[14px] lg:text-[16px] font-semibold text-white'>Oyo State</h5>
                    </div>

                    {show5 ?
                        <div className='w-[270px] h-[340px] bg-white rounded-md pb-[20px] transition-transform duration-300 ease-in-out delay-300'>
                            <img className='w-full h-[75%' src={com4} alt="" />

                            <h5 className='text-[#00a4f2] font-semibold text-[14px] text-center mt-[6px]'>HON. WASILAT ADEFEMI</h5>
                            <h5 className='text-[#00a4f2] font-semibold text-[12px] text-center mt-[px]'>Oyo State Commissioner for Youth (Oyo State)</h5>
                        </div>
                    :
                    null
                    }
                </div>

                <div className='flex flex-col gap-3 transition-transform duration-300 ease-in-out delay-300'>
                    <div className="flex gap-3 items-center bg-[#00a4f2] py-2 px-1">
                        {show6 ?
                            <div className='text-white' onClick={showDrop6}>
                                <IoIosArrowForward />
                            </div>
                        :
                            <div className='text-white' onClick={showDrop6}>
                                <IoIosArrowDown />
                            </div>
                        }
                        <h5 className='text-[14px] lg:text-[16px] font-semibold text-white'>Osun State</h5>
                    </div>

                    {show6 ?
                        <div className='w-[270px] h-[340px] bg-white rounded-md pb-[20px] transition-transform duration-300 ease-in-out delay-300'>
                            <img className='w-full h-[75%' src={com3} alt="" />

                            <h5 className='text-[#00a4f2] font-semibold text-[14px] text-center mt-[6px]'>HON. OLAGUNJU MOSHOOD</h5>
                            <h5 className='text-[#00a4f2] font-semibold text-[12px] text-center mt-[px]'>Commissioner for Youth Development (Osun State)</h5>
                        </div>
                    :
                    null
                    }
                </div>

            </div>

        </div>

    </div>
  )
}

export default Commissioners