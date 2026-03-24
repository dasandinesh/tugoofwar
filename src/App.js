import React from "react";
import Navbar from "./components/nav";
import Home from "./components/home";
import Eventform from "./components/Eventform";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Eventform />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;