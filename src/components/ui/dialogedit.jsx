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
import toast from "react-hot-toast"
import { Pencil } from "lucide-react"

export function DialogEdit({ row }) {
  const {setUsers } = useContext(Con);
  const [name, setName] = useState(row.original.name);
  const [email, setEmail] = useState(row.original.email);
  const [password, setPassword] = useState(row.original.password);
  const [role, setRole] = useState(row.original.role);
  const{setActivities}=useContext(Con);

  function handleEdit(e) {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      toast.error("Please write all info");
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
  ])
    toast.success("User updated successfully!");
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleEdit}>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user details here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          {/* Name */}
          <div className="grid gap-4">
            <div className="grid gap-3 w-full">
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                placeholder="Enter name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid gap-4">
            <div className="grid gap-3 w-full">
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                placeholder="Enter email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid gap-4 mt-4">
            <div className="grid gap-3 w-full">
              <Label htmlFor="password-1">Password</Label>
              <Input
                id="password-1"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                type="text"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Role */}
          <div className="grid gap-4">
            <div className="grid gap-3 w-full">
              <Label htmlFor="role-1">Role</Label>
              <Input
                id="role-1"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full"
                placeholder="Enter role"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {name === "" || email === "" || password === "" ? (
              <Button type="submit">Save Changes</Button>
            ) : (
              <DialogClose asChild>
                <Button type="submit">Save Changes</Button>
              </DialogClose>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
