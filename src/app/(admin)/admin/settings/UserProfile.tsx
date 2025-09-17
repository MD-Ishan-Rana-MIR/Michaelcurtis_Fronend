// pages/profile.tsx
"use client"
import Image from "next/image";
import React, { useState } from "react";
import PasswordUpdateFrom from "./PasswordUpdateFrom";

// Define types
interface FormData {
    fullName: string;
    contactNumber: string;
    email: string;
}

export default function UserProfile() {
    const [preview, setPreview] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        contactNumber: "",
        email: "",
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        alert("Profile updated!");
    };


    // password update modal 

    const [passwordUpdateModal, setPasswordUpdateModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setPasswordUpdateModal(true)
    }



    return (
        <>
            <div className=" px-16 shadow shadow-[#00000040] rounded-[12px] py-9   ">
                <h2 className="text-2xl font-medium">Profile Information</h2>
                <div className=" mt-6 border border-[#E7E7E7] rounded-3xl shadow p-7   ">

                    <div className="flex flex-col items-center  justify-center mb-6">
                        <label className="relative w-32 h-32 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                            {preview ? (
                                <Image
                                    width={128}
                                    height={128}
                                    src={preview}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.5682 11.4985H37.011M49.061 32.1331L38.7325 21.8113L28.4039 32.1331L14.6325 14.9301L0.861084 32.1556M4.30394 1.16992H45.6182C47.5196 1.16992 49.061 2.71134 49.061 4.61278V45.927C49.061 47.8284 47.5196 49.3699 45.6182 49.3699H4.30394C2.4025 49.3699 0.861084 47.8284 0.861084 45.927V4.61278C0.861084 2.71134 2.4025 1.16992 4.30394 1.16992Z" stroke="#5D5D5D" stroke-width="0.922193" />
                                    </svg>


                                </span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleImageChange}
                            />
                        </label>
                        <h1 className="text-[#121221] text-xl font-medium text-center mt-3.5 " >Upload your photo</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">

                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" >
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.42985 0.509766C8.40817 0.509766 9.34643 0.898403 10.0382 1.59018C10.73 2.28196 11.1186 3.22021 11.1186 4.19854C11.1186 5.17686 10.73 6.11511 10.0382 6.80689C9.34643 7.49867 8.40817 7.88731 7.42985 7.88731C6.45153 7.88731 5.51327 7.49867 4.82149 6.80689C4.12972 6.11511 3.74108 5.17686 3.74108 4.19854C3.74108 3.22021 4.12972 2.28196 4.82149 1.59018C5.51327 0.898403 6.45153 0.509766 7.42985 0.509766ZM7.42985 2.35415C6.94069 2.35415 6.47156 2.54847 6.12567 2.89436C5.77978 3.24025 5.58546 3.70938 5.58546 4.19854C5.58546 4.6877 5.77978 5.15682 6.12567 5.50271C6.47156 5.8486 6.94069 6.04292 7.42985 6.04292C7.91901 6.04292 8.38814 5.8486 8.73403 5.50271C9.07992 5.15682 9.27423 4.6877 9.27423 4.19854C9.27423 3.70938 9.07992 3.24025 8.73403 2.89436C8.38814 2.54847 7.91901 2.35415 7.42985 2.35415ZM7.42985 8.8095C9.8921 8.8095 14.8074 10.036 14.8074 12.4983V15.2648H0.0523071V12.4983C0.0523071 10.036 4.96759 8.8095 7.42985 8.8095ZM7.42985 10.5617C4.69094 10.5617 1.80447 11.9081 1.80447 12.4983V13.5127H13.0552V12.4983C13.0552 11.9081 10.1688 10.5617 7.42985 10.5617Z" fill="#686868" />
                                </svg>

                            </span>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-0 "
                            />
                        </div>

                        {/* Contact Number */}
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" >
                                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.87169 0.694377L3.94789 0.370687C4.53744 0.19291 5.17153 0.235706 5.73184 0.491088C6.29216 0.746471 6.74041 1.19699 6.99297 1.75859L7.82479 3.60851C8.04193 4.09155 8.1024 4.63046 7.99771 5.14962C7.89302 5.66877 7.62842 6.14213 7.24104 6.50327L5.86236 7.78788C5.82209 7.82541 5.79657 7.87612 5.79043 7.93082C5.74985 8.29693 5.99792 9.00979 6.5706 10.0011C6.98559 10.7214 7.36277 11.2277 7.68277 11.5108C7.90686 11.709 8.02951 11.7515 8.08208 11.7367L9.93569 11.1696C10.4419 11.0147 10.9839 11.0222 11.4856 11.1909C11.9874 11.3595 12.4238 11.681 12.7336 12.1102L13.914 13.748C14.2734 14.246 14.4398 14.8574 14.3825 15.4688C14.3252 16.0802 14.048 16.65 13.6023 17.0725L12.7843 17.8472C12.3507 18.2578 11.8181 18.5492 11.2384 18.6928C10.6587 18.8365 10.0517 18.8276 9.47643 18.667C6.93672 17.9578 4.65982 15.8146 2.61993 12.2817C0.578196 8.7442 -0.13927 5.69727 0.522865 3.14003C0.671499 2.56489 0.96578 2.03774 1.37734 1.60937C1.78891 1.18101 2.30295 0.865889 2.87169 0.694377ZM3.27192 2.01957C2.93061 2.12221 2.62149 2.31105 2.37436 2.56787C2.12722 2.82469 1.95041 3.14085 1.86097 3.48585C1.30581 5.63641 1.9412 8.33751 3.81878 11.5901C5.69452 14.838 7.7132 16.7387 9.84992 17.3353C10.1951 17.4316 10.5593 17.4368 10.9071 17.3505C11.2549 17.2642 11.5744 17.0894 11.8345 16.8429L12.6515 16.0683C12.8543 15.8762 12.9804 15.6172 13.0065 15.3392C13.0326 15.0612 12.957 14.7832 12.7936 14.5568L11.6132 12.9199C11.4723 12.7246 11.2738 12.5783 11.0456 12.5015C10.8173 12.4248 10.5708 12.4215 10.3405 12.492L8.48231 13.061C7.40334 13.3819 6.4249 12.5141 5.3736 10.6928C4.66351 9.46627 4.33336 8.51642 4.41636 7.77774C4.45878 7.39411 4.63769 7.03998 4.91896 6.77624L6.29764 5.49162C6.47364 5.32738 6.59381 5.11215 6.64127 4.87614C6.68874 4.64012 6.66113 4.39517 6.5623 4.17565L5.73141 2.32574C5.61659 2.07046 5.41282 1.86568 5.15812 1.74962C4.90341 1.63355 4.61518 1.61412 4.3472 1.69496L3.27192 2.01957Z" fill="#686868" />
                                </svg>

                            </span>
                            <input
                                type="text"
                                name="contactNumber"
                                placeholder="Contact number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="w-full border border-[#E7E7E9] rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-0 "
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" >
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6518 2.63833C18.6518 1.62392 17.8218 0.793945 16.8074 0.793945H2.05233C1.03792 0.793945 0.207947 1.62392 0.207947 2.63833V13.7046C0.207947 14.7191 1.03792 15.549 2.05233 15.549H16.8074C17.8218 15.549 18.6518 14.7191 18.6518 13.7046V2.63833ZM16.8074 2.63833L9.42987 7.24929L2.05233 2.63833H16.8074ZM16.8074 13.7046H2.05233V4.48272L9.42987 9.09368L16.8074 4.48272V13.7046Z" fill="#686868" />
                                </svg>

                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-[#E7E7E9] rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-0 "
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-16 bg-[#D09A40] border border-[#D1D1D1] text-white text-sm font-bold py-4 rounded-xl cursor-pointer  "
                        >
                            Save changes
                        </button>

                        <button
                            onClick={handleOpenModal}
                            type="button"
                            className="w-full mt-3.5 bg-[#E9E9E9 border border-[#D1D1D1] text-[#1E1E1E] text-sm font-bold py-4 rounded-xl cursor-pointer "
                        >
                            Update password from here
                        </button>
                    </form>
                </div>
            </div>
            {
                passwordUpdateModal && (
                    <PasswordUpdateFrom passwordUpdateModal={passwordUpdateModal} setPasswordUpdateModal={setPasswordUpdateModal} ></PasswordUpdateFrom>
                )
            }
        </>
    );
}
