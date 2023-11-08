import React from "react";

const TableRow = ({ card }) => {
  console.log(card);
  const { email, job_title, deadline, status } = card;

  return (
    <tr className="text-base">
      <td>
        <div className="text-lg font-bold">{job_title}</div>
      </td>
      <td>{email}</td>
      <td>{deadline}</td>
      <td>{status}</td>
      <th>
        {status === "in progress" && (
          <button className="btn btn-ghost btn-xs">Complete</button>
        )}
      </th>
    </tr>
  );
};

export default TableRow;
