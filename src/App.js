import Header from "./components/Header/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import { Routes, Route, useNavigate } from "react-router-dom";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import TemplateSelection from "./pages/TemplateSelection";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import BusinessOne from "./templates/BusinessOne";
import Templatesix from "./templates/Templatesix";
import Templatefour from "./templates/Templatefour";
import Templatefive from "./templates/Templatefive";
import Body from "./components/Body/Body";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/body" element={<Body />} />
        <Route path="/course" element={<Course />} />
        <Route path="/templateselection" element={<TemplateSelection />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/templateone" element={<BusinessOne />} />
        <Route path="/templateTwo" element={<TemplateTwo />} />
        <Route path="/templateThree" element={<TemplateThree />} />
        <Route path="/templatefour" element={<Templatefour />} />
        <Route path="/templatefive" element={<Templatefive />} />
        <Route path="/templatesix" element={<Templatesix />} />
      </Routes>
    </>
  );
}

export default App;
