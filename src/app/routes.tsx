import Login from "@/features/auth/component/login"
import Signup from "@/features/auth/component/signup"
import Chatbot from "@/features/chatbot/chatbot"
import DetailPage from "@/features/detailpage/detail.page"
import Home from "@/features/homepage/home"
import ProtectedRoute from "@/middleware/ProtectedRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:code" element={<DetailPage />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}