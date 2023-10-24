import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Page404 from "../pages/Page404";
import Home from "../pages/HomePage";
import ContactUs from "../pages/ContactUsPage";
import Profile from "../pages/Profile";
import About from "../pages/About";

export default function Router() {
    return (
        <div className="Router">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );

}