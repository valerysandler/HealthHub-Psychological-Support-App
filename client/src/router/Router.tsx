import RegisterPage from "../Pages/AuthArea/RegisterPage"
import LoginPage from "../Pages/AuthArea/LoginPage";
import Page404 from "../Pages/Page404";
import ContactUs from "../Pages/Sections/ContactUsPage";
import Profile from "../Pages/Profile";
import About from "../Pages/Sections/About";
import ForgotPassword from "../Pages/AuthArea/ForgotPassword";
import ResetPassword from "../Pages/AuthArea/ResetPassword";
import DoctorsList from "../Components/DoctorsList";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../Pages/Home/HomePage";

export default function Router() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);


    return (
        <div className="Router">
            <Routes>
                <Route path="*" element={<Page404 />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                //    Create link with token as query param
                <Route path="/resetPassword/:token" element={<ResetPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctors" element={<DoctorsList />} />
            </Routes>
        </div>
    );

}