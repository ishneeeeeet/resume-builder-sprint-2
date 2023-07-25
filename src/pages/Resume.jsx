import React, { useContext, useRef } from "react";
import { resumeContext } from "../context";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import BusinessOne from "../templates/BusinessOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";
import Templatefour from "../templates/Templatefour";
import Templatefive from "../templates/Templatefive";
import Templatesix from "../templates/Templatesix";

const Resume = () => {
  const { resume } = useContext(resumeContext);
  const componentRef = useRef(null);

  const renderTemplate = () => {
    switch (resume.template) {
      case "templateone":
        return <BusinessOne resume={resume} />;
      case "templatetwo":
        return <TemplateTwo resume={resume} />;
      case "templatethree":
        return <TemplateThree resume={resume} />;
      case "templatefour":
        return <Templatefour resume={resume} />;
      case "templatefive":
        return <Templatefive resume={resume} />;
      case "templatesix":
        return <Templatesix resume={resume} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row items-center py-8">
      <div className=" ml-96 max-w-2xl bg-white shadow-2xl rounded-lg p-8">
        {renderTemplate()}
      </div>
      <ReactToPrint
        trigger={() => (
          <button className=" ml-20 mt-4 bg-[#F50157] hover: [#F50157] text-white font-semibold py-2 px-4 rounded-lg">
            Download <ArrowDown className="inline-block ml-1" />
          </button>
        )}
        content={() => componentRef.current}
      />
      <div style={{ display: "none" }}>
        <PrintContent ref={componentRef} resume={resume} />
      </div>
    </div>
  );
};

const PrintContent = React.forwardRef(({ resume }, ref) => {
  const renderTemplate = () => {
    switch (resume.template) {
      case "templateone":
        return <BusinessOne resume={resume} />;
      case "templatetwo":
        return <TemplateTwo resume={resume} />;
      case "templatethree":
        return <TemplateThree resume={resume} />;
      default:
        return null;
    }
  };

  return <div ref={ref}>{renderTemplate()}</div>;
});

export default Resume;
