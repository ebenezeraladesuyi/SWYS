/* eslint-disable @typescript-eslint/no-explicit-any */
import Countdown from "../../components/static/Countdown";
import Typewriter from 'typewriter-effect';


const Hero = () => {

    const targetDate = new Date('2024-01-26T00:10:00');

  return (
    <div className="w-full h-[100vh] bg-white flex justify-center items-center font-mont bg-hero-img bg-center bg-cover relative">

        <div className="absolute bg-black w-full h-full opacity-50"></div>

        <div className="w-[85%] z-10 flex flex-col mt-[25px] md:mt-[60px] lg:mt-[50px]">
            <div className="w-full mb-[30px]">
                <h2 className="text-white text-[35px] md:text-[45px] lg:text-[60px] text-center font-semibold">
                    SOUTH WEST YOUTH SUMMIT 2.0
                </h2>

                <h3 className="text-white text-[15px] md:text-[17px] lg:text-[20px] font-semibold text-center">
                    <span className="text-orange-300 text-[13px] md:text-[15px] lg:text-[18px]">THEME: </span>
                    {/* QUEST FOR THE BEST */}
                    <span>
                        <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter: any) => {
                            typewriter

                                .typeString("QUEST")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("FOR")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("THE")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("BEST")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("QUEST FOR THE BEST")
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </span>
                </h3>
            </div>

            <div className="w-full flex gap-3 items-center justify-center">
                <Countdown targetDate={targetDate} />
            </div>

            <div className="text-[12px] lg:text-[14px] text-orange-300 text-center  mt-[20px] font-semibold">
                <h6>Date: <span className="text-white text-[14px] lg:text-[16px]">Friday, 26th January, 2024</span></h6>
                <h6>Venue: <span className="text-white lg:text-[16px] text-[14px]">June 12 Cultural Center, Kuto, Abeokuta, Ogun State.</span></h6>
                <h6>Time: <span className="text-white lg:text-[16px] text-[14px]">9am Prompt</span></h6>
            </div>
        </div>
    </div>
  )
}

export default Hero