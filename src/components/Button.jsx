import React from "react";

const Button = ({text}) => {
  return (
    <button
      type="button"
      className="rounded-md bg-[#F50157] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      {text}
    </button>
  );
};

export default Button;
