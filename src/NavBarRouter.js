import { Routes, Route } from "react-router-dom";
import Resume from "./components/NavBarComponents/Resume";
import About from "./components/NavBarComponents/About";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Login from "./components/Login/Login";

const NavBarRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default NavBarRouter;
