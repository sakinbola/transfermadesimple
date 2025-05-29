import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from "./pages/sections/Hero.jsx"
import Footer from "./pages/sections/Footer.jsx"
import ContactUs from "./pages/sections/ContactUs.jsx"
import Submission from "./pages/sections/Submission.jsx"
import Header from "./pages/sections/Header.jsx"
import RecieveSection from "./pages/sections/RecieveSection.jsx"
import Login from "./pages/sections/login.jsx";
import Signup from "./pages/sections/signup.jsx";

function App() {
  return (
      <Router> 
        {/* parent component enables nav system */}
        <Header/>
        <Routes>
           {/* path / represnts landing page   */}
            <Route path="/" element={
            <> 
              <Hero/>
              <Submission/>
              <RecieveSection/>
              <ContactUs/>
              <Footer/>
            </>
            } />

          {/* takes to login or signup page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>

  )
}

export default App
