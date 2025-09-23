import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type PolicyViewProps = {
    policyViewModal: boolean;
    setPolicyViewModal: React.Dispatch<React.SetStateAction<boolean>>;
    policyId: number | undefined
};

const PolicyView: React.FC<PolicyViewProps> = ({
    policyViewModal,
    setPolicyViewModal,
    policyId
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLButtonElement>(null);
    const [showModal, setShowModal] = useState(false);

    // Open animation
    useEffect(() => {
        if (policyViewModal) {
            const timer = setTimeout(() => setShowModal(true), 50);
            return () => clearTimeout(timer);
        }
    }, [policyViewModal]);

    // Close modal
    const handleClose = React.useCallback(() => {
        setShowModal(false);
        setTimeout(() => setPolicyViewModal(false), 500);
    }, [setPolicyViewModal]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                handleClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClose]);

    // Close on ESC and handle focus trap
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();

            if (e.key === "Tab" && modalRef.current) {
                const focusableEls = modalRef.current.querySelectorAll(
                    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );
                const firstEl = focusableEls[0] as HTMLElement;
                const lastEl = focusableEls[focusableEls.length - 1] as HTMLElement;

                if (!e.shiftKey && document.activeElement === lastEl) {
                    firstEl.focus();
                    e.preventDefault();
                } else if (e.shiftKey && document.activeElement === firstEl) {
                    lastEl.focus();
                    e.preventDefault();
                }
            }
        };

        if (policyViewModal) {
            document.addEventListener("keydown", handleKeyDown);
            // Focus first button
            setTimeout(() => firstFocusableRef.current?.focus(), 100);
        }
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [policyViewModal, handleClose]);

    const [active, setActive] = useState(true); // true = Active, false = Inactive



















    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0  bg-opacity-50 transition-opacity duration-500 ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={handleClose}
            />

            {/* Modal */}
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                className={`fixed top-10 left-1/2 transform -translate-x-1/2 max-w-3xl w-full mx-4 bg-white shadow-lg rounded-lg pt-12 pb-6 px-12 transition-all duration-500 ease-out
          ${showModal ? "translate-y-20 opacity-100 scale-100" : "-translate-y-40 opacity-0 scale-95"}`}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    ref={firstFocusableRef}
                    className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="flex items-center h-24 w-40 gap-x-7">
                    <Image
                        src="/images/policy/car.svg"
                        width={127}
                        height={45}
                        alt="Car"
                    />
                    <h1 className="text-center text-[#000000] text-4xl font-normal">
                        Auto Insurance
                    </h1>
                </div>

                {/* Status Switch */}
                <div className="mt-8 flex items-center gap-x-10">
                    <h1 className="text-lg font-normal text-[#000000]">Status</h1>
                    <div
                        onClick={() => {
                            setActive(!active);

                        }}
                        className={`relative w-[67px] h-[26px] rounded-full cursor-pointer transition-colors ${active ? "bg-[#45E03C]" : "bg-gray-400"
                            }`}
                    >
                        {/* Circle */}
                        <div
                            className={`absolute top-1/2 -translate-y-1/2 w-[19px] h-[19px] rounded-full bg-white shadow-md transition-all duration-300 ${active ? "right-1" : "left-1"
                                }`}
                        ></div>

                    </div>
                    <span
                        className={`text-sm font-medium ${active ? "text-green-600" : "text-red-500"
                            }`}
                    >
                        {active ? "active" : "inactive"}
                    </span>
                </div>

                {/* Content */}
                <div className="border border-[#989DA3] rounded-[9px] py-4 px-9 mt-7">
                    <h1 className="text-3xl font-normal">What is Auto Insurance?</h1>
                    <p className="text-lg font-thin mt-2">
                        Auto insurance is a contract between you and an insurance company that protects you against financial loss in the event of an accident or theft. In exchange for your paying a premium, the insurance company agrees to pay your losses as outlined in your policy. It&apos;s designed to cover costs related to property damage, medical bills for injuries, and legal liabilities.
                    </p>

                    <h1 className="text-3xl font-normal mt-4">What&apos;s Covered (and What&apos;s Not)?</h1>
                    <p className="text-lg font-thin mt-2">
                        Standard auto policies are typically bundled with several types of coverage:
                    </p>
                    <ul className="font-thin list-disc ml-6 mt-2">
                        <li>
                            Liability Coverage: Pays for bodily injury and property damage you cause to others. This is required in most states.
                        </li>
                        <li>
                            Collision Coverage: Pays for damage to your car resulting from a collision with another vehicle or object.
                        </li>
                        <li>
                            Comprehensive Coverage: Covers damage to your car from non-collision events like theft, fire, or weather.
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-8">
                    <button
                        onClick={handleClose}
                        className="flex items-center space-x-2 px-8 cursor-pointer py-3 text-[#D09A40] rounded-[36px] border border-[#D09A40] transition"
                    >
                        Cancel
                    </button>
                    <button className="px-8 cursor-pointer py-3 bg-[#D09A40] text-white rounded-[36px] hover:bg-[#b8802f] transition">
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default PolicyView;
