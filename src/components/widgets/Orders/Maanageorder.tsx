import *as React from "react";
import Pagination from "../../ui/Pagination";
import FiltersBar from "../Analytics/FiltersBar"
import ProductTable from "../Analytics/ProductTable";
import Tabs from "../Products/SubTabs";

export default function ManageOrder() {
  return (
    <div className="">
    <h2 className="text-lg font-semibold mb-4">Manage Orders your orders</h2>
    <Tabs tabItems={["On Hold", "Pending", "To Dispatched", "Ready To Ship", "Shipped", "Cancelled", "All"]} />
    <FiltersBar type="order" />
     <ProductTable TableHeader={["Product Details", "Pushed Date & Time", "C-Code", "Clout Price", "more details"]} />
     <Pagination />
    </div>
  )
}