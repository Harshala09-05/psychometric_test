import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTable } from "react-table";
import * as XLSX from "xlsx";

function Table() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [table, setTable] = useState([
    // {
    //   id: 1,
    //   name: "Harshala Patil",
    //   email: "harsadshayuyuasfgawdu09dad@gmail.com",
    //   phone: "1234567890",
    //   alt_phone: "1234567890",
    //   alt_email: "antimayadtytav3awd102002@gmail.com",
    //   grade: "10th",
    //   school_name: "holy paradise high school",
    //   pdf_link:
    //     "https://psychometric-data.s3.ap-south-1.amazonaws.com/SWOT_Test_Report_harsadshayuyuasfgawdu09dad@gmail.com_20241111181419.pdf",
    // },
    // {
    //   id: 2,
    //   name: "Harshala Patil",
    //   email: "harsadshayuyuasfgaggdu09dad@gmail.com",
    //   phone: "1234567890",
    //   alt_phone: "1234567890",
    //   alt_email: "antimayadtytav3awxxd102002@gmail.com",
    //   grade: "10th",
    //   school_name: "holy paradise high school",
    //   pdf_link:
    //     "https://psychometric-data.s3.ap-south-1.amazonaws.com/SWOT_Test_Report_harsadshayuyuasfgaggdu09dad@gmail.com_20241111181536.pdf",
    // },
    // {
    //   id: 3,
    //   name: "Harshala Patil",
    //   email: "harsadshayuydduasfgaggdu09dad@gmail.com",
    //   phone: "1234567890",
    //   alt_phone: "1234567890",
    //   alt_email: "antimayadtytadev3awxxd102002@gmail.com",
    //   grade: "10th",
    //   school_name: "holy paradise high school",
    //   pdf_link:
    //     "https://psychometric-data.s3.ap-south-1.amazonaws.com/SWOT_Test_Report_harsadshayuydduasfgaggdu09dad@gmail.com_20241111181616.pdf",
    // },
    // {
    //   id: 4,
    //   name: "Harshala Patil",
    //   email: "harsadshayuydduasfgdsaggdu09dad@gmail.com",
    //   phone: "1234567890",
    //   alt_phone: "1234567890",
    //   alt_email: "antimayadtytadesdfv3awxxd102002@gmail.com",
    //   grade: "10th",
    //   school_name: "holy paradise high school",
    //   pdf_link:
    //     "https://psychometric-data.s3.ap-south-1.amazonaws.com/SWOT_Test_Report_harsadshayuydduasfgdsaggdu09dad@gmail.com_20241111181802.pdf",
    // },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      setSelectedRows(paginatedData);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (row) => {
    setSelectedRows((prev) =>
      prev.includes(row) ? prev.filter((r) => r !== row) : [...prev, row]
    );
  };

  const deleteRow = async (id) => {
    try {
      await axios.delete("http://127.0.0.1:8000/swot/studentdetails/", {
        data: { id: id },
      });
      setTable((prev) => prev.filter((row) => row.id !== id));
      toast.success("Student deleted successfully.");
    } catch (error) {
      toast.error("Could not delete student.");
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: (
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        ),
        accessor: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedRows.includes(row.original)}
            onChange={() => handleRowSelect(row.original)}
          />
        ),
      },
      { Header: "Name", accessor: "name" },
      { Header: "Year Of Study", accessor: "grade" },
      { Header: "School Name", accessor: "school_name" },
      {
        Header: "Phone",
        accessor: "phone",
        Cell: ({ row }) => (
          <div>
            <div>{row.original.phone}</div>
            <div>
              {row.original.alt_phone
                ? `(Parent) ${row.original.alt_phone}`
                : ""}
            </div>
          </div>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ row }) => (
          <div>
            <div>{row.original.email}</div>
            <div>
              {row.original.alt_email
                ? `(Parent) ${row.original.alt_email}`
                : ""}
            </div>
          </div>
        ),
      },

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
          <button
            className="text-red-600 hover:underline"
            onClick={() => deleteRow(row.original.id)}
          >
            X
          </button>
        ),
      },
    ],
    [selectedRows, selectAll]
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

      const sortedData = response.data.sort(
        (a, b) => new Date(b.id) - new Date(a.id)
      );

      setTable(sortedData);
    } catch (err) {
      toast.error("Couldn't get student details");
    }
  };

  useEffect(() => {
    getTable();
  }, []);

  const exportSelectedRowsToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(selectedRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Selected Rows");
    XLSX.writeFile(wb, "Selected_Rows.xlsx");
  };
  const exportAllRowsToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Table Data");
    XLSX.writeFile(wb, "All_Table_Data.xlsx");
  };

  const filteredData = table.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: paginatedData,
    });

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleDownloadReport = async (studentId, pdfLink) => {
    try {
      const response = await fetch(pdfLink);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Report_${studentId}.pdf`);
      document.body.appendChild(link);
      link.click();

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
          <div className="mb-4 flex justify-between items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by Name, Email, or Phone"
              className="p-2 border border-gray-400"
            />
            <div className="flex items-center">
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
            <div className="space-x-3 ">
              <button
                onClick={exportSelectedRowsToExcel}
                className="p-2 bg-green-500 text-white"
              >
                Export Selected Rows
              </button>
              <button
                onClick={exportAllRowsToExcel}
                className="p-2 bg-blue-500 text-white"
              >
                Export All Table Data
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
