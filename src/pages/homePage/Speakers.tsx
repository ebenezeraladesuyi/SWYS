// import React from 'react'   


import speaker from "../../assets/swys2026/speaker-26.jpg"

const Speakers = () => {
  return (
    <div id="speaker" className="w-full h-[100vh  flex justify-center items-center font-mont bg-gray-100 bg-center bg-cover relative py-[30px] md:pt-[45px]">
        <div className="w-[85%] flex flex-col md:flex-row justify-center items-cente md:justify-between ">
            <div className="border-[6px] border-[#00a4f2] rounded h-[370px] flex items-center justify-center  md:w-[45%] lg:w-[30%] md:mt-[40px] ">
                <img className="w-full h-full self-center " src={speaker} alt="speaker" />
            </div>

            <div className="mt-[20px] md:mt-0 md:w-[50%] lg:w-[65%]">
                <h5 className="font-semibold text-center md:text-left mb-[10px] text-[#00a4f2] animate-bounce lg:text-[22px]">SPEAKER'S PROFILE</h5>
                {/* <h5 className="font-semibold text-center md:text-left mb-[5px] text-[#00a4f2] lg:text-[19px]">COMING SOON!</h5> */}
                <h5 className="font-semibold text-center md:text-left mb-[5px] text-[#00a4f2] lg:text-[19px]">HON. ABIOLA MAKINDE</h5>
                <h5 className="font-semibold text-center md:text-left mb-[10px] text-[#00a4f2] text-[12px] lg:text-[15px]">Member, House  of Representative, Ondo East/Ondo West Federal Constituency</h5>

                <div className="text-[12px] font-semibold lg:text-[14px] text-justify flex flex-col gap-2">
                    <p>
                        <span className="text-[12px] lg:text-[14px]">Hon. Abiola Peter Makinde</span> is a Nigerian politician and second-term member of the 10th National Assembly, representing Ondo East/Ondo West Federal Constituency under the APC. Known as the “Father of Empowerment,” he is recognized for his focus on grassroots development and education reform.
                    </p>
                    <p>
                        Born on August 16, 1973, in Lagos, Makinde earned a National Diploma from Ondo State Polytechnic, a bachelor's in Computer Information Systems (2006) and a master's in Financial Management (2009) from the University of Maryland Global Campus, and a PhD in Management from Igbinedion University (2022).
                    </p>
                    <p>
                        He began his political career as Caretaker Chairman of Ondo West Local Government (2013–2015), later winning a House of Representatives seat in 2019 under the ADC before joining the APC and being re-elected in 2023 with 68% of the vote. He currently chairs the House Committee on Human Rights.
                    </p>
                    <p>
                        Makinde’s achievements include sponsoring the bill upgrading Adeyemi College of Education to a Federal University of Education, advocating for the N134 billion dualization of the Akure-Ondo-Ore Express Road, facilitating federal jobs for over 80 constituents, and sponsoring indigent students for overseas study.
                    </p>
                    {/* <p>
                        He was an active youth mobilizer, especially for the ruling All Progressive Congress (APC) in Ondo State
                     </p>
                     <p>
                        On 16th October, 2021, he was elected as the Ondo State APC youth leader and exactly two(2) years after, 16th October, 2023, he was sworn in as the Minister of State for Youth Development of the Federal Republic of Nigeria.
                     </p> */}
                     {/* <p>
                        Other personal and political roles he held in the past include:
                        <h6>Site Administrator/Engineer at Renz Nigeria Limited (2019-2022)</h6>
                        <h6>Director of Business at TEHUB (2020)</h6>
                        <h6>Director Operation at LAHHOMES (2020)</h6>
                        <h6>Field Officer at IDP/NSIP NSIO (2020-2021)</h6>
                        <h6>Former Southwest Co-ordiinator, Asiwaju Grassroot Foundation (AGF) </h6>
                        <h6>Deputy Director Presidential Campaign Council youth Southwest 2023</h6>
                     </p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speakers