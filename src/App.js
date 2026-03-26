import React from "react";
import Navbar from "./components/nav";
import Home from "./components/home";
import Eventform from "./components/Eventform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Contact from "./components/contact";
import PrizeList from "./components/prizelist";

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
      </Routes>

    </BrowserRouter>
  );
}

export default App;