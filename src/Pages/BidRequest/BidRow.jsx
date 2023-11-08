import axios from "axios";
import { useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const BidRow = ({ card }) => {
  const { _id, buyer_status, email, job_title, deadline } = card;
  const [tempStatus, setTampStatus] = useState(buyer_status);
  const handleAccept = () => {
    const accept = {
      status: "in progress",
      buyer_status: "in progress",
    };
    axios
      .put(`https://gigjunction-server.vercel.app/bidrequest/${_id}`, accept)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setTampStatus("in progress");
        }
      });
  };
  const handleReject = () => {
    const accept = {
      status: "canceled",
      buyer_status: "rejected",
    };
    axios
      .put(`https://gigjunction-server.vercel.app/bidrequest/${_id}`, accept)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setTampStatus("rejected");
        }
      });
  };

  return (
    <tr className="text-base">
      <td>
        <div className="text-lg font-bold">{job_title}</div>
      </td>
      <td>{email}</td>
      <td>{deadline}</td>
      <td>{tempStatus}</td>
      <th>
        {tempStatus === "pending" ? (
          <div className="flex gap-1 flex-col">
            <button onClick={handleAccept} className="bg-4 p-2 rounded-lg">
              Accept
            </button>
            <button onClick={handleReject} className="bg-2 p-2 rounded-lg">
              Reject
            </button>
          </div>
        ) : tempStatus === "in progress" ? (
          <ProgressBar
            percent={45}
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            transition="scale"
          />
        ) : (
          tempStatus === "complete" && (
            <ProgressBar
              percent={100}
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
              transition="scale"
            />
          )
        )}
      </th>
    </tr>
  );
};

export default BidRow;
