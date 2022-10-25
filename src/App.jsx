// react
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// src
import Header from "./views/layout/Header";
import Home from "./views/Home";
import Monitor from "./views/Monitor";
import Login from "./views/Login";
import Report from "./views/Report";

function App({ authService, discourseService }) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    authService.signIn().then((result) => {
      if (result === true) {
        setIsLogged(true);
      }
    });
  });
  return (
    <BrowserRouter>
      <Header
        authService={authService}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              authService={authService}
              discourseService={discourseService}
            />
          }
        />
        <Route
          path="/monitor"
          element={
            <Monitor
              authService={authService}
              discourseService={discourseService}
            />
          }
        />
        <Route path="/report" element={<Report authService={authService} />} />
        <Route
          path="/login"
          element={
            <Login authService={authService} setIsLogged={setIsLogged} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
