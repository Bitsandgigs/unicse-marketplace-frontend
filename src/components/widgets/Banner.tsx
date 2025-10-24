import *as React from "react"
import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div>
      <div className="w-[1019px] bg-[#000000] h-[200px] mb-6 relative"
        style={{ borderRadius: "20px" }}
      >
        <div className="absolute top-[20px] left-[24px] text-center text-white">
          <p className="text-lg mb-1">INTRODUCING</p>


        </div>
        <div className="absolute top-[51px] left-[24px] text-center text-white">

          <h2 className="text-3xl">Products For Testing</h2>


        </div>
        <div className="absolute top-[95px] left-[24px]  text-center text-white">

          <p className="text-sm">Test and discover your next hero product</p>


        </div>
        <div className="absolute top-[130px] left-[24px] text-center text-white">

          <Button className=" bg-[#943A09] text-white font-semibold text-sm px-6 py-6 rounded-full">
            Start Product Testing Now
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="white" />
                <path d="M7.33301 10.0001V8.81346C7.33301 7.34013 8.37634 6.73679 9.65301 7.47346L10.683 8.06679L11.713 8.66013C12.9897 9.39679 12.9897 10.6035 11.713 11.3401L10.683 11.9335L9.65301 12.5268C8.37634 13.2635 7.33301 12.6601 7.33301 11.1868V10.0001Z" stroke="#202020" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>


          </Button>

        </div>
      </div>
    </div>
  )
}   