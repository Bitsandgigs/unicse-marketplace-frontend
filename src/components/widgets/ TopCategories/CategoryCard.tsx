import *as React from "react";
import category1 from "../../../assets/images/category1.png";
export default function CategoryCard({ category }) {
  return (
    <div className="w-[165px] h-[201px] rounded-2xl flex flex-col items-center hover:shadow-lg transition-shadow duration-300 bg-[#FFFFFF] shadow-lg"
      style={{ border: "0.5px solid #955F4129" }}>
      <div className="w-[136px] h-[121px]" style={{ borderRadius: "12px", marginTop: "16px", marginBottom: "8px", overflow: "hidden" }}>
        <img
          src={category1}
          alt={category.name}
          className="object-cover"
        />
      </div>

      <div className="w-[136px] h-[40px]">
         <h3 className="text-[16px] font-medium text-center">{category.name}</h3>
      </div>
    </div>
  );
}