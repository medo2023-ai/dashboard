"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import activity from "@/data/Activity";
import {
  flexRender,
  // flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"


export default function ActivitySectionTable({columns}) {
  
   const table = useReactTable({

    data: activity,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
     initialState: { pagination: { pageSize: 7 } },
  })

  return (
     <>
    <Table className="w-full border-collapse">
      <TableHeader className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead key={header.id} className="px-4 py-2 text-left">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

     
       {table.getRowModel().rows.map((row, index) => (
            <TableRow key={row.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
    </Table>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
     </>
  );
}
