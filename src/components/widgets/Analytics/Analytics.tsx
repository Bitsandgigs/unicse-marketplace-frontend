import *as React from "react";
import ProductTable from "./ProductTable";
import Tabs from "../Products/SubTabs";

import FiltersBar from "./FiltersBar";
import AnalyticsCard from "./AnalyticsCard";
import DashboardChart from "./DashboardChart";

import DeliveryState from "./DeliveryState";
import DeliveryMargin from "./DeliveryMargin";

export default function AnalyticsPage() {
  return (
    <div className=" ">
      <h2 className="text-lg font-semibold mb-4 ">
        Get detailed insights about your Orders, Margins, GMV, RTO% etc.
      </h2>
      <Tabs tabItems={["Overall", "Products"]} />
      <FiltersBar type="analytics" />

      <div className="grid grid-cols-5 gap-2 mb-4">
        <AnalyticsCard
          title="Total Orders"
          value="50.8K"
          percentage="28.4% ↑"
          description="Compared to last month"
          icon="orders"
          width={undefined}
            />
        <AnalyticsCard
          title="Total Sales"
          value="₹1.2Cr"
          percentage="15.2% ↑"
          description="Compared to last month"
          icon="sales"
          width={undefined}
        />

        <AnalyticsCard
          title="Total Sales"
          value="₹1.2Cr"
          percentage="15.2% ↑"
          description="Compared to last month"
          icon="sales"
          width={undefined}
        />

        <AnalyticsCard
          title="Total Sales"
          value="₹1.2Cr"
          percentage="15.2% ↑"
          description="Compared to last month"
          icon="sales"
          width={undefined} 
        />

        <AnalyticsCard
          title="Total Sales"
          value="₹1.2Cr"
          percentage="15.2% ↑"
          description="Compared to last month"
          icon="sales"
          width={undefined} 
        />
      </div>

      <div className="p-4 mb-4 bg-white rounded-lg shadow-sm">
      <DashboardChart />
      </div>
      

      <div className="grid grid-cols-3 gap-2">
        <AnalyticsCard
          title="Total Orders"
          value="50.8K"
          percentage="28.4% ↑"
          description="Compared to last month"
          icon="orders"
          width="332.32757568359375px"
        />
        <AnalyticsCard
          title="Total Sales"
          value="₹1.2Cr"
          percentage="15.2% ↑"
          description="Compared to last month"
          icon="sales"
          height="332.32757568359375px"
        />

        <AnalyticsCard
          title="Total Sales"
          value="₹1.2Cr"
          percentage="15.2% ↑"
          description="Compared to last month"
          icon="sales"
          height="332.32757568359375px"
        />


      </div>

      <div className="grid grid-cols-2 gap-2">
        <DeliveryState />
        <DeliveryMargin />
      </div>

      <ProductTable
        TableHeader={[
          "Date & Time",
          "Product Details",
          "Payment",
          "Shipment Details",
          "Customer Details",
          "Delivery Attempts",
          "Actions",
        ]}
      /> 

    </div>
  );
}
