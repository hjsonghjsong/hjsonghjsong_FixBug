import { Routes, Route } from "react-router-dom";
import Resume from './components/NavBarComponents/Resume'
import About from './components/NavBarComponents/About';

const NavBarRouter = () => (
    <Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
    </Routes>
);

export default NavBarRouter;