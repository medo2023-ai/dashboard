import { MoreVertical, Edit, Trash2, Eye, Clock, XCircle, CheckCircle, Shuffle, FileText, UserCheck } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import Modal from "./Modal"
import ViewModal from "./ViewModal"
import generateInvoice from "../../Pages/utils/Invoice/generateInvoice"
import Staff from "@/data/staffList/staffList"

export default function ActionsMenu({ order,  onDelete }) {
    const [open, setOpen] = useState(false)
    const [view, setView] = useState(false)

  return ( <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition">
          <MoreVertical className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border border-gray-200 dark:border-slate-700 rounded-lg shadow-md bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200"
      >
        <DropdownMenuItem
          onClick={() => setView(true)}
          className="hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:text-blue-300 text-blue-600 dark:text-blue-400 cursor-pointer">
          <Eye className="mr-2 h-4 w-4 text-blue-500 dark:text-blue-400" /> View
        </DropdownMenuItem>


        <DropdownMenuItem onClick={() => setOpen(true)}
       
          className="hover:bg-green-100 dark:hover:bg-green-900 dark:hover:text-green-300 text-green-600 dark:text-green-400 cursor-pointer"
        >
          <Edit  className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" /> Edit
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onDelete}
          className="hover:bg-red-100 dark:hover:bg-red-900 dark:hover:text-red-300 text-red-600 dark:text-red-400 cursor-pointer"
        >
          <Trash2 className="mr-2 h-4 w-4 text-red-500 dark:text-red-400"  /> Delete
        </DropdownMenuItem>

<DropdownMenuItem
    onClick={() => generateInvoice(order)}
  className="hover:bg-orange-100 dark:hover:bg-orange-900 dark:hover:text-orange-300 text-orange-600 dark:text-orange-400 cursor-pointer"
>
  <FileText className="mr-2 h-4 w-4 text-orange-500 dark:text-orange-400" /> 
  Download Invoice
</DropdownMenuItem>

     <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer text-purple-500 dark:text-purple-300">
         <Shuffle className="mr-2 h-4 w-4" />
            Change Status
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='border-gray-200 dark:border-slate-700 dark:bg-slate-900'>
            <DropdownMenuItem
              onClick={() => onStatusChange("Delivered")}
              className="hover:bg-green-100 dark:hover:bg-green-900 text-green-600 dark:text-green-400 cursor-pointer"
            >
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 
              Mark as Delivered
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => onStatusChange("Pending")}
              className="hover:bg-yellow-100 dark:hover:bg-yellow-900 text-yellow-600 dark:text-yellow-400 cursor-pointer"
            >
              <Clock className="mr-2 h-4 w-4 text-yellow-500" /> 
              Mark as Pending
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => onStatusChange("Cancelled")}
              className="hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400 cursor-pointer"
            >
              <XCircle className="mr-2 h-4 w-4 text-red-500" /> 
              Mark as Cancelled
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

<DropdownMenuSub>
  <DropdownMenuSubTrigger className="cursor-pointer text-teal-600 dark:text-teal-400">
    <UserCheck className="mr-2 h-4 w-4" />
    Assign to Staff
  </DropdownMenuSubTrigger>
  <DropdownMenuSubContent className="border-gray-200 dark:border-slate-700 dark:bg-slate-900">
    {Staff.map((staff) => (
      <DropdownMenuItem
        key={staff.id}
        onClick={() => onAssign(order.id, staff.id)}
        className="hover:bg-teal-100 dark:hover:bg-teal-800 text-teal-600 dark:text-teal-400 cursor-pointer"
      >
        {staff.name}
      </DropdownMenuItem>
    ))}
  </DropdownMenuSubContent>
</DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>

      <Modal open={open} onOpenChange={setOpen} order={order} />
      <ViewModal open={view} onOpenChange={setView} order={order} />
     </>
  )
}

