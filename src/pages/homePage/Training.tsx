/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import * as yup from "yup";
import { UseAppDispatch } from "../../global/Sttore";
import { User } from "../../global/ReduxState";
import Swal from "sweetalert2";
import { userSubscribe } from '../../utils/Api';
import { useNavigate } from 'react-router-dom';

const Training = () => {
    const [showSubscribe, setShowSubscribe] = React.useState(false);

    const validationSchema = yup.object({
        fullName: yup.string().required('Enter your full name'),
        email: yup.string().required('Enter your email').email('Enter a valid email'),
    });

    const navigate = useNavigate();
    type formData = yup.InferType<typeof validationSchema>;
    const dispatch = UseAppDispatch();

    const posting = useMutation({
        mutationKey: ["subscribe"],
        mutationFn: userSubscribe,
        onSuccess: (data: any) => {
            dispatch(User(data.data));
            if (data.data) {
                Swal.fire({
                    title: "Successfully Subscribed!",
                    text: "You will be notified when SWYS Tech Skill Up Training registration starts. Thank you for subscribing!",
                    icon: "success",
                });
                setShowSubscribe(false);
                navigate("/");
            }
        }
    });

    const {
        handleSubmit,
        formState: { errors },
        register,
        reset
    } = useForm<formData>({
        resolver: yupResolver(validationSchema)
    });

    const submit = handleSubmit(async (data) => {
        posting.mutate(data);
        reset();
    });

    return (
        <div id="training" className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#e8edf5] py-16 px-4 md:py-20 lg:py-24 min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                {/* <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block animate-bounce">
                        <span className="text-6xl md:text-7xl lg:text-8xl mb-4 block">🚀</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2c3e] mb-4">
                        Tech Skill Up Training
                    </h2>
                    <div className="w-24 h-1 bg-[#00a4f2] mx-auto rounded-full mb-6"></div>
                </div> */}

                {/* Main Hero Banner */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00a4f2] to-[#0088cc]"></div>
                    
                    {/* Pattern Overlay - Diagonal lines */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.3) 35px, rgba(255,255,255,0.3) 70px)`
                        }}>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
                        {/* <div className="mb-6">
                            <span className="text-6xl md:text-7xl lg:text-8xl inline-block animate-bounce">⚡</span>
                        </div> */}
                        
                        <p className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight tracking-tighter">
                            South West Youth Summit
                        </p>
                        
                        <p className="text-white/90 text-xl md:text-2xl lg:text-3xl font-semibold mb-4 tracking-wide">
                            PRESENTS
                        </p>
                        
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 inline-block mb-6 border-2 border-white/30">
                            <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                                Tech Skill Up Programme
                            </p>
                        </div>
                        
                        <div className="mt-8">
                            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 md:p-6 shadow-xl">
                                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-black">
                                    🔥 COMING SOON ON THIS PLATFORM! 🔥
                                </p>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex justify-center space-x-3">
                            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                            <div className="w-4 h-4 bg-white rounded-full animate-pulse delay-150"></div>
                            <div className="w-4 h-4 bg-white rounded-full animate-pulse delay-300"></div>
                            <div className="w-4 h-4 bg-white rounded-full animate-pulse delay-450"></div>
                        </div>
                    </div>
                </div>

                {/* Subscription Section */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto">
                        <div className="text-6xl mb-4">📧</div>
                        <p className="text-[#1a2c3e] text-2xl md:text-3xl font-black mb-4">
                            Get Notified When Registration Starts!
                        </p>
                        <p className="text-[#5a6c7e] text-lg md:text-xl mb-6 font-medium">
                            Subscribe to SWYS Newsletter 
                        </p>
                        
                        {!showSubscribe ? (
                            <button 
                                onClick={() => setShowSubscribe(true)}
                                className="bg-gradient-to-r from-[#00a4f2] to-[#0088cc] text-white font-bold text-lg py-4 px-10 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                🚀 Subscribe to Get Notified 🚀
                            </button>
                        ) : (
                            <div className="mt-4 flex flex-col items-center justify-center" style={{ animation: 'fadeIn 0.5s ease-out forwards' }}>
                                <form onSubmit={submit} className="flex flex-col items-center justify-center gap-3 w-full">
                                    <input 
                                        type="text" 
                                        placeholder="Full Name" 
                                        className="w-full max-w-[400px] h-[45px] text-[14px] border-2 border-[#00a4f2] rounded-lg px-4 outline-none focus:border-[#0088cc] transition-colors"
                                        {...register("fullName")}
                                    />
                                    <p className="text-[10px] text-red-500 mt-[-10px] mb-[5px]">{errors?.fullName && errors?.fullName.message}</p>

                                    <input 
                                        type="email" 
                                        placeholder="Email Address" 
                                        className="w-full max-w-[400px] h-[45px] text-[14px] border-2 border-[#00a4f2] rounded-lg px-4 outline-none focus:border-[#0088cc] transition-colors"
                                        {...register("email")}
                                    />
                                    <p className="text-[10px] text-red-500 mt-[-10px] mb-[5px]">{errors?.email && errors?.email.message}</p>

                                    {posting.isPending ? (
                                        <div className="w-[100px] flex justify-center items-center">
                                            <DatasIsaLoading />
                                        </div>
                                    ) : (
                                        <div className="flex gap-3">
                                            <button 
                                                className='w-[120px] text-[14px] h-[42px] bg-gradient-to-r from-[#00a4f2] to-[#0088cc] rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                                                type='submit'
                                            >
                                                Subscribe
                                            </button>
                                            <button 
                                                type='button'
                                                onClick={() => setShowSubscribe(false)}
                                                className='w-[120px] text-[14px] h-[42px] bg-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-400 transition-all duration-300'
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        )}
                        
                        <p className="text-[#5a6c7e] text-xs mt-6">
                            By subscribing, you agree to receive updates about SWYS Tech Skill Up Training
                        </p>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Training;