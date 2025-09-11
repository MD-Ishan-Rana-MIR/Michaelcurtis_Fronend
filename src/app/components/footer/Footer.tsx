// app/components/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import MaxWidth from "../max-width/MaxWidth";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="lg:mt-10 mt-5">
            <MaxWidth>
                <div className="flex flex-wrap justify-between gap-x-8 ">

                    {/* Logo + Description */}
                    <div className="flex-1 min-w-[200px] md:min-w-[250px] lg:min-w-[350px]">
                        <Link href="/">
                            <Image
                                src="/images/footer/footer-1.png"
                                width={349}
                                height={100}
                                className="w-[200px] md:w-[260px] lg:w-[349px]"
                                alt="logo"
                                priority
                            />
                        </Link>
                        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg  leading-relaxed">
                            Transparent insurance reviews powered <br />
                            by our community of real customers.
                        </p>
                    </div>

                    {/* Company */}
                    <div className="flex-1 min-w-[120px]">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Methodology</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="flex-1 min-w-[150px]">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms of Service</Link></li>
                            <li><Link href="#">Community Guidelines</Link></li>
                            <li><Link href="#">Accessibility Statement</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="flex-1 min-w-[180px]">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Connect</h3>
                        <div className="flex space-x-4 text-xl text-gray-600 mb-4">
                            <Link href="#"><FaFacebook /></Link>
                            <Link href="#"><FaInstagram /></Link>
                            <Link href="#"><FaXTwitter /></Link>
                            <Link href="#"><FaLinkedin /></Link>
                        </div>
                        <p className="text-sm sm:text-base text-gray-900">
                            © 2023 CoverageGrader. All rights reserved.
                        </p>
                    </div>

                </div>
            </MaxWidth>
        </footer>
    );
}
