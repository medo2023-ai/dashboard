"use client";
import { Button } from "@/components/ui/button";
import { flexRender, getCoreRowModel, useReactTable, getFilteredRowModel, 
  getSortedRowModel, getPaginationRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const initialPageSize = typeof window !== "undefined" && window.innerWidth < 768 ? 5 : 10;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [pagination, setPagination] = useState({
  pageIndex: 0,
  pageSize: initialPageSize,
});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
     onPaginationChange: setPagination, 
    state: {
      sorting,
      columnFilters,
      pagination,
    },
  });

useEffect(() => {
  const handleResize = () => {
    const newSize = window.innerWidth < 768 ? 5 : 10;
    setPageSize(newSize);
    table.setPageSize(newSize);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [table]);

  return (
    <div className="">
      <div className="flex items-center pb-4  w-full">
        <Input
          placeholder="Filter IDs..."
          value={table.getColumn("id")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("id")?.setFilterValue(event.target.value)
          }
          className="w-full text-slate-700 dark:text-white  border border-gray-300 dark:border-gray-500 focus:border-slate-500 focus:ring focus:ring-blue-200 rounded-md placeholder:text-gray-100"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-500 shadow-sm">
        <Table className="min-w-full bg-white dark:bg-slate-800">
          <TableHeader className="bg-gray-100 dark:bg-slate-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className='border-b border-gray-300 dark:border-gray-500'>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="font-semibold text-gray-700 dark:text-white text-left px-4 py-2 cursor-pointer select-none"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-white dark:bg-slate-900"
                      : "bg-white dark:bg-slate-800"
                  } hover:bg-gray-100 transition-colors text-left border-b border-gray-300 dark:border-gray-500`}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                    
  className='px-4 py-2 text-[12px] md:text-base text-gray-800 dark:text-white '
>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>



              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500 dark:text-white"
                >
                  No results.{" "}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border-gray-300 dark:border-gray-500 text-gray-700 dark:text-white"
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border-gray-300 dark:border-gray-500 text-gray-700 dark:text-white"
        >
          Next{" "}
        </Button>
      </div>
    </div>
  );  }
