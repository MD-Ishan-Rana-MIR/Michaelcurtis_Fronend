"use client";

import React from "react";
import MaxWidth from "@/app/components/max-width/MaxWidth";
import { InsuranceCard, Insurer } from "@/app/components/home/InsuranceCard";

const TopInsurance = () => {
    const insurers: Insurer[] = [
        {
            id: 1,
            name: "Liberty Mutual",
            logoUrl: "/logos/insurance.png",
            priceUSD: 450,
            rating: 4.8,
            profileHref: "#",
            claims: 4.5,
            service: 4.5,
            pricing: 4.5,
            coverage: 4.5,
            digitalTools: 4.5,
        },
        {
            id: 2,
            name: "GEICO",
            logoUrl: "/logos/insurance.png",
            priceUSD: 420,
            rating: 4.6,
            profileHref: "#",
            claims: 4.2,
            service: 4.4,
            pricing: 4.7,
            coverage: 4.3,
            digitalTools: 4.6,
        },
        {
            id: 3,
            name: "State Farm",
            logoUrl: "/logos/insurance.png",
            priceUSD: 470,
            rating: 4.7,
            profileHref: "#",
            claims: 4.6,
            service: 4.7,
            pricing: 4.4,
            coverage: 4.6,
            digitalTools: 4.3,
        },
        {
            id: 4,
            name: "Progressive",
            logoUrl: "/logos/insurance.png",
            priceUSD: 430,
            rating: 4.5,
            profileHref: "#",
            claims: 4.3,
            service: 4.4,
            pricing: 4.6,
            coverage: 4.2,
            digitalTools: 4.7,
        },
        // extras for "View more"
        {
            id: 5,
            name: "AAA",
            logoUrl: "/logos/insurance.png",
            priceUSD: 455,
            rating: 4.4,
            profileHref: "#",
            claims: 4.2,
            service: 4.4,
            pricing: 4.5,
            coverage: 4.3,
            digitalTools: 4.1,
        },
        {
            id: 6,
            name: "Allstate",
            logoUrl: "/logos/insurance.png",
            priceUSD: 465,
            rating: 4.3,
            profileHref: "#",
            claims: 4.1,
            service: 4.2,
            pricing: 4.4,
            coverage: 4.5,
            digitalTools: 4.2,
        },
        {
            id: 7,
            name: "USAA",
            logoUrl: "/logos/insurance.png",
            priceUSD: 440,
            rating: 4.9,
            profileHref: "#",
            claims: 4.8,
            service: 4.9,
            pricing: 4.6,
            coverage: 4.7,
            digitalTools: 4.6,
        },
        {
            id: 8,
            name: "Nationwide",
            logoUrl: "/logos/insurance.png",
            priceUSD: 475,
            rating: 4.2,
            profileHref: "#",
            claims: 4.0,
            service: 4.2,
            pricing: 4.3,
            coverage: 4.4,
            digitalTools: 4.1,
        },
    ];

    const [showAll, setShowAll] = React.useState(false);
    const visible = showAll ? insurers : insurers.slice(0, 4);

    return (
        <div className="pb-6 lg:pb-11">
            <MaxWidth>
                <div>
                    <h1 className="text-center font-medium text-2xl lg:text-4xl">Top Insurance Providers</h1>
                    <p className="text-center text-lg lg:text-xl font-light mt-2 lg:mt-3 text-black">
                        Based on community ratings and reviews
                    </p>
                </div>

                <div className="mt-9">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        {visible.map((insurer) => (
                            <InsuranceCard key={insurer.id} data={insurer} />
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                        {!showAll ? (
                            <button onClick={() => setShowAll(true)} className="  cursor-pointer border border-[#D09A40] py-3 px-6 rounded-[26px] text-[#D09A40] font-medium ">
                                View All Providers
                            </button>
                        ) : (
                            <button onClick={() => setShowAll(false)} className=" cursor-pointer  border border-[#D09A40] py-3 px-6 rounded-[26px] text-[#D09A40] font-medium ">
                                Show less
                            </button>
                        )}
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default TopInsurance;
