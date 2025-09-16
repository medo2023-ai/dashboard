import {
  Table as ShadTable,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ArrowUpDown } from "lucide-react"

export default function DataTable({ columns, data, caption }) {
  const [globalFilter, setGlobalFilter] = useState("")
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { globalFilter, sorting },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    autoResetPageIndex: false,
    initialState: { pagination: { pageSize: 5 } },
  })

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex items-center justify-between ">
        <Input
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
        />
      </div>
      {/* Table */}
      <div className="rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <ShadTable className="bg-white dark:bg-gray-800 text-black dark:text-white">
          <TableCaption className="text-gray-600 dark:text-gray-300">{caption}</TableCaption>

          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-center cursor-pointer select-none p-2 dark:text-white"
                    onClick={header.column.getToggleSortingHandler?.()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && (
                      <ArrowUpDown className="inline ml-2 h-4 w-4 text-gray-400 dark:text-gray-300" />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  {row.getVisibleCells().map((cell) => {
                    const value = cell.getValue()
                    return (
                      <TableCell
                        key={cell.id}
                        className={`text-center p-2 ${
                          cell.column.id === "status"
                            ? value === "Delivered"
                              ? "text-green-600 dark:text-green-400 font-medium"
                              : value === "Cancelled"
                              ? "text-red-500 dark:text-red-400 font-medium"
                              : "text-orange-500 dark:text-orange-400 font-medium"
                            : ""
                        }`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center p-2 text-gray-500 dark:text-gray-300">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </ShadTable>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-4 py-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <span className="text-sm font-medium text-black dark:text-white">
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
