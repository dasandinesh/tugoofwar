import React from "react";
import Navbar from "./components/nav";
import Home from "./components/home";
import Eventform from "./components/Eventform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Contact from "./components/contact";
import PrizeList from "./components/prizelist";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Eventform />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prizes" element={<PrizeList />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;