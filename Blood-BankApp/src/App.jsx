import './App.css'
import Navbar from './Components/NavBar/navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from './Components/Footer/Footer.jsx'
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton.jsx';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
       <Footer />
       <WhatsAppButton />
    </>
  )
}

export default App
