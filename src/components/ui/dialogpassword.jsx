import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Con } from "@/js/context";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function DialogPassword() {
  const { users, setUsers } = useContext(Con);
  const currentUser = users?.length ? users[0] : null;
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      name: currentUser?.name || "",
      email: currentUser?.email || "",
      currentPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (data) => {
    if (!currentUser) {
      setError("root", { message: "No user found" });
      return;
    }

    if (data.currentPassword !== currentUser.password) {
      setError("currentPassword", { message: "Current password is incorrect" });
      return;
    }

    if (data.newPassword.trim() === "") {
      setError("newPassword", { message: "New password cannot be empty" });
      return;
    }

    // Update user info
    setUsers((prev) =>
      prev.map((u, i) =>
        i === 0
          ? {
              ...u,
              name: data.name,
              email: data.email,
              password: data.newPassword,
            }
          : u
      )
    );

    reset({
      name: data.name,
      email: data.email,
      currentPassword: "",
      newPassword: "",
    });

    toast.success("Account updated successfully!");
    setOpen(false); // close dialog after success
  };

  // Strong password rules
  const passwordRules = {
    required: "New password is required",
    minLength: { value: 8, message: "At least 8 characters" },
    validate: (value) => {
      const checks = [
        { regex: /[A-Z]/, msg: "uppercase letter" },
        { regex: /[a-z]/, msg: "lowercase letter" },
        { regex: /[0-9]/, msg: "number" },
        { regex: /[@$!%*?&]/, msg: "special character (@$!%*?&)" },
      ];
      const failed = checks.filter((c) => !c.regex.test(value));
      return (
        failed.length === 0 ||
        `Must include ${failed.map((f) => f.msg).join(", ")}`
      );
    },
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Change Info</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Update Account</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Change your name, email, or password.
            </DialogDescription>
          </DialogHeader>

          {/* Name */}
          <div className="w-full">
            <Label className="text-gray-700 dark:text-gray-200">Name</Label>
            <Input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-white w-full"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <Label className="text-gray-700 dark:text-gray-200">Email</Label>
            <Input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-white w-full"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Current Password */}
          <div className="w-full">
            <Label className="text-gray-700 dark:text-gray-200 ">
              Current Password
            </Label>
            <Input
              type="password"
              {...register("currentPassword", {
                required: "Current password is required",
              })}
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-white w-full"
            />
            {errors.currentPassword && (
              <p className="text-sm text-red-500">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="w-full">
            <Label className="text-gray-700 dark:text-gray-200">
              New Password
            </Label>
            <Input
              type="password"
              {...register("newPassword", passwordRules)}
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-white w-full"
            />
            {errors.newPassword && (
              <p className="text-sm text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {errors.root && (
            <p className="text-sm text-red-500">{errors.root.message}</p>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
