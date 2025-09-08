// app/components/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import MaxWidth from "../max-width/MaxWidth";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="">
            <MaxWidth>
                <div className=" flex flex-row items-start justify-between pt-10 pb-16 mx-auto ">

                    {/* Logo + Description */}
                    <div className=" " >
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="  " >
                                <Image
                                    src="/images/footer/footer-1.png"
                                    width={1000}
                                    height={500}
                                    className="w-[200px] md:w-[260px] lg:w-[349px]   "
                                    alt="logo"
                                    priority
                                />
                            </Link>
                        </div>
                        <p className=" ml-6 mt-5 footerTextColor text-xl ">
                            Transparent insurance reviews powered <br />
                            by our community of real customers.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className=" text-xl font-normal text-[#000000] mb-4  ">Company</h3>
                        <ul className="space-y-2 footerTextColor text-xl " >
                            <li><Link href="#">About US</Link></li>
                            <li><Link href="#">Methodology</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xl font-normal text-[#000000] mb-4 ">Legal</h3>
                        <ul className="space-y-2 footerTextColor text-xl " >
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms of Service</Link></li>
                            <li><Link href="#">Community Guidelines</Link></li>
                            <li><Link href="#">Accessibility Statement</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className=" max-w-[217px] " >
                        <h3 className="text-xl font-normal text-[#000000] mb-4 ">Connect</h3>
                        <div className="flex space-x-4 text-xl text-gray-600">
                            <Link href="#"><FaFacebook /></Link>
                            <Link href="#"><FaInstagram /></Link>
                            <Link href="#"><FaXTwitter /></Link>
                            <Link href="#"><FaLinkedin /></Link>
                        </div>
                        <p className="mt-4 text-[16px] text-[#000000]">
                            © 2023 CoverageGrader. All rights reserved.
                        </p>

                    </div>

                </div>
            </MaxWidth>
        </footer>
    );
}
