import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthService from "./service/authService";
import DiscourseService from "./service/discourseAPI";

const authService = new AuthService();
const discourseService = new DiscourseService();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} discourseService={discourseService} />
  </React.StrictMode>
);
