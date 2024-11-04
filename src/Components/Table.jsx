import React from 'react'
import { useTable } from 'react-table';

function Table() {
    const columns = React.useMemo(
        () => [
          { Header: 'Name', accessor: 'name' },
          { Header: 'Mobile', accessor: 'mobile' },
          { Header: 'Email', accessor: 'email' },
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
            Header: 'Report',
            accessor: 'report',
            Cell: ({ row }) => (
              <button className="text-blue-600 hover:underline">Report</button>
            ),
          },
          {
            Header: 'Delete',
            accessor: 'delete',
            Cell: ({ row }) => (
              <button className="text-red-600 hover:underline">X</button>
            ),
          },
        ],
        []
      );
    
      // Sample data (replace with actual data)
      const data = React.useMemo(
        () => [
          { name: 'xyz', mobile: '9123456789', email: 'xyz@gmail.com', city: '', reference: '', abroad: '', hobbies: '', about: '', extraCurriculum: '', qualification: '', careerChoice: '', occupation: '' },
          { name: 'Test', mobile: '1234567890', email: 'test@testing.com', city: '', reference: '', abroad: '', hobbies: '', about: '', extraCurriculum: '', qualification: '', careerChoice: '', occupation: '' },
          // Add more rows as needed
        ],
        []
      );
    
      // Create the table instance
      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
      });
    
      return (
        <div className="p-4 overflow-x-auto">
          <table {...getTableProps()} className="w-full text-left border  border-black">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} className="bg-black  text-white">
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className="p-2 border border-black">
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border border-black">
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="p-2 border border-black">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    
export default Table
