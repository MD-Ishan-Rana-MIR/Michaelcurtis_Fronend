"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Bell } from "lucide-react";

const AdminNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-full bg-[#FAF5EC]  px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            {/* Left side */}
            <div className=" ml-6 " >
                <h1 className=" lg:text-3xl text-xl font-medium text-[#000000]  ">
                    Dashboard Overview
                </h1>
                <p className=" text-xl font-normal mt-3 " >
                    Welcome to CoverageGrader Admin Panel
                </p>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-6 relative">
                {/* Notification Icon */}
                <button className="relative">
                    <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0C11.2152 0 8.54453 1.10625 6.5754 3.07538C4.60626 5.04451 3.50002 7.71523 3.50002 10.5V15.792C3.50023 16.0247 3.44631 16.2542 3.34252 16.4625L0.767018 21.612C0.641207 21.8636 0.581801 22.1431 0.59444 22.4241C0.60708 22.7051 0.691346 22.9782 0.839235 23.2175C0.987124 23.4568 1.19373 23.6543 1.43942 23.7912C1.68511 23.9282 1.96173 24 2.24302 24H25.757C26.0383 24 26.3149 23.9282 26.5606 23.7912C26.8063 23.6543 27.0129 23.4568 27.1608 23.2175C27.3087 22.9782 27.393 22.7051 27.4056 22.4241C27.4182 22.1431 27.3588 21.8636 27.233 21.612L24.659 16.4625C24.5547 16.2544 24.5003 16.0248 24.5 15.792V10.5C24.5 7.71523 23.3938 5.04451 21.4246 3.07538C19.4555 1.10625 16.7848 0 14 0ZM14 28.5C13.069 28.5005 12.1608 28.2122 11.4005 27.6749C10.6403 27.1376 10.0653 26.3777 9.75502 25.5H18.245C17.9347 26.3777 17.3598 27.1376 16.5995 27.6749C15.8392 28.2122 14.931 28.5005 14 28.5Z" fill="#1E1E1E" />
                    </svg>

                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        3
                    </span>
                </button>

                {/* Profile Image */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300"
                    >
                        <Image
                            src="/images/admin.jpg" // place your admin image in public/images
                            alt="Admin"
                            width={500}
                            height={500}
                            className="object-cover w-[68px] h-[68px] cursor-pointer "
                        />
                    </button>

                    {/* Dropdown */}
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <ul className="py-2 text-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
