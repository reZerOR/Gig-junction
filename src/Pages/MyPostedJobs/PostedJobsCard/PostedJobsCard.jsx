import React from "react";
import { Link } from "react-router-dom";

const PostedJobsCard = ({ card, handleDelete }) => {
  const { _id, job_title, deadline, max_price, min_price, img, description } =
    card;

  return (
    <div className="card w-96 bg-3 shadow-xl">
      <figure>
        <img className="w-full h-56" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{job_title}</h2>
        <p>{description.slice(0, 50)}...</p>
        <p className="font-semibold">Deadline: {deadline}</p>
        <p className="font-medium">
          <span className="font-bold">Price:</span> {min_price}$ - {max_price}$
        </p>
        <div className="card-actions justify-end">
          <Link className="w-full" to={`/update/${_id}`}>
            <button className=" w-full flex justify-center gap-2 bg-4 py-3 rounded-lg items-center font-bold">
              Update
            </button>
          </Link>
          <button className=" w-full flex justify-center gap-2 bg-2 py-3 rounded-lg items-center font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostedJobsCard;
