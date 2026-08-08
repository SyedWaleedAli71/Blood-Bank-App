import "./App.css";

import Navbar from "./Components/NavBar/navbar.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";

import Footer from "./Components/Footer/Footer.jsx";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

import Signup from "./Pages/Auth/Signup.jsx";
import Login from "./Pages/Auth/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRole="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
