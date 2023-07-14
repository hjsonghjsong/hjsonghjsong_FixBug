import { Routes, Route } from "react-router-dom";
import Resume from "./components/NavBarComponents/Resume";
import About from "./components/NavBarComponents/About";

import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

const NavBarRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route path="/about" element={<About />} />
    <Route
      path="/resume"
      element={
        <ProtectedRoute>
          <Resume />
        </ProtectedRoute>
      }
    />

    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default NavBarRouter;
