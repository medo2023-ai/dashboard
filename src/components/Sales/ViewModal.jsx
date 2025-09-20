import { Dialog, DialogContent, DialogDescription, DialogHeader,
  DialogTitle} from "@/components/ui/dialog";
export default function ViewModal({ open, onOpenChange, order }) {
  if (!order) return null;
return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-lg rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-800 
                   bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Order Details
             </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Viewing details for order:{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              {order.id} </span>
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-500 dark:text-gray-400">Customer</span>
            <span className="font-medium">{order.customer}</span>
          </div>

         <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-500 dark:text-gray-400">Status</span>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full 
                ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" }`}
            >
              {order.status}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-500 dark:text-gray-400">Total</span>
            <span className="font-semibold">${order.total}</span>
          </div>

  <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-500 dark:text-gray-400">Date</span>
            <span>{order.date}</span>
          </div>

          <div>
            <span className="block text-gray-500 dark:text-gray-400 mb-2">
              Products
            </span>
            <ul className="space-y-2">
              {order.products.map((product, index) => (
                <li  key={index}
                  className="flex justify-between items-center bg-gray-50 dark:bg-slate-800 
                             px-3 py-2 rounded-lg" >
                  <span>{product.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                  </span>
                </li>
              ))}   </ul>
          </div>
        </div>    </DialogContent>
    </Dialog>
  );
}

