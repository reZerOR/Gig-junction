import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/Provider";
import { PiArrowElbowRightDownBold } from "react-icons/pi";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Update = () => {
  const navigate = useNavigate();
  const job = useLoaderData();
  const {
    _id,
    job_title,
    deadline,
    max_price,
    buyer_email,
    min_price,
    img,
    category,
    description,
  } = job;
  const handleUpdate = (e) => {
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

    axios
      .put(`https://gigjunction-server.vercel.app/updatejob/${_id}`, newJob)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "job data is updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        navigate("/mypostedjobs");
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Gig Junk | Update</title>
      </Helmet>
      <div className="max-w-7xl mt-10 mx-auto gap-3 text-4xl text-white flex">
        <h2 className="font-bold">Want To Update The Job?</h2>
        <PiArrowElbowRightDownBold className="mt-3"></PiArrowElbowRightDownBold>
      </div>
      <form
        onSubmit={handleUpdate}
        className="p-10 mt-10 mx-auto rounded-xl bg-2 max-w-xl md:max-w-7xl"
      >
        <h2 className="text-center font-bold text-4xl text-white">
          Update Job
        </h2>
        <div className="flex flex-col md:flex-row justify-between my-6 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              value={buyer_email}
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
              defaultValue={job_title}
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
              defaultValue={min_price}
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
              defaultValue={max_price}
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
              defaultValue={img}
              placeholder="image url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Category</span>
            </label>
            <select
              className="input input-bordered"
              defaultValue={category}
              name="category"
            >
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
              defaultValue={deadline}
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
              defaultValue={description}
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-10">
          <button className=" py-3 disabled:bg-slate-500 rounded-lg font-semibold text-xl bg-3">
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
