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
import _ from "lodash";
export function DialogUser() {
  const { users,setUsers } = useContext(Con);
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[password,setPassword]=useState("");
     const[role,setRole]=useState("");
     const{setActivities}=useContext(Con)
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
   function handleRoleChange(e) {
    setRole(e.target.value);
  }
  function handleAdd(e) {
    e.preventDefault();
    if (name.trim()==="" ||email.trim()===""||password.trim()==="") {
      toast.error("Please write all info");
      return;
    }
    setUsers((prev) => [
      ...prev,
      { 
        id:users.length+1, 
        name: name,
        email:email,
        password:password,
        role:role,
        status: false, 
        actions: "" ,
      }
    ]);
        setActivities((prev) => [
    ...prev,
    {
      id: prev.length + 1,
      userId:users.length+1,
      action: "add",
      info: name,
      time: new Date().toLocaleString(),
    },
  ])

    toast.success("User added successfully!");
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
  <Dialog>
  <DialogTrigger asChild>
    <Button>Add User</Button>
  </DialogTrigger>

  <DialogContent className="sm:max-w-[425px]">
    <form onSubmit={handleAdd}>
      <DialogHeader>
        <DialogTitle>New User</DialogTitle>
        <DialogDescription>
          Add a new user here. Click add when you're done.
        </DialogDescription>
      </DialogHeader>

      {/* Input name */}
      <div className="grid gap-4">
        <div className="grid gap-3 w-full">
          <Label htmlFor="name-1">Name</Label>
          <Input 
            id="name-1" 
            name="name" 
            value={name} 
            onChange={handleNameChange} 
            className="w-full" 
            placeholder="Enter  name"
          />
        </div>
      </div>
         {/* Input email */}
      <div className="grid gap-4">
        <div className="grid gap-3 w-full">
          <Label htmlFor="email-1">Email</Label>
          <Input 
            id="email-1" 
            name="email" 
            value={email} 
            onChange={handleEmailChange} 
            className="w-full" 
            placeholder="Enter email"
          />
        </div>
      </div>

      {/* Input password */}
      <div className="grid gap-4 mt-4">
        <div className="grid gap-3 w-full">
          <Label htmlFor="file-1">Password</Label>
          <Input 
            id="password-1" 
            name="password" 
            value={password}
            onChange={handlePasswordChange} 
            className="w-full" 
            type="text"
            
          />
        </div>
      </div>
          {/* Input role */}
      <div className="grid gap-4">
        <div className="grid gap-3 w-full">
          <Label htmlFor="email-1">Role</Label>
          <Input 
            id="role-1" 
            name="role" 
            value={role} 
            onChange={handleRoleChange} 
            className="w-full" 
            placeholder="Enter role"
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
       {name===""||email===""||password===""?(
    <Button type="submit">Add</Button>):(
   <DialogClose asChild>
    <Button type="submit">Add</Button>
  </DialogClose>

       )
       }
 
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
  )
}
