// react
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// src
import Header from "./views/layout/Header";
import Home from "./views/Home";
import Monitor from "./views/Monitor";
import Login from "./views/Login";
import Report from "./views/Report";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
