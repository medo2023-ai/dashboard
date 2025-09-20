import { Card } from "./card"
import { useContext, useState } from "react"
import { Con } from "@/js/context"
import { Pencil, Trash2, PlusCircle } from "lucide-react"
import { Button } from "./button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function Services() {
  const { services, setServices, invoiceItems, setInvoiceItems } = useContext(Con);

  const [newService, setNewService] = useState({ title: "", price: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [editService, setEditService] = useState({ title: "", price: "", description: "" });

  // 🟢 Add item to invoice
  const handleAddItem = (item) => {
    const cost = parseFloat(String(item.price).replace(/[^0-9.]/g, "")) || 0;
    setInvoiceItems([...invoiceItems, { title: item.name, cost }]);
  };

  // 🟢 Delete service
  const handleDeleteService = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  // 🟢 Save new service
  const handleSaveNewService = () => {
    if (!newService.title || !newService.price) return;
    setServices([...services, { ...newService, items: [] }]);
    setNewService({ title: "", price: "", description: "" }); // reset
  };

  // 🟢 Save edited service
  const handleSaveEditService = () => {
    if (editIndex === null) return;
    const updated = [...services];
    updated[editIndex] = { ...editService, items: updated[editIndex].items };
    setServices(updated);
    setEditIndex(null);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="capitalize font-semibold text-lg md:text-xl text-left mb-6 text-gray-800 dark:text-gray-200">
        Additional Services:
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="shadow-md p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:-translate-y-2 transition duration-500 ease-in-out"
          >
            <div className="p-2">
              <p className="font-bold text-lg md:text-xl text-gray-900 dark:text-gray-100">{service.title}</p>
              <p className="font-bold text-blue-600 dark:text-blue-400">${service.price}</p>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>

            {/* Edit/Delete */}
            <div className="flex gap-4 justify-center py-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Pencil
                    onClick={() => {
                      setEditIndex(index);
                      setEditService(service);
                    }}
                    className="w-5 h-5 cursor-pointer text-blue-500 hover:scale-125 transition"
                  />
                </DialogTrigger>
                <DialogContent className="dark:bg-gray-900 dark:text-white">
                  <DialogHeader>
                    <DialogTitle>Edit Service</DialogTitle>
                  </DialogHeader>
                  <Input
                    placeholder="Title"
                    value={editService.title}
                    onChange={(e) => setEditService({ ...editService, title: e.target.value })}
                    className="w-full dark:bg-gray-800 dark:border-gray-600"
                  />
                  <Input
                    placeholder="Price"
                    value={editService.price}
                    onChange={(e) => setEditService({ ...editService, price: e.target.value })}
                    className="w-full dark:bg-gray-800 dark:border-gray-600"
                  />
                  <Input
                    placeholder="Description"
                    value={editService.description}
                    onChange={(e) =>
                      setEditService({ ...editService, description: e.target.value })
                    }
                    className="w-full dark:bg-gray-800 dark:border-gray-600"
                  />
                  <DialogFooter>
                    <Button onClick={handleSaveEditService} className="bg-blue-500 text-white hover:bg-blue-600">
                      Save
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Trash2
                onClick={() => handleDeleteService(index)}
                className="w-5 h-5 cursor-pointer text-red-500 hover:scale-125 transition"
              />
            </div>

            {/* Service Items */}
            <div className="space-y-3 mt-4">
              {service.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700"
                >
                  <span className="text-sm text-gray-800 dark:text-gray-300">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{item.price}</span>
                    <Button
                      size="sm"
                      onClick={() => handleAddItem(item)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:opacity-80 transition"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Add New Extra Service */}
      <div className="flex justify-center mt-8">
        <Dialog>
          <DialogTrigger asChild>
            <Card className="flex items-center justify-center border-dashed border-2 border-gray-400 dark:border-gray-600 cursor-pointer hover:border-sky-500 transition duration-500 ease-in-out rounded-2xl p-6 bg-gray-50 dark:bg-gray-800">
              <div className="text-center text-gray-700 dark:text-gray-200">
                <PlusCircle className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Add New Extra Service</p>
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="dark:bg-gray-900 dark:text-white">
            <DialogHeader>
              <DialogTitle>New Service</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Title"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
              className="w-full dark:bg-gray-800 dark:border-gray-600"
            />
            <Input
              placeholder="Price"
              value={newService.price}
              onChange={(e) => setNewService({ ...newService, price: e.target.value })}
              className="w-full dark:bg-gray-800 dark:border-gray-600"
            />
            <Input
              placeholder="Description"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              className="w-full dark:bg-gray-800 dark:border-gray-600"
            />
            <DialogFooter>
              <Button onClick={handleSaveNewService} className="bg-blue-500 text-white hover:bg-blue-600">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
