import { useState, useContext } from "react"
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
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import * as Icons from "lucide-react";

export function Dialogindustry() {
  const { industry, setIndustry } = useContext(Con);
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    if (industry.some((i) => i.id === data.id)) {
      toast.error("Industry ID already exists");
      return;
    }

    const IconComponent = Icons[data.icon];
    if (!IconComponent) {
      toast.error("Invalid icon name");
      return;
    }

    const newIndustry = {
      id: data.id,
      name: data.name,
      icon: IconComponent,
    };

    setIndustry([...industry, newIndustry]);
    toast.success("Industry added successfully!");
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Industry</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">
              Add New Industry
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mt-4">
            {/* Industry Name */}
            <div className="grid gap-2">
              <Label htmlFor="name-1" className="text-gray-700 dark:text-gray-300">
                Industry Name
              </Label>
              <Input
                id="name-1"
                {...register("name", { required: true })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Icon */}
            <div className="grid gap-2">
              <Label htmlFor="icon" className="text-gray-700 dark:text-gray-300">
                Icon component (Lucide)
              </Label>
              <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Go to{" "}
                    <a
                      href="https://lucide.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      lucide.dev
                    </a>
                  </li>
                  <li>Copy the icon name (e.g., ShoppingCart)</li>
                  <li>Paste it in the input field below</li>
                </ol>
              </DialogDescription>
              <Input
                id="icon"
                placeholder="e.g., ShoppingCart"
                {...register("icon", { required: true })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Industry ID */}
            <div className="grid gap-2">
              <Label htmlFor="id" className="text-gray-700 dark:text-gray-300">
                Industry ID
              </Label>
              <Input
                id="id"
                {...register("id", { required: true })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white transition">
              Add Industry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
