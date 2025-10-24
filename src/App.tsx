import * as React from "react"
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="flex bg-[#F3F4F8] h-screen overflow-hidden rounded-tl-[14px]">
      <Sidebar />


      <main className="flex-1 p-4">
        <Header />
        <Routes>
          <Route path="/marketplace" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App