import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Con } from "@/js/context"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as Icons from "lucide-react"

export function Dialogpackage() {
  const { industry, packages, setPackage } = useContext(Con);
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    if (packages.some((i) => i.id === data.id)) {
      toast.error("Package ID already exists");
      return;
    }

    const IconComponent = Icons[data.icon];
    if (!IconComponent) {
      toast.error("Invalid icon name");
      return;
    }

    const newPackage = {
      id: data.id,
      name: data.name,
      icon: IconComponent,
      industry: data.industry,
    };

    setPackage([...packages, newPackage]);
    toast.success("Package added successfully!");
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Package</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-gray-900 dark:text-gray-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add New Package</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            {/* Package Name */}
            <div className="grid gap-3">
              <Label htmlFor="name" className="mt-3">Package Name</Label>
              <Input
                id="name"
                {...register("name", { required: true })}
                className="w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Icon Name */}
            <div className="grid gap-3">
              <Label htmlFor="icon">Icon component (Lucide)</Label>
              <DialogDescription className="dark:text-gray-400">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Go to{" "}
                    <a
                      href="https://lucide.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      lucide.dev
                    </a>
                  </li>
                  <li>Copy the icon name (e.g., ShoppingCart)</li>
                  <li>Paste it in the input field "Icon Name"</li>
                </ol>
              </DialogDescription>
              <Input
                id="icon"
                placeholder="ex: ShoppingCart"
                {...register("icon", { required: true })}
                className="w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Package ID */}
            <div className="grid gap-3">
              <Label htmlFor="id">Package ID</Label>
              <Input
                id="id"
                {...register("id", { required: true })}
                className="w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Industry Select */}
            <div className="grid gap-3">
              <Label htmlFor="industry">Industry</Label>
              <select
                id="industry"
                {...register("industry", { required: true })}
                className="outline-none border border-gray-500 p-2 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                {industry.map((e) => (
                  <option value={e.name} key={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="p-2">
            <DialogClose asChild>
              <Button variant="outline" className="dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="dark:bg-blue-600 dark:hover:bg-blue-500">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

