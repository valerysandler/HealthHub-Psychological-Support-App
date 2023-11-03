import Hero from "../Components/Sections/Hero";
import DoctorsList from "../omponents/DoctorsList";
import { useEffect, useState } from "react";

export default function Landing() {
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
        <>
            <div>
                {isLoggedIn ? <DoctorsList /> : <Hero />}
            </div>
        </>
    )
}