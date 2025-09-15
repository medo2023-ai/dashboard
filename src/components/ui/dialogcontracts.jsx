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
export function DialogContract() {
  const { data,setData } = useContext(Con);
  const [name, setName] = useState("");
  const {file, setFile} = useContext(Con); 
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleFileChange(e) {
    setFile(e.target.files[0]); 
  }
  function handleAdd(e) {
    e.preventDefault();
    if (!name.trim() || !file) {
      toast.error("Please enter a name and select a file!");
      return;
    }
    setData((prev) => [
      ...prev,
      { 
        id:data.length+1, 
        name: name, 
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), 
        status: false, 
        actions: "" ,
        fileName: file.name,
        fileUrl: URL.createObjectURL(file),
        archived:false,
      }
    ]);

    toast.success("Contract added successfully!");
    setName(""); 
    setFile(null);
  }

  return (
  <Dialog>
  <DialogTrigger asChild>
    <Button>Add Contract</Button>
  </DialogTrigger>

  <DialogContent className="sm:max-w-[425px]">
    <form onSubmit={handleAdd}>
      <DialogHeader>
        <DialogTitle>New contract</DialogTitle>
        <DialogDescription>
          Add a new contract here. Click add when you're done.
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
            placeholder="Enter contract name"
          />
        </div>
      </div>

      {/* Input file */}
      <div className="grid gap-4 mt-4">
        <div className="grid gap-3 w-full">
          <Label htmlFor="file-1">Upload file</Label>
          <Input 
            id="file-1" 
            name="file" 
            onChange={handleFileChange} 
            className="w-full cursor-pointer" 
            type="file"
          />
        </div>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
       {file===null||name===""?(
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
