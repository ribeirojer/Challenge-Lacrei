import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Person from "./pages/Person";
import Professional from "./pages/Professional";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pessoa" element={<Person />} />
        <Route path="/profissional" element={<Professional />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
