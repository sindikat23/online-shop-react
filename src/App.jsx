import { Outlet } from "react-router-dom"
import Footer from "./components/Layout/Footer"
import Navbar from "./components/Layout/Navbar"

function App() {

  return (
    <div>
      <Navbar/>
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
