import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"

export default function Modal({ open, onOpenChange, order}) {
  return (
  <>
<Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent
        className="max-w-lg rounded-2xl shadow-2xl border-0 bg-white dark:bg-slate-900
          text-gray-800 dark:text-gray-100 transition-colors " >
    <DialogHeader className="space-y-1">
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Edit Order</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            You are editing order:{" "}
            <strong className="font-medium text-gray-900 dark:text-gray-100">
              {order?.id} </strong>
          </DialogDescription>
        </DialogHeader>
 <div className="py-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="customer">Customer</Label>
            <Input id="customer" defaultValue={order.customer} /></div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
 <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder={order.status}/>
  </SelectTrigger>
  <SelectContent className=' bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100'>
    <SelectItem value="Delivered">Delivered</SelectItem>
    <SelectItem value="Pending">Pending</SelectItem>
    <SelectItem value="system">Cancelled</SelectItem>
  </SelectContent>
</Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="total">Total</Label>
            <Input id="total" type="number" defaultValue={order.total} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" defaultValue={order.date} />
          </div>
        </div>

 <DialogFooter>
     <Button type="submit"
            className="px-5 py-2 rounded-lg w-full shadow-md bg-blue-600 hover:bg-blue-700 text-white transition">
            Save  </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )}
