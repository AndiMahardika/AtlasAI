import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

function Test () {
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center items-center">
      <Button variant={'destructive'}>Test Button</Button>
    </div>
  )
}