import React, { useContext } from "react";
import { PiArrowElbowRightDownBold } from "react-icons/pi";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";

const JobDetails = () => {
  const card = useLoaderData();
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const {
    img,
    buyer_email,
    deadline,
    description,
    job_title,
    max_price,
    min_price,
  } = card;

  const handleBid = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const deadline = form.date.value;
    const newJob = {
      email: user?.email,
      buyer_email,
      img,
      job_title,
      deadline,
      price,
      status: "pending",
      buyer_status: "pending",
    };
    axios.post("http://localhost:5000/bids", newJob).then((res) => {
      if (res.data?.insertedId) {
        navigate("/mybids");
        Swal.fire({
          title: "Success!",
          text: "Your bid is added to the Database successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    });
  };
  return (
    <div className="min-h-screen">
      <div className="card rounded-none md:rounded-lg flex-col md:flex-row justify-center items-center max-w-7xl mx-auto card-side bg-2 shadow-xl">
        <figure className="max-w-xs px-6 ">
          <img
            className="w-full pt-10 md:pt-0 rounded-lg"
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title text-center text-3xl text-4">
            {job_title}
          </h2>
          <p className="max-w-xs">{description}</p>
          <p className="font-bold">
            Price: {min_price}$ - {max_price}$
          </p>
          <p className="font-bold">Deadline: {deadline}</p>
        </div>
      </div>
      <div className="max-w-7xl mt-10 mx-auto gap-3 text-4xl text-white flex">
        <h2 className="font-bold">Bids Form</h2>
        <PiArrowElbowRightDownBold className="mt-3"></PiArrowElbowRightDownBold>
      </div>
      <form
        onSubmit={handleBid}
        className="p-10 mt-10 mx-auto rounded-xl bg-2 max-w-xl md:max-w-7xl"
      >
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
              <span className="label-text text-white">Buyer Email</span>
            </label>
            <input
              type="email"
              value={buyer_email}
              name="buyer_email"
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between  my-6 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
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
        </div>
        <div className="form-control mt-10">
          <button
            disabled={user?.email === buyer_email}
            className=" py-3 disabled:bg-slate-500 rounded-lg font-semibold text-xl bg-3"
          >
            Bid On The Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobDetails;
