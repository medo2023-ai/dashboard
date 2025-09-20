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

export function DialogReset({ info }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { packages, features, setFeature } = useContext(Con);
  const [open, setOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    if (info) {
      reset(info);
    }
  }, [info, reset]);
  useEffect(() => {
    const filter = packages.filter(
      (p) => p.industry.toLowerCase() === selectedIndustry.toLowerCase()
    );
    setFilter(filter);
  }, [selectedIndustry, packages]);

  const onSubmit = (data) => {
    const updatedFeatures = features.map((f) =>
      f.id === info.id ? { ...f, ...data } : f
    );

    setFeature(updatedFeatures);
    toast.success("Feature updated successfully!");
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-green-500 text-white border-none">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Title */}
            <div className="grid gap-3">
              <Label htmlFor="title">Feature Title</Label>
              <Input
                id="title"
                className="w-full"
                {...register("title", { required: "Feature title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="grid gap-3">
              <Label htmlFor="desc">Description</Label>
              <textarea
                id="desc"
                className="outline-none border border-gray-500 p-2 rounded-md"
                {...register("desc", { required: "Description is required" })}
              ></textarea>
              {errors.desc && (
                <p className="text-red-500 text-sm">{errors.desc.message}</p>
              )}
            </div>

            {/* Cost */}
            <div className="grid gap-3">
              <Label htmlFor="cost">Cost ($)</Label>
              <Input
                id="cost"
                type="number"
                className="w-full"
                {...register("cost", { required: "Cost is required" })}
              />
              {errors.cost && (
                <p className="text-red-500 text-sm">{errors.cost.message}</p>
              )}
            </div>

            {/* Implementation Time */}
            <div className="grid gap-3">
              <Label htmlFor="time">Implementation Time</Label>
              <Input
                id="time"
                className="w-full placeholder:text-gray-500"
                placeholder="e.g., 2-3 weeks"
                {...register("time", { required: "Implementation time is required" })}
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time.message}</p>
              )}
            </div>

            {/* Industry */}
            <div className="grid gap-3">
              <Label htmlFor="industry">Industry</Label>
              <select
                id="industry"
                className="outline-none border border-gray-500 p-2 rounded-md"
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
            <div className="grid gap-3">
              <Label htmlFor="package">Package</Label>
              <select
                id="package"
                className="outline-none border border-gray-500 p-2 rounded-md"
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
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
