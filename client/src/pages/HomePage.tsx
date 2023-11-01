import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Blog from "./BlogSection";
import DoctorsList from "./DoctorsList";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <DoctorsList />
            {/* <OurTeam /> */}
            <Blog />
            {/* <Newsletter /> */}
        </div>
    )
}