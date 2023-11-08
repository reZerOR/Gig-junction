import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/Provider";
import PostedJobsCard from "./PostedJobsCard/PostedJobsCard";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(authContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mypostedjobs/${user?.email}`)
      .then((res) => {
        setJobs(res.data);
      });
  }, [user]);
  return (
    <div className="max-w-7xl mx-auto mt">
      <h2 className="text-4xl my-10 font-bold text-white text-center">
        Your Posted Jobs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {jobs.map((item) => (
          <PostedJobsCard key={item._id} card={item}></PostedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
