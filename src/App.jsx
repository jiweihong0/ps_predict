
import SigninPage from "./pages/SigninPage"
import LoginPage from "./pages/LoginPage"
import { Route, Routes} from "react-router-dom"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SigninPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
    </Routes>

  )
}
