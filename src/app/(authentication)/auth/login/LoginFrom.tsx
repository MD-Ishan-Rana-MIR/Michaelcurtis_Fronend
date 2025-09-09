"use client";

import { useState } from "react";
import Image from "next/image";
import MaxWidth from "@/app/components/max-width/MaxWidth";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className=" bg-[#faf5ec]  py-11 min-h-screen " >
            <MaxWidth>
                <div className=" flex flex-col md:flex-row space-y-5 lg:gap-x-24 md:gap-x-10 ">

                    {/* Left Side: Form */}
                    <div className="flex-1 w-full  lg:max-w-[45%]    ">
                        <div className="">
                            <div>
                                {/* logo  */}
                                <div>
                                    <Image src={"/images/logo/logo.png"} width={1000} height={1000} alt="" className=" flex justify-center  " />
                                </div>
                            </div>
                            <div className=" mt-7 lg:mt-14 text-center  " >
                                <h1 className=" font-bold lg:text-4xl text-[#1F2937] " >Welcome back!</h1>
                                <p className=" lg:mt-4 mt-2 font-normal text-[#697079] text-[16px] " >
                                    Please enter the below information to logged in.
                                </p>

                            </div>
                            <div className=" lg:mt-16 mt-8 " >
                            </div>
                            <form className="space-y-4">
                                {/* Email */}
                                <div>
                                    <label
                                        className="text-[#1F2937] font-bold lg:text-lg mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border-4 border-[#F8F2E5] focus:outline-none focus:ring-0 bg-white rounded-[47px]  "
                                        placeholder="Enter your email"
                                        style={{
                                            boxShadow: "0 4px 10px rgba(248, 242, 229, 0.8)", // custom shadow color
                                        }}
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="text-[#1F2937] font-bold lg:text-lg mb-2" htmlFor="password">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-4 py-3 border-4 border-[#F8F2E5] focus:outline-none focus:ring-0 bg-white rounded-[47px]  "
                                            placeholder="********"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 "
                                        >
                                            {showPassword ? <EyeOff className=" cursor-pointer " /> : <><Eye className=" cursor-pointer " /></>}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me + Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center text-gray-700">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={() => setRememberMe(!rememberMe)}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-sm">Remember me</span>
                                    </label>
                                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full lg:mt-12 mt-5 cursor-pointer  text-white py-3 px-2 rounded-[37px] btnColor text-lg font-bold "
                                >
                                    Login
                                </button>
                            </form>
                            <div>
                                <p className=" text-[#697079] font-medium  block text-center text-[17px] lg:mt-10 mt-5 " >
                                    Don’t have an account ? <Link className=" text-[#D09A40]  underline " href={"/auth/registration"} >Sign up</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 w-full  lg:ax-w-[50%] mx-auto    ">
                        <Image
                            src="/images/login/login-image.jpg"
                            alt="Login Image"
                            width={700}
                            height={700}
                            className="w-full lg:h-[941px] object-cover rounded-[20px] "
                        />
                    </div>
                </div>

            </MaxWidth>
        </div>
    );
}
