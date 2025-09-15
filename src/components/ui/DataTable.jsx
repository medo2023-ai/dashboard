import {
  Table as ShadTable,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/Table"
import { useReactTable, getCoreRowModel, flexRender,getPaginationRowModel,getFilteredRowModel } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
export default function DataTable({ columns, data,caption }) {
   const [globalFilter, setGlobalFilter] = useState('')
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
      state: {
      globalFilter,
    },
    autoResetPageIndex: false,
     initialState: {
      pagination: {
        pageSize: 5, 
      },
    },
  })

  return (
  <div>
        <div className="flex items-center py-4 justify-center md:justify-start">
     <Input
  placeholder="Search "
  value={globalFilter}
  onChange={(e) => setGlobalFilter(e.target.value)}
  className="max-w-sm"
/>

      </div>
  <ShadTable>
    <TableCaption>{caption}</TableCaption>

    {/* Header */}
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id} className="text-center ">
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>

    {/* Body */}
    <TableBody>
      {table.getRowModel().rows.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </ShadTable>

  {/* pagination section outside table */}
  <div className="flex items-center justify-center space-x-2 py-4">
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      Previous
    </Button>

    <span className="text-sm font-medium">
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </span>

    <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      Next
    </Button>
  </div>
</div>

   
  )
}
