
import SigninPage from "./pages/SigninPage"
import LoginPage from "./pages/LoginPage"
import RecordPage from "./pages/RecordPage"

import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
 
      <Routes>
        <Route path="/" element={<RecordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>


  )
}
