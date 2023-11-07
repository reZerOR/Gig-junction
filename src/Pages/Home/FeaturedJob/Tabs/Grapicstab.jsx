import React from "react";
import JobCards from "./Cards/JobCards";

const Grapicstab = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-4xl font-bold text-center lg:text-left my-10">
        Grapics Design Jobs
      </h2>
      <JobCards category={"Grapics Design"}></JobCards>
    </div>
  );
};

export default Grapicstab;
