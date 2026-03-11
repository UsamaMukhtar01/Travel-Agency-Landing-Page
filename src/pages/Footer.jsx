import { Link } from "react-router-dom";
import { FacebookIcon, FooterLogo, GooglePlayButton, InstagramIcon, TwitterIcon } from "../assets/svgs";

const Footer = () => {
    const footerLinks = [
        {
            heading: "Company",
            links: [
                {
                    name: "About",
                    path: "/about"
                },
                {
                    name: "Careers",
                    path: "/careers"
                },
                {
                    name: "Mobile",
                    path: "/mobile"
                },
            ]
        },
        {
            heading: "Contact",
            links: [
                {
                    name: "Help/FAQ",
                    path: "/help"
                },
                {
                    name: "Press",
                    path: "/press"
                },
                {
                    name: "Affiliates",
                    path: "/affiliates"
                }
            ]
        },
        {
            heading: "More",
            links: [
                {
                    name: "Airlinefees",
                    path: "/airlinefees"
                },
                {
                    name: "Airline",
                    path: "/airline"
                },
                {
                    name: "Low fare tips",
                    path: "/low-fare-tips"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col gap-2 justify-between items-start md:items-center mt-[40px] lg:mt-[105px] mb-[50px] px-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-between w-full">
                <div className="">
                    <FooterLogo />
                    <span className="text-[13px] text-[#5E6282] font-[poppins] font-[400]">
                        Book your trip in minute, get full Control for much longer.
                    </span>
                </div>
                <div className="flex flex-col md:flex-row gap-6 lg:gap-18 w-full justify-between items-start">
                    {footerLinks.map((item, index) => (
                        <div key={index} className="">
                            <h1 className="text-[21px] text-start text-[#080809] font-[poppins] font-[700]">
                                {item.heading}
                            </h1>
                            {item.links.map((link, index) => (
                                <Link key={index} to={link.path} className="block text-[18px] text-start text-[#5E6282] font-[poppins] font-[400]">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 justify-beween ite-center">
                    <div className="flex flex-row">
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </div>
                    <span className="text-[20px] text-[#5E6282] font-[poppins] font-[400] text-start w-full mb-1">
                        Discover our app
                    </span>
                    <div className="flex flex-row gap-2">
                        <GooglePlayButton />
                        <GooglePlayButton />
                    </div>
                </div>
            </div>
            <p className="text-[14px] text-[#080809] font-[poppins] font-[400] text-center w-full">
                All rights reserved@jadoo.co
            </p>
        </div>
    )
}

export default Footer;