import *as React from "react"
import ProductsCard from "./ProductsCard";
import Tabs from "./SubTabs";

export default function Products() {
  return (
    <div className="h-[439px] bg-[#FFFFFFB] border border-[#E0E0E0]"
    style={{borderRadius: "24px", marginBottom: "40px" }}>
      <div style={{ height: "379.5px"}} className=" my-[29px] mx-[28px] flex flex-col justify-between">
              <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <Tabs tabItems={["Push to Shopify", "Inventory Request", "Potential Heroes", "Hot Selling Products", "Popular Demand", ""]} />

      <div className="flex items-center w-[1130px] gap-4">

        {/* Product cards would go here */}

        <ProductsCard />

        <ProductsCard />

        <ProductsCard />

        <ProductsCard />

        <ProductsCard />

      </div>

      </div>

    </div>
  )
}   