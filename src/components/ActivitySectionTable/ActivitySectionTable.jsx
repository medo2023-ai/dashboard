"use client";
import { Table, TableBody, TableCell, TableHead,
   TableHeader, TableRow,} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import activity from "@/data/Activity";
import {flexRender,getCoreRowModel,getPaginationRowModel,useReactTable,
} from "@tanstack/react-table"
import { useEffect, useState } from "react";
export default function ActivitySectionTable({columns}) {
  const initialPageSize = typeof window !== "undefined" && window.innerWidth < 768 ? 5 : 10;
  const [pageSize , setPageSize] = useState(initialPageSize )
  const [pagination , setPagination] = useState(
  {  pageIndex: 0,
        pageSize: initialPageSize,   }  )
   const table = useReactTable({
data: activity,
    columns,
    onPaginationChange : setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
     initialState: { pagination },
    state: {
      pagination  }} )

    useEffect(()=>{
      const handleResize =  ()=>{
         const newSize = window.innerWidth < 768 ? 5 : 10;
         setPageSize(newSize)
         table.setPageSize(newSize) }
       window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);  }, [table])

  return (
     <main className="mb-7 md:mb-3">
     
<div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-500 shadow-sm ">
  <Table className="w-full bg-white dark:bg-slate-900">
    <TableHeader className="bg-gray-100 dark:bg-slate-800">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-white cursor-pointer select-none"
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
                : "bg-gray-50 dark:bg-slate-800"
            } hover:bg-gray-100 transition-colors`}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                className="px-4 py-2 text-gray-800 dark:text-white text-left"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
</div>

  <div className="flex items-center justify-end space-x-2 pb-14 pt-4 md:py-4  dark:text-white">
        <Button
          variant="outline"
          size="sm" 
          className='border-gray-300 dark:border-gray-500'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"  className='border-gray-300 dark:border-gray-500'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
     </main>
  );
}
