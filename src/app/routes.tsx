import DetailPage from "@/features/detailpage/detail.page"
import Home from "@/features/homepage/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:code" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}