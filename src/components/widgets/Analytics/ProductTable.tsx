// components/products/ProductTable.tsx
import *as React from "react";
import { useState } from "react";

const dummyData = [
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: "$10.00",
        status: "In Stock",
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: "$20.00",
        status: "Out of Stock",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: "$15.00",
        status: "In Stock",
    },
    {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
        price: "$25.00",
        status: "In Stock",
    },

];

export default function ProductTable({ TableHeader }) {
    const [products, setProducts] = useState(dummyData);
    console.log(TableHeader);
    const tableHeaderLength = TableHeader.length;
    return (
        <div className="h-[236px] rounded-lg bg-white shadow-sm mt-4"
        style={{ border: "0.5px solid #FFFFFF" }}
        >



            <div className="h-[150px] mx-[12px] mt-[29px]">
                <h4 className="text-[21px] font-semibold leading-[1.5]">Product Analysis</h4>

                <div className={`grid grid-cols-7 py-3 mt-[24px] text-sm font-semibold bg-[#F1F4F9] rounded-[12.59px]`}>

                    {TableHeader.map((header) => (
                        <span key={header} className="text-center">{header}</span>
                    ))}
                </div>
            </div>

            {/* <div style={{ border : "2px solid red"}} className="h-[106.87834167480469px] mx-3 mt-[71px]">
      </div>   */}




        </div>
    );
}
