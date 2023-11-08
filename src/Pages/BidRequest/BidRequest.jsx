import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/Provider";
import axios from "axios";
import BidRow from "./BidRow";

const BidRequest = () => {
  const [bids, setBids] = useState([]);
  const { user } = useContext(authContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/bidrequest?email=${user?.email}`)
      .then((res) => {
        setBids(res.data);
      });
  }, [user]);
  console.log(bids);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl my-20 font-bold text-center text-white">
        Bid Requests
      </h2>
      {bids.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-2 font-bold text-white text-xl text-center">
              <tr>
                <th>Job Title</th>
                <th>Email</th>
                <th>Deadline</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center bg-3">
              {bids.map((item) => (
                <BidRow key={item._id} card={item}></BidRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-white text-3xl font-bold">
          Ohh There Is No Bids
        </h2>
      )}
    </div>
  );
};

export default BidRequest;
