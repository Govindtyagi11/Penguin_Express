import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./index.css";
import Login from "./pages/Login/Login";
import checkAuth from "./auth";

function App() {
  const token = checkAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Place new routes over this */}
        <Route path="/app/*" element={<Layout />} />

        <Route path="*" element={<Navigate to={token ? "/app/dashboard" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
