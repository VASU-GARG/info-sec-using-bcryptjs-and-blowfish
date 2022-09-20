import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Index = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

root.render(<Index />);
