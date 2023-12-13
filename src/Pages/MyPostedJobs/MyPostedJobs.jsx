import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/Provider";
import PostedJobsCard from "./PostedJobsCard/PostedJobsCard";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const MyPostedJobs = () => {
  // const [jobs, setJobs] = useState([]);
  const { user } = useContext(authContext);
  const [sortCategory, setSortCategory] = useState("");
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://gigjunction-server.vercel.app/mypostedjobs/${user?.email}`,
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .then((res) => {
  //       setJobs(res.data);
  //     });
  // }, [user]);

  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["jobs", user],
    queryFn: async () => {
      const res = await axios.get(
        `https://gigjunction-server.vercel.app/mypostedjobs/${user?.email}?category=${sortCategory}`,
        {
          withCredentials: true,
        }
      );
      return res.data;
    },
  });

  // handle category sort
  const handleCategory = (e) => {
    setSortCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

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
      <h2 className="text-6xl my-10 font-bold text-white text-center">
        Posted Jobs
      </h2>
      {/* filter by category added */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mb-10 gap-4 md:flex-row justify-center items-center"
      >
        {/* filter by category */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white font-semibold">
              Filter By Category
            </span>
          </label>
          <div className="flex gap-3">
            <select
              onChange={handleCategory}
              className="select text-white flex-1 select-bordered"
              name="category"
              defaultValue={sortCategory}
            >
              <option className="text-black" value="">
                All
              </option>
              <option className="text-black" value="Web Development">
                Web Development
              </option>
              <option className="text-black" value="Digital Marketing">
                Digital Marketing
              </option>
              <option className="text-black" value="Grapics Design">
                Grapics Design
              </option>
            </select>
            <button className="bg-3 px-4 rounded-md" type="submit">
              Filter
            </button>
          </div>
        </div>
      </form>
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
