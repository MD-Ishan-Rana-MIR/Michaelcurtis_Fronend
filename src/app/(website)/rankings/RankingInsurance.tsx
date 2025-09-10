"use client"
import MaxWidth from '@/app/components/max-width/MaxWidth'
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
// auto 
type Option = "auto" | "health" | "life" | "home";
const options: Option[] = ["auto", "health", "life", "home"];
// state 
type StateType = {
    name: string
}


import Image from "next/image";
import { Star, Trophy, ArrowRight } from "lucide-react";
import Link from 'next/link';



const RankingInsurance = () => {
    // auto 

    const [selected, setSelected] = useState<Option>("auto");
    const [open, setOpen] = useState(false);


    const autoDropdownRef = useRef<HTMLDivElement | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (autoDropdownRef.current && !autoDropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);







    // state 
    const [selectedState, setSelectedState] = useState<string>("All States");
    const [openState, setOpenState] = useState(false);

    const stateList: StateType[] = [
        { name: "California" },
        { name: "Texas" },
        { name: "Florida" },
        { name: "New York" },
    ];


    const stateDropdownRef = useRef<HTMLDivElement | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target as Node)) {
                setOpenState(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);











    // rating 

    const [score, setScore] = useState(4);




    // price 

    const priceList: number[] = [50, 100, 200, 500, 1000];


    const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
    const [openPrice, setOpenPrice] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenPrice(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    const insuranceData = [
        { rank: 4, company: "Progressive", overall: 4.6, claim: 4.8, service: 4.9, price: 4.2, cover: 4.2, digital: 4.2, priceValue: "$450" },
        { rank: 5, company: "Progressive", overall: 4.6, claim: 4.8, service: 4.9, price: 4.2, cover: 4.2, digital: 4.2, priceValue: "$450" },
        { rank: 6, company: "Progressive", overall: 4.6, claim: 4.8, service: 4.9, price: 4.2, cover: 4.2, digital: 4.2, priceValue: "$450" },
        { rank: 8, company: "Progressive", overall: 4.6, claim: 4.8, service: 4.9, price: 4.2, cover: 4.2, digital: 4.2, priceValue: "$450" },
        { rank: 9, company: "Progressive", overall: 4.6, claim: 4.8, service: 4.9, price: 4.2, cover: 4.2, digital: 4.2, priceValue: "$450" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Show 4 cards per page

    // Pagination logic
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = insuranceData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(insuranceData.length / itemsPerPage);









    return (
        <div className=' pt-3 lg:pt-5 pb-10 lg:pb-20 ' >
            <div className=' max-w-7xl mx-auto ' >
                <div className=' flex gap-x-8 ' >
                    {/* auto  */}
                    <div ref={autoDropdownRef} className="relative w-36">
                        {/* Dropdown button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-full flex justify-between items-center px-4 py-2 border border-[#697079] rounded-lg bg-white shadow-sm text-gray-700 hover:border-gray-400 focus:outline-none"
                        >
                            <span className="capitalize">{selected}</span>
                            <ChevronDown
                                className={`h-5 w-5 cursor-pointer text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {/* Dropdown menu */}
                        {open && (
                            <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {options.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => {
                                            setSelected(option);
                                            setOpen(false);
                                        }}
                                        className={`px-4 py-2 cursor-pointer capitalize textColor font-normal lg:text-xl text-[16px] hover:bg-gray-100 ${selected === option ? "bg-gray-100 font-normal" : ""
                                            }`}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* state  */}

                    <div ref={stateDropdownRef} className="relative w-36">
                        {/* Dropdown button */}
                        <button
                            onClick={() => setOpenState(!openState)}
                            className="w-full flex justify-between items-center px-4 py-2 border border-[#697079] rounded-lg bg-white shadow-sm text-gray-700 hover:border-gray-400 focus:outline-none"
                        >
                            <span className="capitalize">{selectedState}</span>
                            <ChevronDown
                                className={`h-5 w-5 cursor-pointer text-gray-500 transition-transform duration-200 ${openState ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {/* Dropdown menu */}
                        {openState && (
                            <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {stateList.map((option) => (
                                    <li
                                        key={option.name}
                                        onClick={() => {
                                            setSelectedState(option.name);
                                            setOpenState(false);
                                        }}
                                        className={`px-4 py-2 cursor-pointer textColor font-normal lg:text-xl text-[16px]  capitalize hover:bg-gray-100 ${selectedState === option.name ? "bg-gray-100 font-normal" : ""
                                            }`}
                                    >
                                        {option.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>


                    {/* rating  */}


                    <div className="flex items-center gap-4  rounded-lg px-4 py-2  border border-[#697079]  w-64  ">
                        {/* Label */}
                        <span className="text-gray-600 font-normal">Score: {score}+</span>

                        {/* Slider */}
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={score}
                            onChange={(e) => setScore(Number(e.target.value))}
                            className="w-32 h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-yellow-600"
                        />
                    </div>


                    {/* price  */}


                    <div ref={dropdownRef} className="relative w-36">
                        {/* Dropdown button */}
                        <button
                            onClick={() => setOpenPrice(!openPrice)}
                            className="w-full flex justify-between items-center px-4 py-2 border border-[#697079] rounded-lg bg-white  textColor  focus:outline-none"
                        >
                            <span>{selectedPrice !== null ? `$${selectedPrice}` : "Any Price"}</span>
                            <ChevronDown
                                className={`h-5 w-5 cursor-pointer textColor transition-transform duration-200 ${openPrice ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {/* Dropdown menu */}
                        {openPrice && (
                            <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {priceList.map((price) => (
                                    <li
                                        key={price}
                                        onClick={() => {
                                            setSelectedPrice(price);
                                            setOpenPrice(false);
                                        }}
                                        className={`px-4 py-2 cursor-pointer  textColor font-normal lg:text-xl text-[16px]  ${selectedPrice === price ? "bg-gray-100 font-normal" : ""
                                            }`}
                                    >
                                        ${price}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* reset btn  */}

                    <button className=' font-normal lg:text-xl text-[15px] textColor cursor-pointer  ' >
                        Reset
                    </button>
                </div>


                {/* top insurance  */}

                <div className=' flex items-center justify-between my-12 gap-x-16 relative  ' >

                    {/* 1  */}

                    <div className=" flex-1   ">
                        {/* Logo */}
                        <div className=" flex justify-center ">
                            {/* <Image
                                src="/healthcare-logo.png" // replace with your image path
                                alt="Medical Health Care"
                                width={120}
                                height={120}
                            /> */}
                            <svg width="99" height="123" viewBox="0 0 99 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.9197 58.071V48.7482H23.8613V58.071H21.373V37.5384H23.8613V46.2606H26.9197V37.5384H29.4084V58.071H26.9197Z" fill="#003942" />
                                <path d="M32.5183 58.0707V37.5381H38.6868V40.0258H35.0065V46.2602H38.2724V48.748H35.0065V55.583H38.6868V58.0707H32.5183Z" fill="#003942" />
                                <path d="M43.6118 58.0707H41.1232V41.0554C41.1232 38.7105 42.1167 37.538 44.1042 37.538H45.9706C47.9571 37.538 48.9511 38.7104 48.9511 41.0554V58.0706H46.4629V50.5496H43.6118V58.0707H43.6118ZM46.4629 48.0619V41.2269C46.4629 40.4261 46.1 40.0258 45.3742 40.0258H44.7004C43.9747 40.0258 43.6118 40.4261 43.6118 41.2269V48.0619H46.4629Z" fill="#003942" />
                                <path d="M57.8411 58.0707H51.9316V37.5381H54.4198V55.583H57.8412L57.8411 58.0707Z" fill="#003942" />
                                <path d="M62.7141 40.0258V58.0707H60.2259V40.0258H57.8412V37.5381H65.0988V40.0258H62.7141Z" fill="#003942" />
                                <path d="M72.8481 58.0707V48.748H69.7896V58.0707H67.3014V37.5381H69.7896V46.2603H72.8481V37.5381H75.3363V58.0707H72.8481Z" fill="#003942" />
                                <path d="M37.2746 76.4786V77.7945C37.2746 80.1204 36.2811 81.2831 34.2941 81.2831H32.6871C30.6996 81.2831 29.7061 80.1204 29.7061 77.7945V64.2392C29.7061 61.9138 30.6996 60.7505 32.6871 60.7505H34.2941C36.2811 60.7505 37.2746 61.9138 37.2746 64.2392V66.5559H34.7864V64.4393C34.7864 63.6386 34.4147 63.2382 33.6717 63.2382H33.1794C32.5228 63.2382 32.1947 63.6386 32.1947 64.4393V77.5943C32.1947 78.395 32.5228 78.7954 33.1794 78.7954H33.8017C34.4578 78.7954 34.7863 78.395 34.7863 77.5943V76.4786H37.2746Z" fill="#003942" />
                                <path d="M42.3548 81.2831H39.8666V64.2679C39.8666 61.923 40.8601 60.7506 42.8471 60.7506H44.7135C46.7005 60.7506 47.694 61.923 47.694 64.2679V81.2831H45.2058V73.7621H42.3548V81.2831ZM45.2058 71.2744V64.4394C45.2058 63.6386 44.8429 63.2382 44.1172 63.2382H43.4434C42.7177 63.2382 42.3548 63.6386 42.3548 64.4394V71.2744H45.2058Z" fill="#003942" />
                                <path d="M50.6746 60.7506H55.5474C57.4481 60.7506 58.3984 61.923 58.3984 64.2679V69.3299C58.3984 71.1219 57.9061 72.2564 56.9214 72.7325L58.6579 81.2831H56.2992L54.6662 72.99H53.1627V81.2831H50.6746V60.7506ZM53.1627 70.6452H54.7957C55.5386 70.6452 55.9103 70.1496 55.9103 69.1579V64.7256C55.9103 63.7344 55.5386 63.2382 54.7957 63.2382H53.1627V70.6452Z" fill="#003942" />
                                <path d="M61.2494 81.2831V60.7506H67.4179V63.2382H63.7376V69.4726H67.0035V71.9604H63.7376V78.7954H67.4179V81.2831L61.2494 81.2831Z" fill="#003942" />
                                <path d="M34.0319 35.4501L34.0206 33.1648L33.0159 35.0255H32.5245L31.5251 33.2265V35.4502H30.5037V31.1386H31.4134L32.7869 33.627L34.1271 31.1386H35.0367L35.048 35.4502L34.0319 35.4501Z" fill="#003942" />
                                <path d="M40.6421 34.5076V35.45H37.5046V31.1384H40.5695V32.081H38.5987V32.8076H40.3351V33.7192H38.5987V34.5076H40.6421Z" fill="#003942" />
                                <path d="M42.9312 31.1385H44.7789C45.207 31.1385 45.5866 31.2267 45.918 31.4031C46.249 31.58 46.506 31.8306 46.6884 32.1546C46.8708 32.4793 46.9621 32.859 46.9621 33.2941C46.9621 33.7296 46.8708 34.1094 46.6884 34.4341C46.506 34.7581 46.249 35.0087 45.918 35.1856C45.5866 35.362 45.207 35.4502 44.7789 35.4502H42.9312V31.1385ZM44.7343 34.4767C45.0692 34.4767 45.3379 34.3723 45.5409 34.1629C45.7439 33.9535 45.8454 33.6641 45.8454 33.294C45.8454 32.9245 45.7439 32.635 45.5409 32.4256C45.3379 32.2162 45.0692 32.1118 44.7343 32.1118H44.0364V34.4767H44.7343V34.4767Z" fill="#003942" />
                                <path d="M49.2173 31.1385H50.3226V35.4501H49.2173V31.1385Z" fill="#003942" />
                                <path d="M53.6308 35.2499C53.3051 35.0589 53.0492 34.7932 52.8634 34.4524C52.6771 34.1116 52.5839 33.7253 52.5839 33.2941C52.5839 32.8634 52.6771 32.4771 52.8634 32.1363C53.0492 31.7954 53.3051 31.5298 53.6308 31.3388C53.9564 31.1478 54.3242 31.052 54.7337 31.052C55.0906 31.052 55.4128 31.1218 55.6992 31.2614C55.9861 31.4015 56.2239 31.6028 56.4137 31.8653L55.7105 32.5675C55.4575 32.231 55.1505 32.0622 54.7891 32.0622C54.5772 32.0622 54.3879 32.1136 54.2227 32.2164C54.057 32.3192 53.9285 32.4636 53.8372 32.6508C53.746 32.8374 53.7005 33.0523 53.7005 33.2942C53.7005 33.5365 53.7461 33.7513 53.8372 33.938C53.9285 34.1252 54.057 34.2696 54.2227 34.3725C54.3879 34.4752 54.5772 34.5261 54.7891 34.5261C55.1505 34.5261 55.4575 34.3579 55.7105 34.0214L56.4137 34.7236C56.2239 34.9866 55.9861 35.1878 55.6992 35.3274C55.4128 35.4665 55.0906 35.5368 54.7337 35.5368C54.3241 35.5366 53.9564 35.4409 53.6308 35.2499Z" fill="#003942" />
                                <path d="M61.1316 34.6125H59.479L59.1721 35.45H58.0442L59.7694 31.1384H60.8581L62.5886 35.45H61.4386L61.1316 34.6125ZM60.8074 33.7133L60.3052 32.3332L59.8026 33.7133H60.8074Z" fill="#003942" />
                                <path d="M64.5759 31.1385H65.6812V34.4833H67.5461V35.4502H64.5759V31.1385Z" fill="#003942" />
                                <path d="M49.5023 0.405884C22.1616 0.405884 0 24.8572 0 55.0228C0 80.5131 15.833 101.929 37.2421 107.944C39.2316 113.195 42.8921 118.741 49.5023 122.968C56.1124 118.736 59.7683 113.195 61.7625 107.944C83.167 101.929 99 80.5131 99 55.0228C99 24.8572 76.8385 0.405884 49.5023 0.405884ZM49.5023 118.848C45.8464 116.169 43.0445 112.828 41.1335 108.855C40.5472 107.643 40.0441 106.375 39.624 105.051C39.3656 104.221 39.1347 103.37 38.9363 102.499C38.3869 100.06 38.1839 97.8292 38.1377 96.062C38.53 96.0925 38.9455 96.1078 39.3932 96.1078C40.2841 96.1078 41.2489 96.0365 42.2551 95.8939C45.5649 95.4253 47.9421 94.3202 49.5023 93.3321C51.0579 94.3202 53.4353 95.4202 56.7495 95.8939C57.7558 96.0365 58.716 96.1078 59.6115 96.1078C60.0546 96.1078 60.4747 96.0925 60.867 96.062C60.8162 97.8292 60.6178 100.065 60.0684 102.499C59.87 103.37 59.6391 104.221 59.3806 105.051C58.9606 106.375 58.4574 107.643 57.8712 108.855C55.9556 112.828 53.1582 116.169 49.5023 118.848ZM62.9858 104.012C64.6937 97.0907 63.8398 91.5088 63.8398 91.5088C63.8398 91.5088 62.8012 92.6088 59.6115 92.6088C58.9006 92.6088 58.0882 92.5579 57.1558 92.4255C51.7919 91.6615 49.5023 89.0387 49.5023 89.0387C49.5023 89.0387 47.2128 91.6616 41.8489 92.4255C40.9165 92.5579 40.0995 92.6088 39.3932 92.6088C36.2035 92.6088 35.1649 91.5088 35.1649 91.5088C35.1649 91.5088 34.311 97.0906 36.0189 104.012C16.9823 97.6306 3.09733 78.0837 3.09733 55.0228C3.09733 26.7874 23.911 3.82324 49.5023 3.82324C75.089 3.82324 95.9073 26.7874 95.9073 55.0228C95.9073 78.0787 82.0177 97.6306 62.9858 104.012Z" fill="#003942" />
                                <path d="M51.2046 98.1472H47.8843V104.015H42.5658V107.678H47.8843V113.546H51.2046V107.678H56.523V104.015H51.2046V98.1472Z" fill="#003942" />
                            </svg>

                        </div>

                        <div className='  mt-6 ' >
                            {/* Trophy Badge */}
                            <div className=' flex justify-center ' >
                                <div className="w-12 h-11 rounded-[5px] shadow flex justify-center items-center bg-[#D8D6C8]     ">
                                    <svg
                                        width="26"
                                        height="27"
                                        viewBox="0 0 26 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.58333 23.718V21.5514H11.9167V18.193C11.0319 17.9944 10.2422 17.6199 9.54742 17.0696C8.85264 16.5193 8.34239 15.8285 8.01667 14.9972C6.6625 14.8347 5.52969 14.2435 4.61825 13.2238C3.70681 12.204 3.25072 11.0076 3.25 9.63468V8.55135C3.25 7.95552 3.46233 7.44563 3.887 7.02168C4.31167 6.59774 4.82156 6.38541 5.41667 6.38468H7.58333V4.21802H18.4167V6.38468H20.5833C21.1792 6.38468 21.6894 6.59702 22.1141 7.02168C22.5388 7.44635 22.7507 7.95624 22.75 8.55135V9.63468C22.75 11.0069 22.2939 12.2033 21.3818 13.2238C20.4696 14.2443 19.3368 14.8354 17.9833 14.9972C17.6583 15.8277 17.1484 16.5185 16.4537 17.0696C15.7589 17.6207 14.9688 17.9951 14.0833 18.193V21.5514H18.4167V23.718H7.58333ZM7.58333 12.668V8.55135H5.41667V9.63468C5.41667 10.3208 5.61528 10.9394 6.0125 11.4904C6.40972 12.0415 6.93333 12.434 7.58333 12.668ZM18.4167 12.668C19.0667 12.4333 19.5903 12.0404 19.9875 11.4894C20.3847 10.9383 20.5833 10.3201 20.5833 9.63468V8.55135H18.4167V12.668Z"
                                            fill="#807F65"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className=' bg-white   rounded-lg shadow-md   px-4 pt-6 pb-9 text-center -mt-4  ' >
                                {/* Title & Price */}
                                <div className="flex justify-between items-center mt-8">
                                    <h2 className="lg:text-xl text-[15px] text-black font-normal ">Progressive</h2>
                                    <span className="text-green-600 font-bold text-lg">$450</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-x-2 mt-2">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.99996 14.243L4.84996 16.743C4.66663 16.8597 4.47496 16.9097 4.27496 16.893C4.07496 16.8764 3.89996 16.8097 3.74996 16.693C3.59996 16.5764 3.4833 16.4307 3.39996 16.256C3.31663 16.0814 3.29996 15.8854 3.34996 15.668L4.44996 10.943L0.774963 7.76803C0.608296 7.61803 0.504296 7.44703 0.462963 7.25503C0.421629 7.06303 0.433963 6.8757 0.499963 6.69303C0.565963 6.51036 0.665963 6.36036 0.799963 6.24303C0.933963 6.1257 1.1173 6.0507 1.34996 6.01803L6.19996 5.59303L8.07496 1.14303C8.1583 0.94303 8.28763 0.79303 8.46296 0.69303C8.6383 0.59303 8.8173 0.54303 8.99996 0.54303C9.18263 0.54303 9.36163 0.59303 9.53696 0.69303C9.7123 0.79303 9.84163 0.94303 9.92496 1.14303L11.8 5.59303L16.65 6.01803C16.8833 6.05136 17.0666 6.12636 17.2 6.24303C17.3333 6.3597 17.4333 6.5097 17.5 6.69303C17.5666 6.87636 17.5793 7.06403 17.538 7.25603C17.4966 7.44803 17.3923 7.6187 17.225 7.76803L13.55 10.943L14.65 15.668C14.7 15.8847 14.6833 16.0807 14.6 16.256C14.5166 16.4314 14.4 16.577 14.25 16.693C14.1 16.809 13.925 16.8757 13.725 16.893C13.525 16.9104 13.3333 16.8604 13.15 16.743L8.99996 14.243Z" fill="#F6CF2F" />
                                    </svg>

                                    <span className=" text-black text-xs lg:text-[16px] font-normal   ">4.9</span>
                                </div>

                                {/* Scores */}
                                <div className="flex justify-between gap-2 mt-5">
                                    {[
                                        { score: "4.8", label: "Claim" },
                                        { score: "4.9", label: "Service" },
                                        { score: "4.2", label: "Price" },
                                        { score: "4.2", label: "Cover" },
                                        { score: "4.2", label: "Digital" },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center "
                                        >
                                            <span className="bg-[#E9EAEB] rounded-md px-4 py-2.5 font-normal ">{item.score}</span>
                                            <span className=" font-thin lg:text-[16px] text-xs text-black mt-1">{item.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mt-8 lg:mt-16 mb-5 "></div>

                                {/* Footer */}
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-[#697079] lg:text-[16px] text-xs font-normal rounded border-gray-400" />
                                        Compare
                                    </label>

                                    <Link href={"/profile-details"} >
                                        <button className="flex items-center gap-x-2 lg:text-[16px] cursor-pointer text-sm text-[#D09A40] font-normal hover:underline">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* 2  */}


                    <div className="flex-1">
                        {/* Logo */}
                        <div className=" flex justify-center  ">
                            {/* <Image
                                src="/healthcare-logo.png" // replace with your image path
                                alt="Medical Health Care"
                                width={120}
                                height={120}
                            /> */}
                            <svg width="99" height="123" viewBox="0 0 99 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.9197 58.071V48.7482H23.8613V58.071H21.373V37.5384H23.8613V46.2606H26.9197V37.5384H29.4084V58.071H26.9197Z" fill="#003942" />
                                <path d="M32.5183 58.0707V37.5381H38.6868V40.0258H35.0065V46.2602H38.2724V48.748H35.0065V55.583H38.6868V58.0707H32.5183Z" fill="#003942" />
                                <path d="M43.6118 58.0707H41.1232V41.0554C41.1232 38.7105 42.1167 37.538 44.1042 37.538H45.9706C47.9571 37.538 48.9511 38.7104 48.9511 41.0554V58.0706H46.4629V50.5496H43.6118V58.0707H43.6118ZM46.4629 48.0619V41.2269C46.4629 40.4261 46.1 40.0258 45.3742 40.0258H44.7004C43.9747 40.0258 43.6118 40.4261 43.6118 41.2269V48.0619H46.4629Z" fill="#003942" />
                                <path d="M57.8411 58.0707H51.9316V37.5381H54.4198V55.583H57.8412L57.8411 58.0707Z" fill="#003942" />
                                <path d="M62.7141 40.0258V58.0707H60.2259V40.0258H57.8412V37.5381H65.0988V40.0258H62.7141Z" fill="#003942" />
                                <path d="M72.8481 58.0707V48.748H69.7896V58.0707H67.3014V37.5381H69.7896V46.2603H72.8481V37.5381H75.3363V58.0707H72.8481Z" fill="#003942" />
                                <path d="M37.2746 76.4786V77.7945C37.2746 80.1204 36.2811 81.2831 34.2941 81.2831H32.6871C30.6996 81.2831 29.7061 80.1204 29.7061 77.7945V64.2392C29.7061 61.9138 30.6996 60.7505 32.6871 60.7505H34.2941C36.2811 60.7505 37.2746 61.9138 37.2746 64.2392V66.5559H34.7864V64.4393C34.7864 63.6386 34.4147 63.2382 33.6717 63.2382H33.1794C32.5228 63.2382 32.1947 63.6386 32.1947 64.4393V77.5943C32.1947 78.395 32.5228 78.7954 33.1794 78.7954H33.8017C34.4578 78.7954 34.7863 78.395 34.7863 77.5943V76.4786H37.2746Z" fill="#003942" />
                                <path d="M42.3548 81.2831H39.8666V64.2679C39.8666 61.923 40.8601 60.7506 42.8471 60.7506H44.7135C46.7005 60.7506 47.694 61.923 47.694 64.2679V81.2831H45.2058V73.7621H42.3548V81.2831ZM45.2058 71.2744V64.4394C45.2058 63.6386 44.8429 63.2382 44.1172 63.2382H43.4434C42.7177 63.2382 42.3548 63.6386 42.3548 64.4394V71.2744H45.2058Z" fill="#003942" />
                                <path d="M50.6746 60.7506H55.5474C57.4481 60.7506 58.3984 61.923 58.3984 64.2679V69.3299C58.3984 71.1219 57.9061 72.2564 56.9214 72.7325L58.6579 81.2831H56.2992L54.6662 72.99H53.1627V81.2831H50.6746V60.7506ZM53.1627 70.6452H54.7957C55.5386 70.6452 55.9103 70.1496 55.9103 69.1579V64.7256C55.9103 63.7344 55.5386 63.2382 54.7957 63.2382H53.1627V70.6452Z" fill="#003942" />
                                <path d="M61.2494 81.2831V60.7506H67.4179V63.2382H63.7376V69.4726H67.0035V71.9604H63.7376V78.7954H67.4179V81.2831L61.2494 81.2831Z" fill="#003942" />
                                <path d="M34.0319 35.4501L34.0206 33.1648L33.0159 35.0255H32.5245L31.5251 33.2265V35.4502H30.5037V31.1386H31.4134L32.7869 33.627L34.1271 31.1386H35.0367L35.048 35.4502L34.0319 35.4501Z" fill="#003942" />
                                <path d="M40.6421 34.5076V35.45H37.5046V31.1384H40.5695V32.081H38.5987V32.8076H40.3351V33.7192H38.5987V34.5076H40.6421Z" fill="#003942" />
                                <path d="M42.9312 31.1385H44.7789C45.207 31.1385 45.5866 31.2267 45.918 31.4031C46.249 31.58 46.506 31.8306 46.6884 32.1546C46.8708 32.4793 46.9621 32.859 46.9621 33.2941C46.9621 33.7296 46.8708 34.1094 46.6884 34.4341C46.506 34.7581 46.249 35.0087 45.918 35.1856C45.5866 35.362 45.207 35.4502 44.7789 35.4502H42.9312V31.1385ZM44.7343 34.4767C45.0692 34.4767 45.3379 34.3723 45.5409 34.1629C45.7439 33.9535 45.8454 33.6641 45.8454 33.294C45.8454 32.9245 45.7439 32.635 45.5409 32.4256C45.3379 32.2162 45.0692 32.1118 44.7343 32.1118H44.0364V34.4767H44.7343V34.4767Z" fill="#003942" />
                                <path d="M49.2173 31.1385H50.3226V35.4501H49.2173V31.1385Z" fill="#003942" />
                                <path d="M53.6308 35.2499C53.3051 35.0589 53.0492 34.7932 52.8634 34.4524C52.6771 34.1116 52.5839 33.7253 52.5839 33.2941C52.5839 32.8634 52.6771 32.4771 52.8634 32.1363C53.0492 31.7954 53.3051 31.5298 53.6308 31.3388C53.9564 31.1478 54.3242 31.052 54.7337 31.052C55.0906 31.052 55.4128 31.1218 55.6992 31.2614C55.9861 31.4015 56.2239 31.6028 56.4137 31.8653L55.7105 32.5675C55.4575 32.231 55.1505 32.0622 54.7891 32.0622C54.5772 32.0622 54.3879 32.1136 54.2227 32.2164C54.057 32.3192 53.9285 32.4636 53.8372 32.6508C53.746 32.8374 53.7005 33.0523 53.7005 33.2942C53.7005 33.5365 53.7461 33.7513 53.8372 33.938C53.9285 34.1252 54.057 34.2696 54.2227 34.3725C54.3879 34.4752 54.5772 34.5261 54.7891 34.5261C55.1505 34.5261 55.4575 34.3579 55.7105 34.0214L56.4137 34.7236C56.2239 34.9866 55.9861 35.1878 55.6992 35.3274C55.4128 35.4665 55.0906 35.5368 54.7337 35.5368C54.3241 35.5366 53.9564 35.4409 53.6308 35.2499Z" fill="#003942" />
                                <path d="M61.1316 34.6125H59.479L59.1721 35.45H58.0442L59.7694 31.1384H60.8581L62.5886 35.45H61.4386L61.1316 34.6125ZM60.8074 33.7133L60.3052 32.3332L59.8026 33.7133H60.8074Z" fill="#003942" />
                                <path d="M64.5759 31.1385H65.6812V34.4833H67.5461V35.4502H64.5759V31.1385Z" fill="#003942" />
                                <path d="M49.5023 0.405884C22.1616 0.405884 0 24.8572 0 55.0228C0 80.5131 15.833 101.929 37.2421 107.944C39.2316 113.195 42.8921 118.741 49.5023 122.968C56.1124 118.736 59.7683 113.195 61.7625 107.944C83.167 101.929 99 80.5131 99 55.0228C99 24.8572 76.8385 0.405884 49.5023 0.405884ZM49.5023 118.848C45.8464 116.169 43.0445 112.828 41.1335 108.855C40.5472 107.643 40.0441 106.375 39.624 105.051C39.3656 104.221 39.1347 103.37 38.9363 102.499C38.3869 100.06 38.1839 97.8292 38.1377 96.062C38.53 96.0925 38.9455 96.1078 39.3932 96.1078C40.2841 96.1078 41.2489 96.0365 42.2551 95.8939C45.5649 95.4253 47.9421 94.3202 49.5023 93.3321C51.0579 94.3202 53.4353 95.4202 56.7495 95.8939C57.7558 96.0365 58.716 96.1078 59.6115 96.1078C60.0546 96.1078 60.4747 96.0925 60.867 96.062C60.8162 97.8292 60.6178 100.065 60.0684 102.499C59.87 103.37 59.6391 104.221 59.3806 105.051C58.9606 106.375 58.4574 107.643 57.8712 108.855C55.9556 112.828 53.1582 116.169 49.5023 118.848ZM62.9858 104.012C64.6937 97.0907 63.8398 91.5088 63.8398 91.5088C63.8398 91.5088 62.8012 92.6088 59.6115 92.6088C58.9006 92.6088 58.0882 92.5579 57.1558 92.4255C51.7919 91.6615 49.5023 89.0387 49.5023 89.0387C49.5023 89.0387 47.2128 91.6616 41.8489 92.4255C40.9165 92.5579 40.0995 92.6088 39.3932 92.6088C36.2035 92.6088 35.1649 91.5088 35.1649 91.5088C35.1649 91.5088 34.311 97.0906 36.0189 104.012C16.9823 97.6306 3.09733 78.0837 3.09733 55.0228C3.09733 26.7874 23.911 3.82324 49.5023 3.82324C75.089 3.82324 95.9073 26.7874 95.9073 55.0228C95.9073 78.0787 82.0177 97.6306 62.9858 104.012Z" fill="#003942" />
                                <path d="M51.2046 98.1472H47.8843V104.015H42.5658V107.678H47.8843V113.546H51.2046V107.678H56.523V104.015H51.2046V98.1472Z" fill="#003942" />
                            </svg>

                        </div>

                        <div className='  mt-6' >
                            {/* Trophy Badge */}
                            <div className=' flex justify-center ' >
                                <div className="w-12 h-11 rounded-[5px] shadow flex justify-center items-center bg-[#FAE755]     ">
                                    <svg
                                        width="26"
                                        height="27"
                                        viewBox="0 0 26 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.58333 23.718V21.5514H11.9167V18.193C11.0319 17.9944 10.2422 17.6199 9.54742 17.0696C8.85264 16.5193 8.34239 15.8285 8.01667 14.9972C6.6625 14.8347 5.52969 14.2435 4.61825 13.2238C3.70681 12.204 3.25072 11.0076 3.25 9.63468V8.55135C3.25 7.95552 3.46233 7.44563 3.887 7.02168C4.31167 6.59774 4.82156 6.38541 5.41667 6.38468H7.58333V4.21802H18.4167V6.38468H20.5833C21.1792 6.38468 21.6894 6.59702 22.1141 7.02168C22.5388 7.44635 22.7507 7.95624 22.75 8.55135V9.63468C22.75 11.0069 22.2939 12.2033 21.3818 13.2238C20.4696 14.2443 19.3368 14.8354 17.9833 14.9972C17.6583 15.8277 17.1484 16.5185 16.4537 17.0696C15.7589 17.6207 14.9688 17.9951 14.0833 18.193V21.5514H18.4167V23.718H7.58333ZM7.58333 12.668V8.55135H5.41667V9.63468C5.41667 10.3208 5.61528 10.9394 6.0125 11.4904C6.40972 12.0415 6.93333 12.434 7.58333 12.668ZM18.4167 12.668C19.0667 12.4333 19.5903 12.0404 19.9875 11.4894C20.3847 10.9383 20.5833 10.3201 20.5833 9.63468V8.55135H18.4167V12.668Z"
                                            fill="#807F65"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className=' bg-white   rounded-lg shadow-md   px-4 pt-6 pb-9 text-center -mt-4   ' >
                                {/* Title & Price */}
                                <div className="flex justify-between items-center mt-8">
                                    <h2 className="lg:text-xl text-[15px] text-black font-normal ">Progressive</h2>
                                    <span className="text-green-600 font-bold text-lg">$450</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-x-2 mt-2">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.99996 14.243L4.84996 16.743C4.66663 16.8597 4.47496 16.9097 4.27496 16.893C4.07496 16.8764 3.89996 16.8097 3.74996 16.693C3.59996 16.5764 3.4833 16.4307 3.39996 16.256C3.31663 16.0814 3.29996 15.8854 3.34996 15.668L4.44996 10.943L0.774963 7.76803C0.608296 7.61803 0.504296 7.44703 0.462963 7.25503C0.421629 7.06303 0.433963 6.8757 0.499963 6.69303C0.565963 6.51036 0.665963 6.36036 0.799963 6.24303C0.933963 6.1257 1.1173 6.0507 1.34996 6.01803L6.19996 5.59303L8.07496 1.14303C8.1583 0.94303 8.28763 0.79303 8.46296 0.69303C8.6383 0.59303 8.8173 0.54303 8.99996 0.54303C9.18263 0.54303 9.36163 0.59303 9.53696 0.69303C9.7123 0.79303 9.84163 0.94303 9.92496 1.14303L11.8 5.59303L16.65 6.01803C16.8833 6.05136 17.0666 6.12636 17.2 6.24303C17.3333 6.3597 17.4333 6.5097 17.5 6.69303C17.5666 6.87636 17.5793 7.06403 17.538 7.25603C17.4966 7.44803 17.3923 7.6187 17.225 7.76803L13.55 10.943L14.65 15.668C14.7 15.8847 14.6833 16.0807 14.6 16.256C14.5166 16.4314 14.4 16.577 14.25 16.693C14.1 16.809 13.925 16.8757 13.725 16.893C13.525 16.9104 13.3333 16.8604 13.15 16.743L8.99996 14.243Z" fill="#F6CF2F" />
                                    </svg>

                                    <span className=" text-black text-xs lg:text-[16px] font-normal   ">4.9</span>
                                </div>

                                {/* Scores */}
                                <div className="flex justify-between gap-2 mt-5">
                                    {[
                                        { score: "4.8", label: "Claim" },
                                        { score: "4.9", label: "Service" },
                                        { score: "4.2", label: "Price" },
                                        { score: "4.2", label: "Cover" },
                                        { score: "4.2", label: "Digital" },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center "
                                        >
                                            <span className="bg-[#E9EAEB] rounded-md px-4 py-2.5 font-normal ">{item.score}</span>
                                            <span className=" font-thin lg:text-[16px] text-xs text-black mt-1">{item.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mt-8 lg:mt-16 mb-5 "></div>

                                {/* Footer */}
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-[#697079] lg:text-[16px] text-xs font-normal rounded border-gray-400" />
                                        Compare
                                    </label>

                                    <Link href={"/profile-details"} >
                                        <button className="flex items-center gap-x-2 lg:text-[16px] cursor-pointer text-sm text-[#D09A40] font-normal hover:underline">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>


                    {/* 3  */}



                    <div className=" flex-1  ">
                        {/* Logo */}
                        <div className=" flex justify-center  ">
                            {/* <Image
                                src="/healthcare-logo.png" // replace with your image path
                                alt="Medical Health Care"
                                width={120}
                                height={120}
                            /> */}
                            <svg width="99" height="123" viewBox="0 0 99 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.9197 58.071V48.7482H23.8613V58.071H21.373V37.5384H23.8613V46.2606H26.9197V37.5384H29.4084V58.071H26.9197Z" fill="#003942" />
                                <path d="M32.5183 58.0707V37.5381H38.6868V40.0258H35.0065V46.2602H38.2724V48.748H35.0065V55.583H38.6868V58.0707H32.5183Z" fill="#003942" />
                                <path d="M43.6118 58.0707H41.1232V41.0554C41.1232 38.7105 42.1167 37.538 44.1042 37.538H45.9706C47.9571 37.538 48.9511 38.7104 48.9511 41.0554V58.0706H46.4629V50.5496H43.6118V58.0707H43.6118ZM46.4629 48.0619V41.2269C46.4629 40.4261 46.1 40.0258 45.3742 40.0258H44.7004C43.9747 40.0258 43.6118 40.4261 43.6118 41.2269V48.0619H46.4629Z" fill="#003942" />
                                <path d="M57.8411 58.0707H51.9316V37.5381H54.4198V55.583H57.8412L57.8411 58.0707Z" fill="#003942" />
                                <path d="M62.7141 40.0258V58.0707H60.2259V40.0258H57.8412V37.5381H65.0988V40.0258H62.7141Z" fill="#003942" />
                                <path d="M72.8481 58.0707V48.748H69.7896V58.0707H67.3014V37.5381H69.7896V46.2603H72.8481V37.5381H75.3363V58.0707H72.8481Z" fill="#003942" />
                                <path d="M37.2746 76.4786V77.7945C37.2746 80.1204 36.2811 81.2831 34.2941 81.2831H32.6871C30.6996 81.2831 29.7061 80.1204 29.7061 77.7945V64.2392C29.7061 61.9138 30.6996 60.7505 32.6871 60.7505H34.2941C36.2811 60.7505 37.2746 61.9138 37.2746 64.2392V66.5559H34.7864V64.4393C34.7864 63.6386 34.4147 63.2382 33.6717 63.2382H33.1794C32.5228 63.2382 32.1947 63.6386 32.1947 64.4393V77.5943C32.1947 78.395 32.5228 78.7954 33.1794 78.7954H33.8017C34.4578 78.7954 34.7863 78.395 34.7863 77.5943V76.4786H37.2746Z" fill="#003942" />
                                <path d="M42.3548 81.2831H39.8666V64.2679C39.8666 61.923 40.8601 60.7506 42.8471 60.7506H44.7135C46.7005 60.7506 47.694 61.923 47.694 64.2679V81.2831H45.2058V73.7621H42.3548V81.2831ZM45.2058 71.2744V64.4394C45.2058 63.6386 44.8429 63.2382 44.1172 63.2382H43.4434C42.7177 63.2382 42.3548 63.6386 42.3548 64.4394V71.2744H45.2058Z" fill="#003942" />
                                <path d="M50.6746 60.7506H55.5474C57.4481 60.7506 58.3984 61.923 58.3984 64.2679V69.3299C58.3984 71.1219 57.9061 72.2564 56.9214 72.7325L58.6579 81.2831H56.2992L54.6662 72.99H53.1627V81.2831H50.6746V60.7506ZM53.1627 70.6452H54.7957C55.5386 70.6452 55.9103 70.1496 55.9103 69.1579V64.7256C55.9103 63.7344 55.5386 63.2382 54.7957 63.2382H53.1627V70.6452Z" fill="#003942" />
                                <path d="M61.2494 81.2831V60.7506H67.4179V63.2382H63.7376V69.4726H67.0035V71.9604H63.7376V78.7954H67.4179V81.2831L61.2494 81.2831Z" fill="#003942" />
                                <path d="M34.0319 35.4501L34.0206 33.1648L33.0159 35.0255H32.5245L31.5251 33.2265V35.4502H30.5037V31.1386H31.4134L32.7869 33.627L34.1271 31.1386H35.0367L35.048 35.4502L34.0319 35.4501Z" fill="#003942" />
                                <path d="M40.6421 34.5076V35.45H37.5046V31.1384H40.5695V32.081H38.5987V32.8076H40.3351V33.7192H38.5987V34.5076H40.6421Z" fill="#003942" />
                                <path d="M42.9312 31.1385H44.7789C45.207 31.1385 45.5866 31.2267 45.918 31.4031C46.249 31.58 46.506 31.8306 46.6884 32.1546C46.8708 32.4793 46.9621 32.859 46.9621 33.2941C46.9621 33.7296 46.8708 34.1094 46.6884 34.4341C46.506 34.7581 46.249 35.0087 45.918 35.1856C45.5866 35.362 45.207 35.4502 44.7789 35.4502H42.9312V31.1385ZM44.7343 34.4767C45.0692 34.4767 45.3379 34.3723 45.5409 34.1629C45.7439 33.9535 45.8454 33.6641 45.8454 33.294C45.8454 32.9245 45.7439 32.635 45.5409 32.4256C45.3379 32.2162 45.0692 32.1118 44.7343 32.1118H44.0364V34.4767H44.7343V34.4767Z" fill="#003942" />
                                <path d="M49.2173 31.1385H50.3226V35.4501H49.2173V31.1385Z" fill="#003942" />
                                <path d="M53.6308 35.2499C53.3051 35.0589 53.0492 34.7932 52.8634 34.4524C52.6771 34.1116 52.5839 33.7253 52.5839 33.2941C52.5839 32.8634 52.6771 32.4771 52.8634 32.1363C53.0492 31.7954 53.3051 31.5298 53.6308 31.3388C53.9564 31.1478 54.3242 31.052 54.7337 31.052C55.0906 31.052 55.4128 31.1218 55.6992 31.2614C55.9861 31.4015 56.2239 31.6028 56.4137 31.8653L55.7105 32.5675C55.4575 32.231 55.1505 32.0622 54.7891 32.0622C54.5772 32.0622 54.3879 32.1136 54.2227 32.2164C54.057 32.3192 53.9285 32.4636 53.8372 32.6508C53.746 32.8374 53.7005 33.0523 53.7005 33.2942C53.7005 33.5365 53.7461 33.7513 53.8372 33.938C53.9285 34.1252 54.057 34.2696 54.2227 34.3725C54.3879 34.4752 54.5772 34.5261 54.7891 34.5261C55.1505 34.5261 55.4575 34.3579 55.7105 34.0214L56.4137 34.7236C56.2239 34.9866 55.9861 35.1878 55.6992 35.3274C55.4128 35.4665 55.0906 35.5368 54.7337 35.5368C54.3241 35.5366 53.9564 35.4409 53.6308 35.2499Z" fill="#003942" />
                                <path d="M61.1316 34.6125H59.479L59.1721 35.45H58.0442L59.7694 31.1384H60.8581L62.5886 35.45H61.4386L61.1316 34.6125ZM60.8074 33.7133L60.3052 32.3332L59.8026 33.7133H60.8074Z" fill="#003942" />
                                <path d="M64.5759 31.1385H65.6812V34.4833H67.5461V35.4502H64.5759V31.1385Z" fill="#003942" />
                                <path d="M49.5023 0.405884C22.1616 0.405884 0 24.8572 0 55.0228C0 80.5131 15.833 101.929 37.2421 107.944C39.2316 113.195 42.8921 118.741 49.5023 122.968C56.1124 118.736 59.7683 113.195 61.7625 107.944C83.167 101.929 99 80.5131 99 55.0228C99 24.8572 76.8385 0.405884 49.5023 0.405884ZM49.5023 118.848C45.8464 116.169 43.0445 112.828 41.1335 108.855C40.5472 107.643 40.0441 106.375 39.624 105.051C39.3656 104.221 39.1347 103.37 38.9363 102.499C38.3869 100.06 38.1839 97.8292 38.1377 96.062C38.53 96.0925 38.9455 96.1078 39.3932 96.1078C40.2841 96.1078 41.2489 96.0365 42.2551 95.8939C45.5649 95.4253 47.9421 94.3202 49.5023 93.3321C51.0579 94.3202 53.4353 95.4202 56.7495 95.8939C57.7558 96.0365 58.716 96.1078 59.6115 96.1078C60.0546 96.1078 60.4747 96.0925 60.867 96.062C60.8162 97.8292 60.6178 100.065 60.0684 102.499C59.87 103.37 59.6391 104.221 59.3806 105.051C58.9606 106.375 58.4574 107.643 57.8712 108.855C55.9556 112.828 53.1582 116.169 49.5023 118.848ZM62.9858 104.012C64.6937 97.0907 63.8398 91.5088 63.8398 91.5088C63.8398 91.5088 62.8012 92.6088 59.6115 92.6088C58.9006 92.6088 58.0882 92.5579 57.1558 92.4255C51.7919 91.6615 49.5023 89.0387 49.5023 89.0387C49.5023 89.0387 47.2128 91.6616 41.8489 92.4255C40.9165 92.5579 40.0995 92.6088 39.3932 92.6088C36.2035 92.6088 35.1649 91.5088 35.1649 91.5088C35.1649 91.5088 34.311 97.0906 36.0189 104.012C16.9823 97.6306 3.09733 78.0837 3.09733 55.0228C3.09733 26.7874 23.911 3.82324 49.5023 3.82324C75.089 3.82324 95.9073 26.7874 95.9073 55.0228C95.9073 78.0787 82.0177 97.6306 62.9858 104.012Z" fill="#003942" />
                                <path d="M51.2046 98.1472H47.8843V104.015H42.5658V107.678H47.8843V113.546H51.2046V107.678H56.523V104.015H51.2046V98.1472Z" fill="#003942" />
                            </svg>

                        </div>

                        <div className='  mt-6 ' >
                            {/* Trophy Badge */}
                            <div className=' flex justify-center ' >
                                <div className="w-12 h-11 rounded-[5px] shadow flex justify-center items-center bg-[#FFBE56]      ">
                                    <svg
                                        width="26"
                                        height="27"
                                        viewBox="0 0 26 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.58333 23.718V21.5514H11.9167V18.193C11.0319 17.9944 10.2422 17.6199 9.54742 17.0696C8.85264 16.5193 8.34239 15.8285 8.01667 14.9972C6.6625 14.8347 5.52969 14.2435 4.61825 13.2238C3.70681 12.204 3.25072 11.0076 3.25 9.63468V8.55135C3.25 7.95552 3.46233 7.44563 3.887 7.02168C4.31167 6.59774 4.82156 6.38541 5.41667 6.38468H7.58333V4.21802H18.4167V6.38468H20.5833C21.1792 6.38468 21.6894 6.59702 22.1141 7.02168C22.5388 7.44635 22.7507 7.95624 22.75 8.55135V9.63468C22.75 11.0069 22.2939 12.2033 21.3818 13.2238C20.4696 14.2443 19.3368 14.8354 17.9833 14.9972C17.6583 15.8277 17.1484 16.5185 16.4537 17.0696C15.7589 17.6207 14.9688 17.9951 14.0833 18.193V21.5514H18.4167V23.718H7.58333ZM7.58333 12.668V8.55135H5.41667V9.63468C5.41667 10.3208 5.61528 10.9394 6.0125 11.4904C6.40972 12.0415 6.93333 12.434 7.58333 12.668ZM18.4167 12.668C19.0667 12.4333 19.5903 12.0404 19.9875 11.4894C20.3847 10.9383 20.5833 10.3201 20.5833 9.63468V8.55135H18.4167V12.668Z"
                                            fill="#807F65"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className=' bg-white   rounded-lg shadow-lg   px-4 pt-6 pb-9 text-center -mt-4   ' >
                                {/* Title & Price */}
                                <div className="flex justify-between items-center mt-8">
                                    <h2 className="lg:text-xl text-[15px] text-black font-normal ">Progressive</h2>
                                    <span className="text-green-600 font-bold text-lg">$450</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-x-2 mt-2">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.99996 14.243L4.84996 16.743C4.66663 16.8597 4.47496 16.9097 4.27496 16.893C4.07496 16.8764 3.89996 16.8097 3.74996 16.693C3.59996 16.5764 3.4833 16.4307 3.39996 16.256C3.31663 16.0814 3.29996 15.8854 3.34996 15.668L4.44996 10.943L0.774963 7.76803C0.608296 7.61803 0.504296 7.44703 0.462963 7.25503C0.421629 7.06303 0.433963 6.8757 0.499963 6.69303C0.565963 6.51036 0.665963 6.36036 0.799963 6.24303C0.933963 6.1257 1.1173 6.0507 1.34996 6.01803L6.19996 5.59303L8.07496 1.14303C8.1583 0.94303 8.28763 0.79303 8.46296 0.69303C8.6383 0.59303 8.8173 0.54303 8.99996 0.54303C9.18263 0.54303 9.36163 0.59303 9.53696 0.69303C9.7123 0.79303 9.84163 0.94303 9.92496 1.14303L11.8 5.59303L16.65 6.01803C16.8833 6.05136 17.0666 6.12636 17.2 6.24303C17.3333 6.3597 17.4333 6.5097 17.5 6.69303C17.5666 6.87636 17.5793 7.06403 17.538 7.25603C17.4966 7.44803 17.3923 7.6187 17.225 7.76803L13.55 10.943L14.65 15.668C14.7 15.8847 14.6833 16.0807 14.6 16.256C14.5166 16.4314 14.4 16.577 14.25 16.693C14.1 16.809 13.925 16.8757 13.725 16.893C13.525 16.9104 13.3333 16.8604 13.15 16.743L8.99996 14.243Z" fill="#F6CF2F" />
                                    </svg>

                                    <span className=" text-black text-xs lg:text-[16px] font-normal   ">4.9</span>
                                </div>

                                {/* Scores */}
                                <div className="flex justify-between gap-2 mt-5">
                                    {[
                                        { score: "4.8", label: "Claim" },
                                        { score: "4.9", label: "Service" },
                                        { score: "4.2", label: "Price" },
                                        { score: "4.2", label: "Cover" },
                                        { score: "4.2", label: "Digital" },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center "
                                        >
                                            <span className="bg-[#E9EAEB] rounded-md px-4 py-2.5 font-normal ">{item.score}</span>
                                            <span className=" font-thin lg:text-[16px] text-xs text-black mt-1">{item.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mt-8 lg:mt-16 mb-5 "></div>

                                {/* Footer */}
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-[#697079] lg:text-[16px] text-xs font-normal rounded border-gray-400" />
                                        Compare
                                    </label>

                                    <Link href={"/profile-details"} >
                                        <button className="flex items-center gap-x-2 lg:text-[16px] cursor-pointer text-sm text-[#D09A40] font-normal hover:underline">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>






                </div>



                <div className="space-y-4 overflow-x-auto ">
                    {currentItems.map((item, i) => (
                        <div
                            key={item.rank}
                            className="flex items-center justify-between bg-white border border-gray-300 rounded-xl p-4 shadow-lg"
                        >
                            {/* Left Section: Logo + Company Info */}
                            <div className="flex items-center ">
                                <div>
                                    <span className=' text-[#D09A40] lg:text-4xl text-lg font-bold ' >#{i + 1} </span>
                                </div>
                                <div className="    ">
                                    {/* <Image
                                        src="https://www.example.com/logo.png"
                                        alt="Company Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    /> */}

                                    <span className=' block ml-9  ' >
                                        <svg width="62" height="65" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_52_1682)">
                                                <rect width="62" height="64.7353" rx="5.47059" fill="#FAF5EC" />
                                                <path d="M47.1211 35.1501C47.1211 36.8209 46.8629 38.4288 46.3898 39.9412H29.5818L43.9444 25.5786C45.9407 28.2476 47.1211 31.561 47.1211 35.1501Z" fill="#F79F1E" />
                                                <path d="M20.2108 39.3033C20.2155 38.9298 20.0983 38.7569 19.7434 38.5495C19.4123 38.3561 19.0805 37.8631 19.0626 37.4871C18.988 35.9224 19.013 34.3517 19.0403 32.7839C19.0539 32.0005 19.4885 31.6114 20.2935 31.601C21.4515 31.586 22.6102 31.5791 23.7675 31.6101C24.0681 31.6182 24.3646 31.7797 24.663 31.8708C24.6619 31.9461 24.6606 32.0214 24.6594 32.0967C23.3317 32.5584 22.9583 33.5419 23.0051 34.8366C23.06 36.3546 22.9811 37.8776 23.0396 39.3953C23.0464 39.5707 23.0692 39.757 23.1077 39.9412H23.9228C23.8788 39.7429 23.8638 39.5006 23.8634 39.1897C23.8615 37.5987 23.8571 36.0076 23.8635 34.4167C23.8677 33.3584 24.306 32.9142 25.3489 32.9078C26.6023 32.9001 27.856 32.8974 29.1094 32.9076C30.115 32.9157 30.5548 33.3595 30.5609 34.3782C30.57 35.9044 30.5581 37.4308 30.5661 38.957L31.4069 38.1162C31.4068 37.0182 31.3816 35.9193 31.4211 34.8226C31.4678 33.5258 31.0794 32.5508 29.5443 32.017C30.0049 31.7967 30.2725 31.5643 30.5475 31.5551C31.7759 31.5144 33.0065 31.5209 34.2358 31.5435C34.9642 31.5569 35.3569 31.9369 35.3692 32.6717C35.3773 33.1586 35.3851 33.6457 35.3903 34.1328L43.9444 25.5787C41.0259 21.6728 36.3671 19.1471 31.1181 19.1471C24.8573 19.1471 19.4395 22.7449 16.8103 27.9837C15.7279 30.1402 15.1151 32.573 15.1151 35.1501C15.1151 36.821 15.3733 38.4288 15.8485 39.9412H20.2079C20.209 39.7286 20.2081 39.5159 20.2108 39.3033ZM32.4328 26.7318C33.6245 26.7427 34.5808 27.7094 34.5784 28.9009C34.5759 30.0884 33.6168 31.0662 32.4357 31.0851C31.2143 31.1047 30.23 30.1311 30.23 28.9033C30.23 27.6609 31.184 26.7204 32.4328 26.7318ZM27.2976 27.5223C28.6404 27.5585 29.6908 28.6768 29.6576 30.035C29.624 31.41 28.4711 32.4786 27.0898 32.4148C25.739 32.3525 24.7227 31.2353 24.7702 29.8651C24.8171 28.519 25.9319 27.4856 27.2976 27.5223ZM22.0598 26.8055C23.2581 26.8198 24.1971 27.7734 24.196 28.9746C24.1949 30.2202 23.2446 31.1571 21.9942 31.1455C20.7949 31.1344 19.8535 30.184 19.8505 28.9815C19.8475 27.7596 20.8312 26.7908 22.0598 26.8055Z" fill="#EB001B" />
                                                <path d="M14.5883 41.4013V40.4839H15.5125V41.4013H14.5883ZM14.5883 45.5191V41.9048H15.5125V45.5191H14.5883Z" fill="#414042" />
                                                <path d="M19.8786 45.5192H18.9543V43.4913C18.9543 43.2016 18.9037 42.9901 18.8026 42.8567C18.7014 42.7234 18.5612 42.6567 18.3818 42.6567C18.2898 42.6567 18.1956 42.6751 18.099 42.7119C18.0025 42.7487 17.9116 42.8005 17.8266 42.8671C17.7415 42.9338 17.6645 43.0131 17.5955 43.105C17.5266 43.197 17.4759 43.2982 17.4438 43.4085V45.5192H16.5195V41.9048H17.3541V42.5739C17.4874 42.3441 17.6805 42.1647 17.9335 42.0359C18.1863 41.9072 18.4715 41.8428 18.7888 41.8428C19.014 41.8428 19.198 41.8842 19.3406 41.9669C19.4831 42.0497 19.5934 42.1578 19.6717 42.2911C19.7498 42.4245 19.8038 42.5763 19.8338 42.7464C19.8636 42.9165 19.8786 43.089 19.8786 43.2637V45.5192Z" fill="#414042" />
                                                <path d="M22.2236 45.588C21.9201 45.588 21.6235 45.5398 21.3338 45.4432C21.0441 45.3466 20.7958 45.2086 20.5889 45.0293L20.9337 44.4499C21.1545 44.6063 21.3694 44.7247 21.5787 44.8051C21.7879 44.8856 21.9959 44.9258 22.2029 44.9258C22.3868 44.9258 22.5316 44.8914 22.6374 44.8224C22.7432 44.7534 22.7961 44.6546 22.7961 44.5258C22.7961 44.3971 22.734 44.3028 22.6099 44.243C22.4857 44.1833 22.2833 44.1143 22.0029 44.036C21.7684 43.9717 21.5684 43.9096 21.4028 43.8498C21.2373 43.7901 21.1039 43.7222 21.0028 43.6463C20.9016 43.5705 20.828 43.4832 20.782 43.3842C20.736 43.2854 20.7131 43.167 20.7131 43.029C20.7131 42.8451 20.7486 42.6796 20.82 42.5324C20.8912 42.3853 20.9912 42.26 21.12 42.1565C21.2487 42.053 21.3994 41.9737 21.5718 41.9185C21.7442 41.8634 21.9315 41.8358 22.1339 41.8358C22.4052 41.8358 22.6592 41.8748 22.8961 41.953C23.1329 42.0313 23.3501 42.1577 23.5479 42.3324L23.1755 42.8911C22.9915 42.7531 22.8134 42.6521 22.6409 42.5876C22.4684 42.5233 22.2971 42.491 22.127 42.491C21.9706 42.491 21.8396 42.5233 21.7339 42.5876C21.628 42.6521 21.5752 42.7555 21.5752 42.898C21.5752 42.9625 21.5878 43.0153 21.6132 43.0566C21.6384 43.098 21.6787 43.1349 21.7339 43.167C21.7891 43.1992 21.8615 43.2302 21.9512 43.2601C22.0408 43.29 22.1523 43.3211 22.2857 43.3532C22.5341 43.4177 22.7467 43.482 22.9237 43.5464C23.1007 43.6108 23.2456 43.6843 23.3583 43.767C23.4709 43.8498 23.5537 43.9453 23.6066 44.0533C23.6594 44.1614 23.6859 44.2913 23.6859 44.443C23.6859 44.7972 23.5549 45.0765 23.2928 45.2811C23.0306 45.4858 22.6742 45.588 22.2236 45.588Z" fill="#414042" />
                                                <path d="M25.562 45.5881C25.1895 45.5881 24.9068 45.4686 24.7136 45.2294C24.5205 44.9904 24.424 44.6363 24.424 44.1672V41.9048H25.3482V43.9672C25.3482 44.5236 25.5483 44.8018 25.9483 44.8018C26.1276 44.8018 26.3012 44.7478 26.4691 44.6397C26.6369 44.5317 26.7736 44.3673 26.8794 44.1466V41.9048H27.8037V44.457C27.8037 44.5535 27.8209 44.6225 27.8554 44.6639C27.8899 44.7052 27.9462 44.7283 28.0244 44.7328V45.5192C27.9324 45.5375 27.8554 45.549 27.7933 45.5536C27.7313 45.5582 27.6749 45.5605 27.6243 45.5605C27.4588 45.5605 27.3243 45.5226 27.2208 45.4467C27.1174 45.3708 27.0564 45.2663 27.0381 45.1329L27.0174 44.8432C26.8564 45.0915 26.6495 45.2777 26.3966 45.4019C26.1437 45.526 25.8655 45.5881 25.562 45.5881Z" fill="#414042" />
                                                <path d="M31.0452 42.7049C30.7647 42.7096 30.5141 42.7635 30.2934 42.867C30.0727 42.9705 29.914 43.1257 29.8174 43.3326V45.5191H28.8932V41.9048H29.7416V42.6773C29.8059 42.5531 29.8818 42.4417 29.9692 42.3427C30.0565 42.2439 30.1508 42.1577 30.252 42.0841C30.3531 42.0105 30.4555 41.9542 30.5589 41.9151C30.6624 41.8761 30.7624 41.8564 30.859 41.8564C30.9095 41.8564 30.9474 41.8564 30.9728 41.8564C30.998 41.8564 31.0221 41.8588 31.0452 41.8633L31.0452 42.7049Z" fill="#414042" />
                                                <path d="M32.6735 45.5881C32.4987 45.5881 32.3356 45.5594 32.1838 45.5019C32.032 45.4445 31.901 45.364 31.7906 45.2605C31.6803 45.1571 31.594 45.0363 31.532 44.8984C31.4699 44.7604 31.4388 44.6087 31.4388 44.4432C31.4388 44.2731 31.4768 44.1155 31.5526 43.9707C31.6285 43.8258 31.7342 43.7028 31.87 43.6017C32.0055 43.5006 32.1676 43.4212 32.3563 43.3637C32.5447 43.3062 32.7517 43.2775 32.977 43.2775C33.1379 43.2775 33.2953 43.2913 33.4495 43.3189C33.6035 43.3464 33.7403 43.3856 33.8599 43.4362V43.2292C33.8599 42.9902 33.792 42.8062 33.6564 42.6774C33.5207 42.5487 33.3194 42.4843 33.0529 42.4843C32.8597 42.4843 32.6711 42.5187 32.4872 42.5877C32.3032 42.6567 32.1148 42.7579 31.9217 42.8912L31.6389 42.3049C32.1033 41.9969 32.6046 41.8428 33.1426 41.8428C33.6621 41.8428 34.0656 41.9704 34.353 42.2256C34.6403 42.4808 34.7841 42.8498 34.7841 43.3326V44.457C34.7841 44.5535 34.8014 44.6225 34.8359 44.6639C34.8703 44.7052 34.9267 44.7283 35.0048 44.7328V45.5192C34.8485 45.5513 34.7128 45.5674 34.5979 45.5674C34.4231 45.5674 34.2886 45.5283 34.1944 45.4502C34.1001 45.3721 34.0415 45.2686 34.0185 45.1398L33.9978 44.9397C33.8368 45.1513 33.6415 45.3122 33.4115 45.4226C33.1816 45.5329 32.9357 45.5881 32.6735 45.5881ZM32.9357 44.9122C33.0919 44.9122 33.2402 44.8846 33.3805 44.8294C33.5207 44.7742 33.6299 44.7007 33.7081 44.6087C33.8093 44.5305 33.8599 44.4431 33.8599 44.3466V43.9327C33.7495 43.8913 33.6299 43.858 33.5013 43.8327C33.3725 43.8075 33.2483 43.7948 33.1288 43.7948C32.8896 43.7948 32.6942 43.8488 32.5425 43.9568C32.3907 44.0649 32.3149 44.2017 32.3149 44.3672C32.3149 44.5236 32.3745 44.6535 32.4942 44.7569C32.6137 44.8604 32.7608 44.9122 32.9357 44.9122Z" fill="#414042" />
                                                <path d="M39.1776 45.5192H38.2533V43.4913C38.2533 43.2016 38.2027 42.9901 38.1015 42.8567C38.0004 42.7234 37.8602 42.6567 37.6808 42.6567C37.5888 42.6567 37.4946 42.6751 37.398 42.7119C37.3014 42.7487 37.2106 42.8005 37.1256 42.8671C37.0405 42.9338 36.9635 43.0131 36.8945 43.105C36.8255 43.197 36.7749 43.2982 36.7427 43.4085V45.5192H35.8185V41.9048H36.6531V42.5739C36.7864 42.3441 36.9795 42.1647 37.2325 42.0359C37.4853 41.9072 37.7705 41.8428 38.0877 41.8428C38.313 41.8428 38.497 41.8842 38.6395 41.9669C38.782 42.0497 38.8924 42.1578 38.9706 42.2911C39.0488 42.4245 39.1028 42.5763 39.1327 42.7464C39.1626 42.9165 39.1775 43.089 39.1775 43.2637L39.1776 45.5192Z" fill="#414042" />
                                                <path d="M39.9292 43.712C39.9292 43.4591 39.9729 43.22 40.0603 42.9946C40.1475 42.7694 40.2741 42.5716 40.4397 42.4015C40.6052 42.2314 40.8052 42.0957 41.0398 41.9945C41.2742 41.8934 41.5386 41.8428 41.8329 41.8428C42.2283 41.8428 42.5652 41.9279 42.8434 42.098C43.1216 42.2681 43.3297 42.4911 43.4676 42.767L42.5641 43.043C42.4858 42.9096 42.3823 42.8074 42.2537 42.736C42.1248 42.6648 41.9823 42.6291 41.826 42.6291C41.6926 42.6291 41.5685 42.6557 41.4535 42.7085C41.3385 42.7614 41.2385 42.835 41.1535 42.9292C41.0683 43.0235 41.0017 43.1373 40.9534 43.2706C40.9052 43.404 40.881 43.5512 40.881 43.7121C40.881 43.8731 40.9063 44.0202 40.9569 44.1535C41.0074 44.287 41.0753 44.4018 41.1604 44.4984C41.2454 44.5949 41.3454 44.6697 41.4604 44.7226C41.5753 44.7755 41.6972 44.8019 41.8261 44.8019C41.9916 44.8019 42.1444 44.7605 42.2847 44.6777C42.4249 44.5949 42.5227 44.4939 42.5778 44.3742L43.4814 44.6501C43.3573 44.926 43.1526 45.1514 42.8675 45.3261C42.5824 45.5009 42.2399 45.5882 41.8398 45.5882C41.5454 45.5882 41.2811 45.5376 41.0466 45.4365C40.8121 45.3354 40.612 45.1985 40.4465 45.0261C40.2809 44.8537 40.1534 44.6536 40.0636 44.426C39.9741 44.1982 39.9292 43.9603 39.9292 43.712Z" fill="#414042" />
                                                <path d="M45.8615 45.5881C45.5718 45.5881 45.3097 45.5387 45.0752 45.4398C44.8406 45.341 44.6406 45.2065 44.4751 45.0363C44.3095 44.8663 44.182 44.6685 44.0923 44.4432C44.0025 44.2179 43.9578 43.9811 43.9578 43.7327C43.9578 43.4752 44.0014 43.2326 44.0888 43.005C44.1761 42.7774 44.3026 42.5774 44.4681 42.4049C44.6337 42.2325 44.8348 42.0957 45.0717 41.9945C45.3085 41.8934 45.574 41.8428 45.8683 41.8428C46.1626 41.8428 46.4258 41.8934 46.6581 41.9945C46.8903 42.0957 47.088 42.2314 47.2513 42.4015C47.4145 42.5716 47.5387 42.7694 47.6238 42.9946C47.7088 43.22 47.7513 43.4545 47.7513 43.6982C47.7513 43.758 47.7502 43.8155 47.7479 43.8707C47.7456 43.9258 47.7398 43.9719 47.7307 44.0086H44.9372C44.951 44.1512 44.9854 44.2776 45.0407 44.388C45.0958 44.4983 45.1671 44.5926 45.2545 44.6708C45.3417 44.749 45.4407 44.8087 45.5511 44.8501C45.6615 44.8915 45.7762 44.9122 45.8959 44.9122C46.0798 44.9122 46.2534 44.8674 46.4167 44.7777C46.5799 44.688 46.6914 44.5697 46.7512 44.4224L47.5444 44.6432C47.411 44.9191 47.1984 45.1456 46.9064 45.3226C46.6143 45.4997 46.2661 45.5881 45.8615 45.5881ZM46.7995 43.4085C46.7765 43.1373 46.6764 42.92 46.4995 42.7567C46.3224 42.5935 46.1074 42.5119 45.8545 42.5119C45.7304 42.5119 45.6142 42.5337 45.5063 42.5774C45.3982 42.6212 45.3028 42.6821 45.22 42.7602C45.1372 42.8385 45.0693 42.9326 45.0165 43.043C44.9636 43.1533 44.9326 43.2752 44.9234 43.4086L46.7995 43.4085Z" fill="#414042" />
                                            </g>
                                            <rect x="0.455882" y="0.455882" width="61.0882" height="63.8235" rx="5.01471" stroke="#E9D1A7" stroke-width="0.911765" />
                                            <defs>
                                                <clipPath id="clip0_52_1682">
                                                    <rect width="62" height="64.7353" rx="5.47059" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>

                                </div>

                                <div>
                                    <p className="font-normal lg:text-xl text-sm text-black ml-6   ">{` ${item.company}`}</p>

                                </div>
                                <div className="flex flex-col space-y-1 ml-12 ">
                                    <span className=" lg:text-4xl text-2xl font-bold ">{item.overall}</span>
                                    <span className=" text-center lg:text-xl text-sm font-thin  ">Overall</span>
                                </div>
                                <div className="flex flex-col space-y-1 ml-12 ">
                                    <span className=" px-5 py-2 bg-[#E9EAEB] rounded-[9px] font-normal text-sm lg:text-xl ">{item.claim}</span>
                                    <span className="text-center lg:text-xl text-sm font-thin text-black ">Claim</span>
                                </div>
                                <div className="flex flex-col space-y-1 ml-8 ">
                                    <span className="px-5 py-2 bg-[#E9EAEB] rounded-[9px] font-normal text-sm lg:text-xl ">{item.service}</span>
                                    <span className="text-center lg:text-xl text-sm font-thin text-black ">Service</span>
                                </div>
                                <div className="flex flex-col space-y-1 ml-8 ">
                                    <span className="px-5 py-2 bg-[#E9EAEB] rounded-[9px] font-normal text-sm lg:text-xl ">{item.price}</span>
                                    <span className="text-center lg:text-xl text-sm font-thin text-black ">Price</span>
                                </div>
                                <div className="flex flex-col space-y-1 ml-8">
                                    <span className="px-5 py-2 bg-[#E9EAEB] rounded-[9px] font-normal text-sm lg:text-xl">{item.cover}</span>
                                    <span className="text-center lg:text-xl text-sm font-thin text-black ">Cover</span>
                                </div>
                                <div className="flex flex-col space-y-1 ml-8">
                                    <span className=" px-5 py-2 bg-[#E9EAEB] rounded-[9px] font-normal text-sm lg:text-xl ">{item.digital}</span>
                                    <span className="text-center lg:text-xl text-sm font-thin text-black ">Digital</span>
                                </div>
                                <div>
                                    <p className=" text-[#529F22] font-bold lg:text-2xl text-[15px] ml-8 ">{item.priceValue}</p>
                                </div>
                                <div className=' ml-5 ' >
                                    <button className="px-2.5 py-2 bg-[#D09A40] text-white rounded-[20px] w-full  ">
                                        View Profile
                                    </button>
                                </div>
                                <div className=' ml-7 flex items-center gap-x-3  ' >
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-2xl cursor-pointer "
                                        style={{ accentColor: '#D09A40' }}
                                    // Optional: onChange handler
                                    />
                                    <button className=" text-[#697079] font-normal  cursor-pointer ">
                                        Compare
                                    </button>
                                </div>


                            </div>

                        </div>
                    ))}
                </div>


                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-3 mt-7 lg:mt-16">
                    <button
                        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-[#D09A40] text-white" : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>













            </div>
        </div>
    )
}

export default RankingInsurance