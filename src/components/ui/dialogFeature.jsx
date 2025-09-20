import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { useState, useEffect, useContext } from "react"
import { Con } from "@/js/context"
import toast from "react-hot-toast"

export function DialogFeature() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { packages, features, setFeature } = useContext(Con);
  const [open, setOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filter = packages.filter((p) => p.industry.toLowerCase() === selectedIndustry.toLowerCase());
    setFilter(filter);
  }, [selectedIndustry, packages]);

  const onSubmit = (data) => {
    const newFeature = {
      id: features.length + 1,
      title: data.title,
      desc: data.desc,
      cost: data.cost,
      time: data.time,
      industry: data.industry,
      package: data.package
    };

    setFeature([...features, newFeature]);
    toast.success("Feature added successfully!");
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Feature</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              Add New Feature
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Title */}
            <div className="grid gap-2">
              <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">Feature Title</Label>
              <Input
                id="title"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                {...register("title", { required: "Feature title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="desc" className="text-gray-700 dark:text-gray-300">Description</Label>
              <textarea
                id="desc"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md p-2 outline-none"
                {...register("desc", { required: "Description is required" })}
              ></textarea>
              {errors.desc && (
                <p className="text-red-500 text-sm">{errors.desc.message}</p>
              )}
            </div>

            {/* Cost */}
            <div className="grid gap-2">
              <Label htmlFor="cost" className="text-gray-700 dark:text-gray-300">Cost ($)</Label>
              <Input
                id="cost"
                type="number"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                {...register("cost", { required: "Cost is required" })}
              />
              {errors.cost && (
                <p className="text-red-500 text-sm">{errors.cost.message}</p>
              )}
            </div>

            {/* Implementation Time */}
            <div className="grid gap-2">
              <Label htmlFor="time" className="text-gray-700 dark:text-gray-300">Implementation Time</Label>
              <Input
                id="time"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="e.g., 2-3 weeks"
                {...register("time", { required: "Implementation time is required" })}
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time.message}</p>
              )}
            </div>

            {/* Industry */}
            <div className="grid gap-2">
              <Label htmlFor="industry" className="text-gray-700 dark:text-gray-300">Industry</Label>
              <select
                id="industry"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md p-2 outline-none"
                {...register("industry", { required: "Industry is required" })}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                <option value="">Select Industry</option>
                <option value="e-commerce">E-Commerce</option>
                <option value="education">Education</option>
                <option value="realestate">Real Estate</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology</option>
              </select>
              {errors.industry && (
                <p className="text-red-500 text-sm">{errors.industry.message}</p>
              )}
            </div>

            {/* Package */}
            <div className="grid gap-2">
              <Label htmlFor="package" className="text-gray-700 dark:text-gray-300">Package</Label>
              <select
                id="package"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md p-2 outline-none"
                {...register("package", { required: "Package is required" })}
              >
                <option value="">Select Package</option>
                {selectedIndustry &&
                  filter.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
              </select>
              {errors.package && (
                <p className="text-red-500 text-sm">{errors.package.message}</p>
              )}
            </div>
          </div>

          <DialogFooter className="p-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Feature</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
