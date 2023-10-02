import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Page404 from "../pages/Page404";
import Home from "../pages/HomePage";
import ContactUs from "../pages/ContactUsPage";

export default function Router() {
    return (
        <div className="Router">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>

        </div>
    );

}