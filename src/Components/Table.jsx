import React, { useState } from "react";
import toast from "react-hot-toast";
import { useTable } from "react-table";

function Table() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      {
        Header: "Phone Number",
        accessor: "mobile",
        Cell: ({ row }) => (
          <div>
            <div>{row.original.mobile}</div>
            <div>{row.original.alternateNo}</div>
          </div>
        ),
      },
      { Header: "Email", accessor: "email" },
      //   { Header: 'City', accessor: 'city' },
      //   { Header: 'Reference', accessor: 'reference' },
      //   { Header: 'Abroad', accessor: 'abroad' },
      //   { Header: 'Hobbies', accessor: 'hobbies' },
      //   { Header: 'About', accessor: 'about' },
      //   { Header: 'Extra curriculum', accessor: 'extraCurriculum' },
      //   { Header: 'Qualification', accessor: 'qualification' },
      //   { Header: 'Career choice', accessor: 'careerChoice' },
      //   { Header: 'Occupation', accessor: 'occupation' },
      {
        Header: "Report",
        accessor: "report",
        Cell: ({ row }) => (
          <button className="text-blue-600 hover:underline">Report</button>
        ),
      },
      {
        Header: "Delete",
        accessor: "delete",
        Cell: ({ row }) => (
          <button className="text-red-600 hover:underline">X</button>
        ),
      },
    ],
    []
  );

  const handlePasswordSubmit = () => {
    if (password === "Admin@123") {
      // Replace 'yourpassword' with your actual password
      setIsAuthorized(true);
    } else {
      toast.error("Incorrect Password");
    }
  };

  // Sample data (replace with actual data)
  const data = React.useMemo(
    () => [
      {
        name: "xyz",
        mobile: "9123456789",
        alternateNo: "34324234234234",
        email: "xyz@gmail.com",
        city: "",
        reference: "",
        abroad: "",
        hobbies: "",
        about: "",
        extraCurriculum: "",
        qualification: "",
        careerChoice: "",
        occupation: "",
      },
      {
        name: "Test",
        mobile: "1234567890",
        alternateNo: "34324234234234",
        email: "test@testing.com",
        city: "",
        reference: "",
        abroad: "",
        hobbies: "",
        about: "",
        extraCurriculum: "",
        qualification: "",
        careerChoice: "",
        occupation: "",
      },
      // Add more rows as needed
    ],
    []
  );

  // Create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="p-4 overflow-x-auto">
      {!isAuthorized ? (
        <div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="p-2 border border-gray-400"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 p-2 bg-gray-300 text-black"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          <button
            onClick={handlePasswordSubmit}
            className="ml-2 p-2 bg-blue-500 text-white"
          >
            Submit
          </button>
        </div>
      ) : (
        <table
          {...getTableProps()}
          className="w-full text-left border  border-black"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-black  text-white"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 border border-black"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border border-black">
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 border border-black"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
