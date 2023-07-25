import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { resumeContext } from "../context";

function TemplateSelection() {
  const { resume, setResume } = useContext(resumeContext);
  const navigate = useNavigate();
  let templates = [];

  switch (resume.course) {
    case "Information Technology":
      templates = [
        {
          name: "templateone",
          display: "Template 1",
          img: "https://i.ibb.co/kx3wPKz/templateone.png",
        },
        {
          name: "templatetwo",
          display: "Template 2",
          img: "https://i.ibb.co/zbj5MGJ/templatetwo.png",
        },
        {
          name: "templatethree",
          display: "Template 3",
          img: "https://i.ibb.co/Sr0Sgmq/templatethree.png",
        },
      ];
      break;

    case "Business Administration":
      templates = [
        {
          name: "templatefour",
          display: "Template 1",
          img: "https://i.ibb.co/vjDNxBw/templatefour.png",
        },
        {
          name: "templatefive",
          display: "Template 2",
          img: "https://i.ibb.co/Bq4bT23/templatefive.png",
        },
        {
          name: "templatesix",
          display: "Template 3",
          img: "https://i.ibb.co/KrHXYkk/templatesix.png",
        },
      ];
      break;

    default:
      break;
  }

  const handleClick = (temp) => {
    setResume((prevResume) => ({
      ...prevResume,
      template: temp.name,
    }));
    navigate("/personalinfo");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 class=" mt-20 mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
          Templates specially {" "}
          <span class="text-[#F50157] dark:text-blue-500">curated</span>{" "}
          for your <span class="text-[#F50157] dark:text-blue-500">industry</span> needs.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {templates.map((temp, index) => (
          <button
            key={index}
            onClick={() => handleClick(temp)}
            className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mx-4 my-4"
          >
            <div className="relative h-[400px] w-[300px] rounded-md">
              <img
                src={temp.img}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                  {temp.display}
                </h1>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  Select &rarr;
                </button>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

export default TemplateSelection;
