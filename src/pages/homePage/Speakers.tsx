// import React from 'react'   


import speaker1 from "../../assets/guests/FLYER-01.jpg"

const Speakers = () => {
  return (
    <div id="speaker" className="w-full h-[100vh  flex justify-center items-center font-mont bg-gray-100 bg-center bg-cover relative py-[30px] md:pt-[45px]">
        <div className="w-[85%] flex flex-col md:flex-row justify-center items-cente md:justify-between ">
            <div className="border-[6px] border-[#00a4f2] rounded h-[370px] flex items-center justify-center  md:w-[45%] lg:w-[30%] md:mt-[40px] ">
                <img className="w-full h-full self-center " src={speaker1} alt="speaker" />
            </div>

            <div className="mt-[20px] md:mt-0 md:w-[50%] lg:w-[65%]">
                <h5 className="font-semibold text-center md:text-left mb-[10px] text-[#00a4f2] animate-bounce lg:text-[22px]">SPEAKER'S PROFILE</h5>
                <h5 className="font-semibold text-center md:text-left mb-[5px] text-[#00a4f2] lg:text-[19px]">BARR. PELUMI OLAJENGBESI</h5>
                <h5 className="font-semibold text-center md:text-left mb-[10px] text-[#00a4f2] text-[12px] lg:text-[15px]">Principal Manager, LAW CORRIDOR</h5>

                <div className="text-[12px] font-semibold lg:text-[14px] text-justify flex flex-col gap-2">
                    <p>
                        <span className="text-[12px] lg:text-[14px]">Barr. Pelumi Olajengbasi</span> was born in Zaria, Kaduna State. He attended Manuwa Memorial Grammar School Iju Odo, and Holy Flocks of Christ Secondary School, Ondo State. He proceeded to College of Education in Ikere, Ekiti State where he earned National Certificate in Education before proceeding to the University of Abuja where he obtained a Bachelor's Degree in Law and served as the President of the Student Union Government.
                    </p>
                    <p>
                        In 2016, he was called to the Nigerian Bar as a Barrister and Solicitor of the Supreme Court of the Federal Republic of Nigeria after completing his law school program in the Lagos Law School Campus, Nigeria. He began his legal career under the mentorship of renowned lawyer, Dr. Kayode Ajulo of Kayode Ajulo Castle of Law. In 2016, he founded a private practice, Pelumi Olajengbesi & Co., and later Co-founder Law Corridor and sits on the board and trusteeship of several civil society organizations. He remained active in the political scene as a public commentator and columnist
                    </p>
                    <p>
                        Pelumi Olajengbesi is known as a human rights activist. In 2021, he was counsel to the Yoruba Nation Activists and its Leader Chief Sunday Adeyemo (Sunday Igboho) against the Nigeria Department of State Services and secured the release of all activists arrested and detained by the Federal Government of Nigeria on their trial for terrorism. He also involved in several right issues including gender based violence and loan shark debts.
                    </p>
                    {/* <p>
                        He worked relentlessly in this role to engage young people in the political process, urging them to express their concerns and actively participate in determining the Nation's future.
                    </p>
                    <p>
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