import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTable } from "react-table";

function Table() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [table, setTable] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25); // Default rows per page to 25

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      {
        Header: "Phone Number",
        accessor: "phone",
        Cell: ({ row }) => (
          <div>
            <div>{row.original.phone}</div>
            <div>{row.original.alt_phone}</div>
          </div>
        ),
      },
      { Header: "Email", accessor: "email" },
      {
        Header: "Report",
        accessor: "report",
        Cell: ({ row }) => (
          <button
            className="text-blue-600 hover:underline"
            onClick={() =>
              handleDownloadReport(row.original.id, row.original.pdf_link)
            }
          >
            Report
          </button>
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
      setIsAuthorized(true);
    } else {
      toast.error("Incorrect Password");
    }
  };

  const getTable = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/swot/studentdetails/"
      );
      setTable(response.data);
    } catch (err) {
      toast.error("Couldn't get student details");
    }
  };

  useEffect(() => {
    getTable();
  }, []);

  // Filtering data based on search term
  const filteredData = table.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: paginatedData, // Use the paginated data here
    });

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };

  const handleDownloadReport = async (studentId, pdfLink) => {
    try {
      // Fetch the file as a Blob
      const response = await fetch(pdfLink);
      const blob = await response.blob();

      // Create a download link and trigger it
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Report_${studentId}.pdf`); // Define filename here
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Could not download report");
    }
  };

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
        <div>
          {/* Rows per page selector */}
          <div className="mb-4 flex justify-center items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to the first page when filtering
              }}
              placeholder="Search by Name, Email, or Phone"
              className="p-2 border border-gray-400"
            />
            <div className="flex-1">
              <label htmlFor="rowsPerPage" className="mr-2">
                Rows per page:
              </label>
              <select
                id="rowsPerPage"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className="p-2 border border-gray-400"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`p-2 ${
                  currentPage === 1 ? "text-gray-400" : "text-black"
                }`}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 ${
                  currentPage === totalPages ? "text-gray-400" : "text-black"
                }`}
              >
                Next
              </button>
            </div>
          </div>
          <table
            {...getTableProps()}
            className="w-full text-left border border-black"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className="bg-black text-white"
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
          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`p-2 ${
                currentPage === 1 ? "text-gray-400" : "text-black"
              }`}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 ${
                currentPage === totalPages ? "text-gray-400" : "text-black"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
