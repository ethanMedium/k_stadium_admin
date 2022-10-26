import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthService from "./service/authService";
import DiscourseService from "./service/discourseAPI";
import MediumService from "./service/mediumAPI";

const authService = new AuthService();
const discourseService = new DiscourseService();
const mediumService = new MediumService();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      authService={authService}
      discourseService={discourseService}
      mediumService={mediumService}
    />
  </React.StrictMode>
);
