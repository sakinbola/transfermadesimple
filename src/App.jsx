import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./pages/sections/Hero.jsx"
import Footer from "./pages/sections/Footer.jsx"
import ContactUs from "./pages/sections/ContactUs.jsx"
import Submission from "./pages/sections/Submission.jsx"
import Header from "./pages/sections/Header.jsx"
import tailwindcss from '@tailwindcss/vite'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Submission/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
