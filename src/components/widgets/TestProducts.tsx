import *as React from "react"
import ProductsCard from "./Products/ProductsCard";
import Tabs from "./Products/SubTabs";

export default function TestProducts() {
  return (
    <div className="h-[439px] bg-[#F0E6E6B2] border border-[#E0E0E0]"
    style={{ borderRadius: "24px" }}>
    <div style={{ height: "379.5px"}} className="bg-[#F0E6E6B2] my-[29px] mx-[28px] flex flex-col justify-between">
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