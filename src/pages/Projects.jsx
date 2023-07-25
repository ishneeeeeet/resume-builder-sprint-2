import React, { useContext } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { resumeContext } from "../context";

const Projects = () => {
  const { setResume } = useContext(resumeContext);
  const handlenameChange = (event) => {
    const value = event.target.value;
    const item = event.target.name;

    setResume((prevResume) => ({
      ...prevResume,
      [item]: value,
    }));
  };
  return (
    <div className="space-x-12">
      <div className=" border-b border-gray-900/10 pb-12">
        <div className="mt-9 flex items-center justify-center">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Tell us about your capstone project
          </h2>
        </div>
        

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                onChange={handlenameChange}
                type="text"
                name="project"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Technologies Used
            </label>
            <div className="mt-2">
              <input
                onChange={handlenameChange}
                id="email"
                name="technology"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <Link to="/resume">
        <Button text={"Next: "} />
      </Link>
    </div>
  );
};

export default Projects;
