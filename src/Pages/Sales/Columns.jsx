"use client"
import { ArrowUpDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import ActionsMenu from "@/components/Sales/ActionsMenu"
import { filterFns } from "@tanstack/react-table"

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
     
<ArrowUpDown className="ml-2 h-4 w-4 text-black dark:text-white" />

        </Button>
      )
    },
  },
   {
     accessorKey: "team",
    header: "Team",
    cell : ({getValue})=>{
      const team = getValue()
   const colors = {
      Closer: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Agent: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Pricing: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    };


    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium text-left ${colors[team] || "bg-gray-600 text-white"}`}>
        {team}
      </span> )
    },
     filterFn:(row, columnId, filterValue)=>{
        if (filterValue === "All") return true;
        return row.getValue(columnId) === filterValue
     }
  },
  
{
    accessorKey: "actions",
    header: "Actions",
    cell: ({row})=>{

      const order = row.original
  
     
    
       return ( <>
        <ActionsMenu  order={order} />
          
                 </>
       )
    }
   
  },
 
]