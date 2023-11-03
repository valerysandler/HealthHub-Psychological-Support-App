import Footer from "../../Components/Sections/Footer";
import Navbar from "../../Components/Navbar";
import Router from "../../Router/Router";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Router />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}