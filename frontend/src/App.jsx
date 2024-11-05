import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./assets/layout/Layout"
import HomePage from "./assets/page/home-page"
import LoginPage from "./assets/page/login-page"
import RegistrationPage from "./assets/page/registration-page"
import EmailVerityPage from "./assets/page/email-verity-page"
import NgoList from "./assets/page/all-ngo-page"
import SendOtpPage from "./assets/page/sendOtp-page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="email-verity" element={<EmailVerityPage />} />
            <Route path="send-otp" element={<SendOtpPage />} />
            <Route path="all-ngo-frame" element={<NgoList />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
