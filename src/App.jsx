
import SigninPage from "./pages/SigninPage"
import LoginPage from "./pages/LoginPage"
import RecordPage from "./pages/RecordPage"
import PelvisDetectionPage from "./pages/PelvisDetectionPage"
import SpineDetectionPage from "./pages/SpineDetectionPage"
import RehabilitationPage from "./pages/RehabilitationPage"



import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
 
      <Routes>
        <Route path="/" element={<RecordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/pelvis" element={<PelvisDetectionPage/>}></Route>
        <Route path="/Spine" element={<SpineDetectionPage/>}></Route>
        <Route path="/Rehabilitation" element={<RehabilitationPage/>}></Route>
      </Routes>


  )
}
