import { Routes, Route } from "react-router-dom";
import Resume from './components/NavBarComponents/Resume'
import CreateResumeStepper from './components/ResumeComponents/CreateResumeStepper';

const NavBarRouter = () => (
    <Routes>
      <Route path="/resume" element={<Resume />} />
        <Route path="/resume/add" element={<CreateResumeStepper />} />
    </Routes>
);

export default NavBarRouter;