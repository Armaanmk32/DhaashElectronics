import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Product from "./Pages/Product"
function App(){
  return <div>

   <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  ">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/collection" element={<Collection/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/product/:productId" element={<Product/>} />
    </Routes>
  </div>
    <Footer />
  </div>
}
export default App