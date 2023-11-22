import "./styles/app.scss"
import Header from "./components/Header";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import HeaderPhone from "./components/HeaderPhone";
function App() {


const [menuOpen , setMenuOpen] = useState(false);


  return <>
  <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Home/>
  <Timeline/>
  <Contact/>
  <Footer/>
  <Toaster/>
  </>
}

export default App;
