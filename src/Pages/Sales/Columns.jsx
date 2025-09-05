"use client"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export const columns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({getValue})=>{
        const status = getValue();
        let colorClass = "";

    switch (status) {
      case "Pending":
        colorClass = "bg-yellow-100 text-yellow-800";
        break;
      case "Delivered":
        colorClass = "bg-green-100 text-green-800";
        break;
      case "Cancelled":
        colorClass = "bg-red-100 text-red-800";
        break;
      default:
        colorClass = "bg-gray-100 text-gray-800";
    }

    return (
      <span className={`px-2 py-0.5 rounded-full text-sm font-medium ${colorClass}`}>
        {status}
      </span>
    )
    }
  },
  {
   
 accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button className=''
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
     
<ArrowUpDown className="ml-2 h-4 w-4 text-black" />

        </Button>
      )
    },
  },

]