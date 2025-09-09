"use client";

import { useState } from "react";
import Image from "next/image";
import MaxWidth from "@/app/components/max-width/MaxWidth";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoPersonSharp } from "react-icons/io5";

type FormValues = {
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
};

export default function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="bg-[#faf5ec] py-11 min-h-screen">
            <MaxWidth>
                <div className="flex flex-col md:flex-row space-y-5 lg:gap-x-24 md:gap-x-10">
                    {/* Left Side: Form */}
                    <div className="flex-1 w-full lg:max-w-[45%]">
                        <div>
                            {/* logo */}
                            <div className="flex justify-center">
                                <Image
                                    src={"/images/logo/logo.png"}
                                    width={2000}
                                    height={2000}
                                    alt="Logo"
                                />
                            </div>

                            <div className="mt-7 lg:mt-14 text-center">
                                <h1 className="font-bold lg:text-4xl text-[#1F2937]">
                                    Welcome back!
                                </h1>
                                <p className="lg:mt-4 mt-2 font-normal text-[#697079] text-[16px]">
                                    Give us some information to create the account.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:mt-16 mt-8">
                                {/* Email */}
                                <div>
                                    <label
                                        className="text-[#1F2937] font-bold lg:text-lg mb-2 block"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                        <span>

                                        </span>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Enter a valid email",
                                                },
                                            })}
                                            className="w-full px-6 pl-[50px] pr-4 py-3 border-4 border-[#F8F2E5] focus:outline-none focus:ring-0 bg-white rounded-[47px]"
                                            style={{
                                                boxShadow: "0 4px 10px rgba(248, 242, 229, 0.8)",
                                            }}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                {/* Name  */}
                                <div>
                                    <label
                                        className="text-[#1F2937] font-bold lg:text-lg mb-2 block"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <div className="relative">
                                        <IoPersonSharp size={23} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 bor " />
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter your full name"
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                            className="w-full px-6 pl-[50px] pr-4 py-3 border-4 border-[#F8F2E5] focus:outline-none focus:ring-0 bg-white rounded-[47px]"
                                            style={{
                                                boxShadow: "0 4px 10px rgba(248, 242, 229, 0.8)",
                                            }}
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        className="text-[#1F2937] font-bold lg:text-lg mb-2 block"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            placeholder="********"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters",
                                                },
                                            })}
                                            className="w-full px-6 pl-[50px] pr-4 py-3 border-4 border-[#F8F2E5] focus:outline-none focus:ring-0 bg-white rounded-[47px]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 "
                                        >
                                            {showPassword ? (
                                                <EyeOff className="cursor-pointer  " />
                                            ) : (
                                                <Eye className="cursor-pointer  " />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Remember Me + Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center text-gray-700">
                                        <input
                                            type="checkbox"
                                            {...register("rememberMe")}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-sm font-medium ">By creating an account, you agree to <span className=" text-[#DBBC7E] " >the terms of conditions</span> & <span className=" text-[#DBBC7E] " >privacy policy</span>.</span>
                                    </label>

                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full lg:mt-12 mt-5 cursor-pointer text-white py-3 px-2 rounded-[37px] btnColor text-lg font-bold"
                                >
                                    Sign up
                                </button>
                            </form>

                            <div>

                                <p className="text-[#697079] font-medium block text-center text-[17px] lg:mt-10 mt-5">
                                    Have an account ?{" "}
                                    <Link
                                        className="text-[#D09A40] underline"
                                        href={"/auth/Login"}
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 w-full lg:max-w-[50%] mx-auto">
                        <Image
                            src="/images/login/RegImg.jpg"
                            alt="Login Image"
                            width={700}
                            height={700}
                            className="w-full lg:h-[941px] object-cover rounded-[20px]"
                        />
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
}
