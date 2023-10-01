// import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Router from "./router/Router";


export default function App() {

  return (
    <div>
      <nav>
        <Navbar />
        {/* <Banner /> */}
      </nav>
      <main>
        <Router />
      </main>
    </div>
  )
}
