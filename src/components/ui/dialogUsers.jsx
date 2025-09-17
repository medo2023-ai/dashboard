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
import toast from "react-hot-toast";

export function DialogUser() {
  const { users, setUsers, setActivities } = useContext(Con);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = useState(false); // <-- control dialog open state

  const isFormInvalid = !name.trim() || !email.trim() || !password.trim();

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleAdd = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (!strongPasswordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character!"
      );
      return;
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      role,
      status: false,
      actions: "",
    };

    setUsers((prev) => [...prev, newUser]);
    setActivities((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        userId: newUser.id,
        action: "add",
        info: name,
        time: new Date().toLocaleString(),
      },
    ]);

    toast.success("User added successfully!");
    
    // Reset form
    setName("");
    setEmail("");
    setPassword("");
    setRole("");

    // Close the dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-black dark:text-white">
        <form onSubmit={handleAdd}>
          <DialogHeader>
            <DialogTitle>New User</DialogTitle>
            <DialogDescription>
              Add a new user here. Password must be strong.
            </DialogDescription>
          </DialogHeader>

          {/* Name */}
          <div className="grid gap-4">
            <div className="grid gap-2 w-full">
              <Label htmlFor="name-1" className="dark:text-gray-200">
                Name
              </Label>
              <Input
                id="name-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid gap-4 mt-3">
            <div className="grid gap-2 w-full">
              <Label htmlFor="email-1" className="dark:text-gray-200">
                Email
              </Label>
              <Input
                id="email-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid gap-4 mt-3">
            <div className="grid gap-2 w-full">
              <Label htmlFor="password-1" className="dark:text-gray-200">
                Password
              </Label>
              <Input
                id="password-1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter strong password"
              />
            </div>
          </div>

          {/* Role */}
          <div className="grid gap-4 mt-3">
            <div className="grid gap-2 w-full">
              <Label htmlFor="role-1" className="dark:text-gray-200">
                Role
              </Label>
              <Input
                id="role-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter role"
              />
            </div>
          </div>

          <DialogFooter className="mt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isFormInvalid}>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
