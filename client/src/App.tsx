import Navbar from "./components/Navbar";
import Router from "./router/Router";


export default function App() {

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Router />
      </main>
    </div>
  )
}
