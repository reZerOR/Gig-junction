import React from "react";
import JobCards from "./Cards/JobCards";

const Webtab = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-4xl font-bold text-center lg:text-left my-10">
        Web Development Jobs
      </h2>
      <JobCards category={"Web Development"}></JobCards>
    </div>
  );
};

export default Webtab;
