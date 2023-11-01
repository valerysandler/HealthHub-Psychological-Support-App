import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage";
import Page404 from "../pages/Page404";
import Home from "../pages/HomePage";
import ContactUs from "../pages/ContactUsPage";
import Profile from "../pages/Profile";
import About from "../pages/About";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

export default function Router() {
    return (
        <div className="Router">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/resetPassword" element={<ResetPassword />} />

            </Routes>
        </div>
    );

}