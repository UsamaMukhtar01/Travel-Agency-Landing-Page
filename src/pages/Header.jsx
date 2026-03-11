import { useState } from 'react';
import logo from '../../src/assets/Logo.svg'
import dropdownIcon from '../assets/Vector1.svg'


const Header = () => {
    const [language, setLanguage] = useState("en");
    const [menuOpen, setMenuOpen] = useState(false);

    const headerLabels = [
        { link: 'desitnations', label: 'Desitnations' },
        { link: 'hotels', label: 'Hotels' },
        { link: 'flights', label: 'Flights' },
        { link: 'bookings', label: 'Bookings' }
    ]

    const languages = [
        { code: "en", label: "English", short: "EN" },
        { code: "es", label: "Spanish", short: "ES" },
        { code: "fr", label: "French", short: "FR" },
    ];

    return (
        <header className="flex items-center justify-between h-[40px] w-full mt-[47px]">
            <img src={logo} alt="Logo" />
            {/* Hamburger */}
            <button
                className="lg:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            <nav className={`absolute lg:static top-[80px] left-0 w-full lg:w-auto
         bg-white lg:bg-transparent flex flex-col lg:flex-row
         items-center gap-8 lg:gap-12 p-6 lg:p-0
         ${menuOpen ? "flex" : "hidden"} lg:flex`}>
                <div className='flex gap-12 text-[#212832] text-[17px] font-[Google Sans] font-[400]'>
                    {headerLabels.map((item) => {
                        return (
                            <a href={item.link}>{item.label}</a>
                        )
                    })}
                </div>
                <div className='flex gap-12 text-[#212832] text-[17px] font-[Google Sans] font-[500]'>
                    <button className="">
                        Login
                    </button>
                    <button className="border-1 rounded-[5px] px-4 py-1.5">
                        Sign up
                    </button>
                    <div className="relative flex items-center">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="appearance-none pr-6 bg-transparent"
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.short}
                                </option>
                            ))}
                        </select>
                        <img
                            src={dropdownIcon}
                            alt="dropdown"
                            className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;


// import { useState } from "react";
// import logo from "../../src/assets/Logo.svg";
// import dropdownIcon from "../assets/Vector1.svg";

// const Header = () => {
//   const [language, setLanguage] = useState("en");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const headerLabels = [
//     { link: "desitnations", label: "Desitnations" },
//     { link: "hotels", label: "Hotels" },
//     { link: "flights", label: "Flights" },
//     { link: "bookings", label: "Bookings" },
//   ];

//   const languages = [
//     { code: "en", label: "English", short: "EN" },
//     { code: "es", label: "Spanish", short: "ES" },
//     { code: "fr", label: "French", short: "FR" },
//   ];

//   return (
//     <header className="w-full px-6 lg:px-20 py-6 flex items-center justify-between">

//       {/* Logo */}
//       <img src={logo} alt="Logo" />

//       {/* Hamburger */}
//       <button
//         className="lg:hidden text-2xl"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         ☰
//       </button>

//       {/* Navigation */}
//       <nav
//         className={`absolute lg:static top-[80px] left-0 w-full lg:w-auto
//         bg-white lg:bg-transparent flex flex-col lg:flex-row
//         items-center gap-8 lg:gap-12 p-6 lg:p-0
//         ${menuOpen ? "flex" : "hidden"} lg:flex`}
//       >

//         {/* Links */}
//         <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-[#212832] text-[17px] font-[Google Sans]">

//           {headerLabels.map((item) => (
//             <a key={item.link} href={item.link}>
//               {item.label}
//             </a>
//           ))}

//         </div>

//         {/* Actions */}
//         <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 text-[#212832] text-[17px] font-[Google Sans] font-[500]">

//           <button>Login</button>

//           <button className="border rounded-[5px] px-4 py-1.5">
//             Sign up
//           </button>

//           {/* Language Selector */}
//           <div className="relative flex items-center">
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="appearance-none pr-6 bg-transparent"
//             >
//               {languages.map((lang) => (
//                 <option key={lang.code} value={lang.code}>
//                   {lang.short}
//                 </option>
//               ))}
//             </select>

//             <img
//               src={dropdownIcon}
//               alt="dropdown"
//               className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
//             />
//           </div>

//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;