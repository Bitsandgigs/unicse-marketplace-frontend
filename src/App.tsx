import * as React from "react"
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Header from "./components/layout/Header";
import OrderPage from "./pages/OrderPage";
import NdrPage from "./pages/NdrPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="flex bg-[#F3F4F8] h-screen overflow-hidden rounded-tl-[14px]">
      <Sidebar />


        <main className="flex-1 p-4 overflow-y-auto hide-scrollbar scroll-smooth">
        <Header />
        <Routes>
          <Route path="/marketplace" element={<HomePage />} />
          <Route path="/dashboard/analytics/overall" element={<AnalyticsPage />} />
          <Route path="/order/manage/pendingcod" element={<OrderPage />} />
          <Route path="/manage-ndr/faileddelivery" element={<NdrPage />} />
          <Route path="/manage-products/pushedToShopify" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App