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
    cell : ({getValue})=>{
      const products = getValue()
      return products.map((p) => `${p.name}`).join(", "); 
    }
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
        colorClass = " text-yellow-600";
        // bg-yellow-100
        break;
      case "Delivered":
        colorClass = "text-green-600";
        // bg-green-100 
        break;
      case "Cancelled":
        colorClass = " text-red-500";
        // bg-red-100
        break;
      default:
        colorClass = "text-gray-800";
        // bg-gray-100 
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Date
     
<ArrowUpDown className="ml-2 h-4 w-4 text-black" />

        </Button>
      )
    },
  },

]