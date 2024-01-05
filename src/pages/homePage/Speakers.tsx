// import React from 'react'   


import speaker1 from "../../assets/guests/Speaker Single Picture.jpg"

const Speakers = () => {
  return (
    <div id="speaker" className="w-full h-[100vh  flex justify-center items-center font-mont bg-gray-100 bg-center bg-cover relative py-[30px] md:pt-[45px]">
        <div className="w-[85%] flex flex-col md:flex-row justify-center items-cente md:justify-between ">
            <div className="border-[6px] border-[#00a4f2] rounded h-[370px] flex items-center justify-center  md:w-[45%] lg:w-[30%] md:mt-[40px] ">
                <img className="w-full h-full self-center " src={speaker1} alt="speaker" />
            </div>

            <div className="mt-[20px] md:mt-0 md:w-[50%] lg:w-[65%]">
                <h5 className="font-semibold text-center md:text-left mb-[10px] text-[#00a4f2] animate-bounce lg:text-[22px]">SPEAKER'S PROFILE</h5>
                <div className="text-[10px] font-semibold lg:text-[11px] text-justify flex flex-col gap-2">
                    <p>
                        <span className="text-[12px] lg:text-[14px]">HON. AYODELE OLAWANDE</span> hails from Ondo State, Southwest region of Nigeria. He completed his secondary school education in Ekiti State at Christ School and then proceeded to The Federal Polytechnic, Ado-Ekiti, then went to Federal University of Technology, Akure, for his degree.
                    </p>
                    <p>
                        Ayodele was the Strategic Communcation Officer at Emerging Community Africa, a project of the European Union (EU), and also, the Operation Manager at The Way Project Nigeria Limited.
                    </p>
                    <p>
                        He served in the administration of President Muhammadu Buhari, as the Personal Assiatant to the Special Adviser Innovation to the Vice-President from 2019-2023.
                    </p>
                    <p>
                        He worked relentlessly in this role to engage young people in the political process, urging them to express their concerns and actively participate in determining the Nation's future.
                    </p>
                    <p>
                        He was an active youth mobilizer, especially for the ruling All Progressive Congress (APC) in Ondo State
                     </p>
                     <p>
                        On 16th October, 2021, he was elected as the Ondo State APC youth leader and exactly two(2) years after, 16th October, 2023, he was sworn in as the Minister of State for Youth Development of the Federal Republic of Nigeria.
                     </p>
                     <p>
                        Other personal and political roles he held in the past include:
                        <h6>Site Administrator/Engineer at Renz Nigeria Limited (2019-2022)</h6>
                        <h6>Director of Business at TEHUB (2020)</h6>
                        <h6>Director Operation at LAHHOMES (2020)</h6>
                        <h6>Field Officer at IDP/NSIP NSIO (2020-2021)</h6>
                        <h6>Former Southwest Co-ordiinator, Asiwaju Grassroot Foundation (AGF) </h6>
                        <h6>Deputy Director Presidential Campaign Council youth Southwest 2023</h6>
                     </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speakers