import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";
import Header from "./components/Header/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import TemplateSelection from "./pages/TemplateSelection";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import BusinessOne from "./templates/BusinessOne";
import Templatesix from "./templates/Templatesix";
import Templatefour from "./templates/Templatefour";
import Templatefive from "./templates/Templatefive";
import Body from "./components/Body/Body";

function App() {
  const navigate = useNavigate();
 

  return (
    <>
      <ClerkProvider
        publishableKey="pk_test_dG91Y2hlZC1tdXNrb3gtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA"
        navigate={(to) => navigate(to)}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/body" element={<Body />} />
          <Route
            path="/course"
            element={
              <>
                <SignedIn>
                  <Course />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route path="/templateselection" element={<TemplateSelection />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route
            path="/sign-out"
            element={() => {
              
              return <Home />;
            }}
          />
          <Route
            path="/sign-in"
            element={
              <SignedOut>
                <SignIn>
                  <Home />
                </SignIn>
              </SignedOut>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/templateone" element={<BusinessOne />} />
          <Route path="/templateTwo" element={<TemplateTwo />} />
          <Route path="/templateThree" element={<TemplateThree />} />
          <Route path="/templatefour" element={<Templatefour />} />
          <Route path="/templatefive" element={<Templatefive />} />
          <Route path="/templatesix" element={<Templatesix />} />
        </Routes>
      </ClerkProvider>
    </>
  );
}

export default App;
