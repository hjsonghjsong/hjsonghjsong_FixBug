import { Routes, Route } from "react-router-dom";
import Resume from "./components/NavBarComponents/Resume";
import About from "./components/NavBarComponents/About";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";
import { AuthProvider } from "./Contexts/Auth";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Settings from "./components/Settings/Settings";

const NavBarRouter = () => (
  <Routes>
    <Route path="/" element={<ProtectedRoute />}>
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ResetPassword />} />
    <Route index element={<HomePage />} />
  </Routes>
);

export default NavBarRouter;
