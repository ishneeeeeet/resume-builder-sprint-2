import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { resumeContext } from "../context";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PersonalInfo = () => {
  const { resume, setResume } = useContext(resumeContext);
  const navigate = useNavigate();

  const handleNameChange = ({ target: { value, name } }) => {
    setResume((prevResume) => ({
      ...prevResume,
      [name]: value,
    }));
  };
  const showToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000, // The toast will be shown for 3 seconds
    });
  };

  const handleButtonClick = () => {
    const { fname, lname, email } = resume;

    if (validator.isEmail(email) && email !== " ") {
      console.log("Email is valid");
      navigate("/projects");
    } else {
      console.log("Email is invalid");
      showToastMessage(
        "Email is not correct. Please enter a valid email address."
      );
    }

    // Additional validation checks can be added here using the validator package

    // Proceed to the next page or perform other actions
  };

  return (
    <>
      <ToastContainer />
      <div className=" border-b border-gray-900/10 pb-12">
        <div className="flex items-center justify-center">
          <h2 className=" text-base font-semibold leading-7 text-gray-900">
            What's the best way for employers to contact you?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="form-label">
              First name
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                type="text"
                name="fname"
                id="first-name"
                autoComplete="given-name"
                className="form-input"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="form-label">
              Last name
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                type="text"
                name="lname"
                id="last-name"
                autoComplete="family-name"
                className="form-input"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="form-input"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="linkedin" className="form-label">
              Linkedin URL
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                type="text"
                name="linkedin"
                id="city"
                autoComplete=""
                className="form-input"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="rounded-md bg-[#F50157] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={handleButtonClick}
      >
        Next: Projects
      </button>

      {resume && console.log(resume)}
    </>
  );
};

export default PersonalInfo;
