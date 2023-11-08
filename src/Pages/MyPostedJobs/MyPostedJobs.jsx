import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/Provider";
import PostedJobsCard from "./PostedJobsCard/PostedJobsCard";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(authContext);
  useEffect(() => {
    axios
      .get(
        `https://gigjunction-server.vercel.app/mypostedjobs/${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setJobs(res.data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // DELETE FROM DATABASE
        axios
          .delete(`https://gigjunction-server.vercel.app/deletejob/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = jobs.filter((item) => item._id !== id);
              setJobs(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Gig Junk | My Posted Jobs</title>
      </Helmet>
      <h2 className="text-4xl my-10 font-bold text-white text-center">
        Your Posted Jobs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {jobs.map((item) => (
          <PostedJobsCard
            key={item._id}
            card={item}
            handleDelete={handleDelete}
          ></PostedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
