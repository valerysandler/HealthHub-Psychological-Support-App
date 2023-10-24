// Date: 9/4/2021
// import ProfileDropdown from "../components/ProfileDropdown";
import CategoryList from "../components/CategoryList";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import ProfileDropdown from "../components/ProfileDropdown";
import Blog from "../components/sections/BlogSection";
import Newsletter from "../components/sections/NewsletterSection";
import DoctorsList from "./DoctorsList";

export default function Home() {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            {/* <h1>Home Page</h1> */}
            <Hero />
            {/* <CategoryList /> */}
            {/* <Blog /> */}
            <Newsletter />
            {/* <Modal /> */}
            {/* <DoctorsList /> */}
        </div>
    )
}