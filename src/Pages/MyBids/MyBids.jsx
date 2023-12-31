import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/Provider";
import TableRow from "./TableRow";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
  const [bids, setBids] = useState([]);
  const { user } = useContext(authContext);
  useEffect(() => {
    axios
      .get(`https://gigjunction-server.vercel.app/bids?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBids(res.data);
      });
  }, [user]);
  console.log(bids);
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Gig Junk | My Bids</title>
      </Helmet>
      <h2 className="text-4xl my-20 text-white font-bold text-center">
        Your Bids
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
                <TableRow key={item._id} card={item}></TableRow>
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

export default MyBids;
