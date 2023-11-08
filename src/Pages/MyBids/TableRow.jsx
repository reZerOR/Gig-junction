import axios from "axios";
import React, { useState } from "react";

const TableRow = ({ card }) => {
  console.log(card);
  const { _id, email, job_title, deadline, status } = card;
  const [tempStatus, setTampStatus] = useState(status);

  const handleComplete = () => {
    const accept = {
      status: "complete",
      buyer_status: "complete",
    };
    axios.put(`http://localhost:5000/bidrequest/${_id}`, accept).then((res) => {
      if (res.data.modifiedCount > 0) {
        setTampStatus("complete");
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
        {tempStatus === "in progress" && (
          <button onClick={handleComplete} className="bg-4 p-2 rounded-lg">
            Complete
          </button>
        )}
      </th>
    </tr>
  );
};

export default TableRow;
