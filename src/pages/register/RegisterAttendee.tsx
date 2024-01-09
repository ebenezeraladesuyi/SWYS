
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UseAppDispatch } from "../../global/Sttore";
import { User } from "../../global/ReduxState";
import Swal from "sweetalert2";
import { registerAttendee } from "../../utils/Api";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import logo from "../../assets/images/logo.png";
import { IoIosArrowBack } from "react-icons/io";


const RegisterAttendee = () => {

    const validationSchema = yup.object({
        fullName: yup.string().required('Enter your full name'),
        email: yup.string().required('Enter your email'),
        phoneNumber: yup.string().required('Enter your phone number'),
        address: yup.string().required('Enter your address'),
        stateOfOrigin: yup.string().required('Enter your state of origin'),
        hometown: yup.string().required('Enter your hometown'),
        occupation: yup.string().required('Enter your occupation'),
        educationalQualification : yup.string().required('Enter your education qualification'),
    })

    const navigate = useNavigate()

    type formData =  yup.InferType<typeof validationSchema>

    const dispatch = UseAppDispatch();

    const posting = useMutation({
        mutationKey: ["swys"],
        mutationFn: registerAttendee,

        onSuccess: (data: any) => {

            dispatch(User(data.data))

            console.log(data.data)

            if (data.data) {
                Swal.fire({
                  title: "Registration Successful!",
                  text: "We look forward to seeing you..",
                  icon: "success",
                  timer: 3000,
                  timerProgressBar: true,
                });
                navigate("/");
              }
        }
    });

    const {
        handleSubmit,
        formState: {errors},
        register
    } = useForm<formData>({
        resolver: yupResolver(validationSchema)
    });


    const submit = handleSubmit(async (data) => {
        // e.preventDefault()
        posting.mutate(data)

        // console.log(data)
    })



  return (
    <div className="w-full min-h-screen bg-center mt-[0px] h-[100%] bg-bgPi bg-[#00a4f2] bg-cover bg-no-repeat flex  justify-center items-center font-pop relative">

        <div className="bg-black absolute w-[100%] h-[100%] top-0 left-0 opacity-40"></div>

        <div className="w-[90%] md:w-[70%] lg:w-[40%] bg-white h-[900px  rounded-md z-30 p-[20px] py-[30px] mt-[60px] mb-[30px]">

            <NavLink to="/">
                <div className="mb-[15px] text-[18px]">
                <IoIosArrowBack />
            </div>
            </NavLink>

            <img src={logo} className="w-[100px] mb-[20px]" alt="" />

            <form onSubmit={submit}  className="h-[90%] flex justify-around flex-col gap-2">
                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Full Name" 
                {...register('fullName')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.fullName && errors?.fullName.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="email" placeholder="Email"
                {...register('email')}
                 />
                 <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.email && errors?.email?.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Phone Number"
                {...register('phoneNumber')}
                 />
                 <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.phoneNumber && errors?.phoneNumber.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Address" 
                {...register('address')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.address && errors?.address.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="State of Origin"
                {...register('stateOfOrigin')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.stateOfOrigin && errors?.stateOfOrigin.message}</p>

                
                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Hometown" 
                {...register('hometown')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.hometown && errors?.hometown.message}</p>
                

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px] mt-[10px" type="text" placeholder="Occupation" 
                {...register('occupation')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.occupation && errors?.occupation.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Education Qualification"
                {...register('educationalQualification')} 
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.educationalQualification && errors?.educationalQualification.message}</p>

                {posting.isPending ?
                    (<div className="w-full flex justify-center items-center">
                        <DatasIsaLoading /> 
                    </div>)
                :
                    <button  className="w-ful bg-purple-400 text-white font-semibold cursor-pointer hover:bg-white hover:text-purple-400 hover:border-purple-400 hover:border-[1px] transition-all-350ms ease-in-out " type="submit">Submit</button>
                }

            </form>
        </div>

    </div>
  )
}

export default RegisterAttendee;