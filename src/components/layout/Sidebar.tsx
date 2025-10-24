// components/layout/Sidebar.jsx
import * as React from "react";
import RightIcon from "../../assets/icons/rightIcon.svg";
// @ts-ignore: allow importing image without type declaration
import Logo from "../../assets/images/Logo.jpeg";
import data from "../../data/sidebar-nav-items";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";



// components/layout/Sidebar.jsx
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    //   const location = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const menuItems = data();



    return (
        <div className="flex">
            {/* Toggle button */}
            <div
                className="absolute top-[86px] z-50 transition-all duration-300 ease-in-out"
                style={{ left: isOpen ? "348px" : "80px", }}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-[#FFFFFF] rounded-[50%] shadow-md transition-all duration-300 ease-in-out"
                    style={{ border: "0.5px solid #943A09" }}
                >
                    <img src={RightIcon} alt="Toggle Icon" />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed lg:static top-0 left-0 bg-[#F0E6E6] border-r shadow-lg flex flex-col mt-2 ml-4 transition-all duration-300 ease-in-out
          ${isOpen ? "w-[348px]" : "w-[80px]"
                    } h-auto overflow-y-auto hide-scrollbar backdrop-blur-xs drop-shadow-md rounded-tl-[28px] rounded-tr-[28px]
        `}
            >
                <div
                    className={`flex items-center gap-2 px-4 pb-6 pt-[66px] transition-all duration-300 ease-in-out
          }`}
                >
                    <img
                        src={Logo}
                        alt="Unicsi Logo"
                        className="w-12 h-12 rounded-full inline-block mr-2"
                    />
                    <span
                        className={`text-xl font-bold text-[#000000] whitespace-nowrap transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 hidden"
                            }`}
                    >
                        UNICSI
                    </span>
                </div>

                <nav className="flex-1 px-2 space-y-1">
                    {menuItems.map((item, idx) => (
                        <NavLink key={idx} to={item.to} className={({ isActive }) =>
                            `flex items-center gap-4 px-4 py-3 mb-2 cursor-pointer ${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}`
                        }>
                            {item.icon}
                            <span className={`${isOpen ? "inline" : "hidden"} text-[16px] font-medium leading-[100%] `}>
                                {item.title}
                            </span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </div>
    );
}
