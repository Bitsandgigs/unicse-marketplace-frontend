// components/layout/TopBar.jsx
import * as React from "react"
import notificationIcon from "../../assets/icons/ic_notifications.svg";
import { Bell, HelpCircle, Search } from "lucide-react";
import { CameraIcon, SearchIcon } from "../../assets/svg/index";
import { Button } from "@/components/ui/button"
// import rightIcon from "../../assets/icons/rightIcon.svg"

export default function Header() {
  return (
    <header
      className="flex items-center justify-end bg-[] pl-4 mr-6 pr-8 py-8 my-4 mb-10 h-[91px] shadow-lg relative"
      style={{ borderRadius: "20px", border : "0.2px solid #00000040" }}
    >


      <div className="absolute inset-0 flex items-center justify-start pointer-events-none left-2 pl-2">
      <div className="flex items-center gap-2 mr-6">
        <h1 className="text-lg font-bold text-[18px] leading-[120%]">Manage Products</h1>
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.9375 9.91195L8.15841 6.69104C8.5388 6.31065 8.5388 5.68821 8.15841 5.30783L4.9375 2.08691"
            stroke="#0A0502"
            stroke-width="1.11151"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
        
      </div>

      {/* Search */}
      <div className="flex items-center w-full max-w-[445px] h-[52px] rounded-full shadow-sm px-4 mr-8 drop-shadow-xl/25">
        {/* Search Icon */}
        <Search className="text-gray-400 w-5 h-5 mr-2" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Find the product you're looking for"
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
        />

        {/* Camera Icon */}

        <CameraIcon className="w-5 h-5 opacity-70 mx-3" color="#202020" />
        

        {/* Search Button */}
        <Button className="bg-[#943A09] text-white font-semibold text-sm px-6 py-2 rounded-full">
          Search
        </Button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <HelpCircle size={20} className="text-gray-600" />

        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          {/* <Bell size={20} className="text-gray-600" /> */}
          <img src={notificationIcon} alt="Notifications" className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full border"
          />
          <span className="text-sm font-medium text-gray-700">Muskan</span>
        </div>
      </div>
    </header>
  );
}
