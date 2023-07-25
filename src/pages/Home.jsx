import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl  lg:grid lg:grid-cols-12 lg:gap-x-8 ">
      <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          People who care about your growth
        </h1>
        <p className="mt-8 text-lg text-gray-700">
          "Unlock Your Career Potential with SAIT Resume Builder: Tailored
          Resumes for Every Student's Journey"
        </p>
        <form action="" className="mt-8 flex items-start space-x-2">
          <div>
            <Link to="/course">
              <Button text={"Build Your Resume"} />
            </Link>
          </div>
        </form>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
          src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
