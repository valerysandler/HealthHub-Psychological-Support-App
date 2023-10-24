// import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./router/Router";


export default function App() {

  return (
    <div className=" flex justify-center items-center h-full">
     
      <main>
        <Router />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}