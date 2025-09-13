"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MaxWidth from "../max-width/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get current URL path
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "", id: "home", href: "/" },
    { name: "Rankings", id: "rankings", href: "/rankings" },
    { name: "Providers", id: "providers", href: "/providers" },
    { name: "Policies", id: "policies", href: "/policies" },
    { name: "Blog", id: "blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 bg-[#FFFFFF] z-50 border-b-[2px]">
      <MaxWidth>
        <div className="flex items-center justify-between gap-x-7 py-1">
          {/* Logo */}
          <div className="font-bold text-xl">
            <Link href="/">
              <Image
                src="/images/logo/logo-1.png"
                width={1000}
                height={1000}
                className="w-[200px] md:w-[260px] lg:w-[349px]"
                alt="logo"
                priority
              />
            </Link>
          </div>

          {/* Nav menu (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative pb-2 cursor-pointer text-xl font-normal transition-colors duration-200 ${isActive ? "text-[#D09A40] font-semibold" : "text-black"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[4px] bg-[#D09A40]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* About & Join buttons */}
          <div className="flex flex-row gap-x-8">

            <div className="hidden md:block">
              <Link href="/auth/login">
                <button className="px-6 py-2 text-black border border-[#B5B5B5] rounded-[34px]  text-xl font-normal cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
              <Link href="/auth/sign-up">
                <button className="px-6 py-2 text-white rounded-[34px] bg-[#D09A40] text-xl font-normal cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </MaxWidth>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-left text-gray-700 hover:text-black transition ${isActive ? "font-bold text-black" : ""
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/join">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Join
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </div>
  );
};

export default Navbar;
