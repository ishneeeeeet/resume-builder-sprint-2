import React, { createContext, useState } from "react";

const resumeContext = createContext();

const ContextProvider = ({ children }) => {
  const [resume, setResume] = useState({
    course: "IT",
    fname: "",
    lname: "",
  });

  // Provide a value to the resumeContext.Provider
  return (
    <resumeContext.Provider value={{ resume, setResume }}>
      {children}
    </resumeContext.Provider>
  );
};

export { resumeContext, ContextProvider };
