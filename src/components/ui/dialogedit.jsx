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
import { Pencil } from "lucide-react";

export function DialogEdit({ row }) {
  const { setUsers, setActivities } = useContext(Con);
  const [name, setName] = useState(row.original.name);
  const [email, setEmail] = useState(row.original.email);
  const [password, setPassword] = useState(row.original.password);
  const [role, setRole] = useState(row.original.role);
  const [open, setOpen] = useState(false); // control dialog open state

  const isFormInvalid = !name.trim() || !email.trim() || !password.trim();

  // Strong password regex
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleEdit = (e) => {
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

    setUsers((prev) =>
      prev.map((user) =>
        user.id === row.original.id
          ? { ...user, name, email, password, role }
          : user
      )
    );

    setActivities((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        userId: row.original.id,
        action: "edit",
        info: name,
        time: new Date().toLocaleString(),
      },
    ]);

    toast.success("User updated successfully!");
    setOpen(false); // close dialog after success
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-black dark:text-white">
        <form onSubmit={handleEdit}>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user details here. Password must be strong.
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
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
