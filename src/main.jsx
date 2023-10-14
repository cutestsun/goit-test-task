import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./components/GlobalStyles.js";
import App from "./App/App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "modern-normalize/modern-normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-test-task/">
      <App />
      <GlobalStyles />
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  </React.StrictMode>
);
