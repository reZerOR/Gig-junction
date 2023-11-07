import React from "react";
import JobCards from "./Cards/JobCards";

const Digitaltab = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-4xl font-bold text-center lg:text-left my-10">
        Digital Marketing Jobs
      </h2>
      <JobCards category={"Digital Marketing"}></JobCards>
    </div>
  );
};

export default Digitaltab;
