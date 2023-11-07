import React, { useContext } from "react";
import { PiArrowElbowRightDownBold } from "react-icons/pi";
import { authContext } from "../../Provider/Provider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Addjob = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyer_email = form.email.value;
    const job_title = form.jobtitle.value;
    const min_price = form.minprice.value;
    const max_price = form.maxprice.value;
    const img = form.img.value;
    const category = form.category.value;
    const deadline = form.date.value;
    const description = form.description.value;
    const newJob = {
      img,
      job_title,
      buyer_email,
      min_price,
      max_price,
      category,
      deadline,
      description,
    };

    console.log(newJob);

    axios.post("http://localhost:5000/jobs", newJob).then((res) => {
      if (res.data?.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "job added to the database",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/mypostedjobs");
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-7xl mt-10 mx-auto gap-3 text-4xl text-white flex">
        <h2 className="font-bold">Want To Post A Job?</h2>
        <PiArrowElbowRightDownBold className="mt-3"></PiArrowElbowRightDownBold>
      </div>
      <form
        onSubmit={handleAddJob}
        className="p-10 mt-10 mx-auto rounded-xl bg-2 max-w-xl md:max-w-7xl"
      >
        <h2 className="text-center font-bold text-4xl text-white">Add Job</h2>
        <div className="flex flex-col md:flex-row justify-between my-6 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              name="email"
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Job Title</span>
            </label>
            <input
              type="text"
              placeholder="job title"
              name="jobtitle"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between  my-6 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Minimum Price</span>
            </label>
            <input
              type="text"
              name="minprice"
              placeholder="minimum price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Maxmimum Price</span>
            </label>
            <input
              type="text"
              name="maxprice"
              placeholder="maximum price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between  my-6 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Image Url</span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="image url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Category</span>
            </label>
            <select className="input input-bordered" name="category">
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Grapics Design">Grapics Design</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between  my-6 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Deadline</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <textarea
              className="input input-bordered"
              name="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-10">
          <button className=" py-3 disabled:bg-slate-500 rounded-lg font-semibold text-xl bg-3">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addjob;
