'use client';
import Link from "next/link";
import React,{ useState, useEffect, useMemo } from "react";
import { useTable,useGlobalFilter,useSortBy,usePagination } from "react-table";

function ReactTable({ columns, data }) {

  const [site,setSite]=useState("people");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0,pageSize:3 },
  },useGlobalFilter,useSortBy,usePagination);
  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setGlobalFilter(value);
  };

  return (
    <>
    <input placeholder="Global Filter" onChange={handleFilterInputChange} />
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                // console.log(cell);
                // if(cell.column.id === "climate"){
                //     setSite("planet");
                //     return(
                //       <td {...cell.getCellProps()}><Link href={`/${site}/${cell.row.id}`}>{cell.render("Cell")}</Link></td>);
                //   }
                if(cell.column.id==="name"){
                return(
                <td {...cell.getCellProps()}><Link href={`/${site}/${cell.row.id}`}>{cell.render("Cell")}</Link></td>);
                }
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })
            }

            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[1, 2, 3, 4, 5].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default function Tableindex({results,columns}) {

  return <ReactTable columns={columns} data={results}/>;
}