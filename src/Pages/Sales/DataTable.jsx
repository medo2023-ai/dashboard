"use client"
import { Button } from "@/components/ui/button"
import {
 
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from "react";


export function DataTable({columns,data,}) {

   const [sorting, setSorting] = React.useState([]);
   const [columnFilters, setColumnFilters] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
     getPaginationRowModel: getPaginationRowModel(),
     onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (

<div className="p-4">

<div className="flex items-center py-4 w-full">
    <Input
      placeholder="Filter IDs..."
      value={(table.getColumn("id")?.getFilterValue()) ?? ""}
      onChange={(event) =>
        table.getColumn("id")?.setFilterValue(event.target.value)
      }
      className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md"
    />
  </div>

 
  <div className="overflow-hidden rounded-lg border shadow-sm">
    <Table className="min-w-full bg-white">
      <TableHeader className="bg-gray-100">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className="font-semibold text-gray-700 text-left px-4 py-2 cursor-pointer select-none"
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
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        } hover:bg-gray-100 transition-colors text-left`}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="px-4 py-2 text-gray-800">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>

  {/* Pagination */}
  <div className="flex items-center justify-end space-x-2 py-4">
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
      className="border-gray-300 text-gray-700 hover:bg-gray-100"
    >
      Previous
    </Button>
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
      className="border-gray-300 text-gray-700 hover:bg-gray-100"
    >
      Next
    </Button>
  </div>

</div>


)
}