import *as React from "react"
import ProductsCard from "./ProductsCard";

export default function Products() {
  return (
    <div className="mb-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex items-center w-[1130px] gap-4 mb-4">
        {/* Product cards would go here */}
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  )
}   