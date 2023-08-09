import { Routes, Route } from "react-router-dom";
import About from "./components/NavBarComponents/About";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Settings from "./components/Settings/Settings";
import EditResume from "./components/EditResume/EditResume";
import CreateResumeStepper from "./components/ResumeComponents/CreateResumeStepper";
import Resume from "./components/NavBarComponents/Resume";

const NavBarRouter = () => (
  <Routes>
    <Route path="/" element={<ProtectedRoute />}>
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/resume/edit" element={<EditResume />} />
    </Route>

    <Route path="/login" element={<Login />} />
    <Route path="/resume/add" element={<CreateResumeStepper />} />
    <Route path="/forgot-password" element={<ResetPassword />} />
    <Route index element={<HomePage />} />
  </Routes>
);

export default NavBarRouter;
