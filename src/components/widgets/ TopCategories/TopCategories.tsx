import *as React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { id: 1, name: "Beauty & Personal Care", imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Beauty & Personal Care", imageUrl: "https://via.placeholder.com/150" },
  {
    id: 3,
    name: "Beauty & Personal Care",
    imageUrl: "https://via.placeholder.com/150",
  },
  { id: 4, name: "Beauty & Personal Care", imageUrl: "https://via.placeholder.com/150" },
  { id: 5, name: "Beauty & Personal Care", imageUrl: "https://via.placeholder.com/150" },
  { id: 6, name: "Beauty & Personal Care", imageUrl: "https://via.placeholder.com/150" },
];


export default function TopCategories() {
  return (
    <div className="w-[1019px] mb-8">


      <div className="w-[1130px] h-[265px] ml-[28px] mr-[28px] mt-[26px] mb-[26px]">
        {/* top category heading */}
        <div className="flex justify-between items-center w-[971px] h-[44px]">
          <h2 className="text-[20px] font-semibold items-center">
            Top Categories
          </h2>
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0002 13.2797L5.65355 8.93306C5.14022 8.41973 5.14022 7.57973 5.65355 7.06639L10.0002 2.71973"
                stroke="#99938F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.94043 13.2797L10.2871 8.93306C10.8004 8.41973 10.8004 7.57973 10.2871 7.06639L5.94043 2.71973"
                stroke="#0A0502"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="w-[1130px] flex items-start justify-center pt-6 pb-6 pl-0 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      
    </div>
  );
}
