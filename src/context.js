import React, { createContext, useEffect, useState } from "react";

const resumeContext = createContext();

const ContextProvider = ({ children }) => {
  const storedResume = localStorage.getItem("resume"); // Get the resume from local storage
  const [resume, setResume] = useState(
    storedResume ? JSON.parse(storedResume) : { course: "IT", template: "" }
  );

  // Store the updated resume in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("resume", JSON.stringify(resume));
  }, [resume]);

  // Provide a value to the resumeContext.Provider
  return (
    <resumeContext.Provider value={{ resume, setResume }}>
      {children}
    </resumeContext.Provider>
  );
};

export { resumeContext, ContextProvider };
