import React from "react";
import loadAssessmentsFile from "./Assessments";
import { useTable } from "react-table"; //https://react-table.js.org/installation
import styled from "styled-components";

//https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/basic?file=/src/App.js:1844-1855
//https://react-table.js.org/
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Table2(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: "NZBAT Assessment TimeTable",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Module",
            accessor: "group",
          },
          {
            Header: "Assessment ID",
            accessor: "AssID",
          },
          {
            Header: "Assessment Name",
            accessor: "AssName",
          },

          {
            Header: "Date Due",
            accessor: "DueDate",
          },
          {
            Header: "Passed",
            accessor: "passed",
          },
          {
            Header: "days",
            accessor: "days",
          },
        ],
      },
    ],
    []
  );
  const date = props.startDate;
  console.log("Table2 props", date);
  const data = React.useMemo(() => loadAssessmentsFile(date), [date]);

  return (
    <Styles>
      Course Start Date: {date.toDateString()}
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Table2;
