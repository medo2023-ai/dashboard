import DataTable from "./DataTable";
import Aside from "./aside";
import { Eye, Download, Archive,PackageOpen } from "lucide-react";
import { Input } from "../ui/input";
import { DialogContract } from "./dialogcontracts";
import { useEffect, useContext, useState } from "react";
import { Con } from "@/js/context";
import { Button } from "./button";
import toast from "react-hot-toast";
export default function ContractPage() {
  const { data, setData } = useContext(Con);
  const [filterOption, setFilterOption] = useState("all");
  const[filter,setFilter]=useState([])
  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Date", accessorKey: "date" },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <button
          className={`${
            row.original.status
              ? "bg-green-700 hover:bg-[#639888]"
              : "bg-red-700 hover:bg-[#D5626C]"
          } m-2 p-2 rounded-lg text-white transition duration-700 ease-in-out font-semibold capitalize`}
          onClick={() => toggleStatus(row.original.id)}
        >
          {row.original.status ? "active" : "inactive"}
        </button>
      ),
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({row}) => (
        <div className="flex md:flex-row gap-5 justify-center flex-col">
          
         
          {row.original.fileUrl?(
            <>
             <a href={row.original.fileUrl}
            className="text-green-600"
            >
              <Eye />
            </a>
             <a href={row.original.fileUrl}
            download={row.original.fileName}
            className="text-green-600"
            >
              <Download />
            </a>
            </>
           
          ):(
            <>
              <button>
            <Eye />
          </button>
             <button>
            <Download />
          </button>
            </>
           
          )}
          {row.original.archived?(
             <button onClick={()=>handleArchieve(row.original.id,row.original)
             }
          >
            <Archive />
          </button>

          ):(
            <button onClick={()=>handleArchieve(row.original.id)}
          >
            <PackageOpen/>
          </button>
          )
          }
          
         
        </div>
      ),
    },
  ];

  const initialData = [
    { name: "Contract A", status: true },
    { name: "Contract B", status: false },
    { name: "Contract C", status: true },
     { name: "Contract A", status: true },
    { name: "Contract B", status: false },
    { name: "Contract C", status: true } ,
    { name: "Contract A", status: true },
    { name: "Contract B", status: false },
    { name: "Contract C", status: true }
  ].map((item, index) => ({
    ...item,
    id: index + 1,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    archived:false,
  }));

  useEffect(() => {
    setData(initialData);
  }, []);
  useEffect(()=>{
    if(filterOption==="all"){
      setFilter(data)
    }
    else if(filterOption==="unarchived"){
      const filter=data.filter((data)=>data.archived===false)
     setFilter(filter)

    }
    else{
       const filter=data.filter((data)=>data.archived===true)
    setFilter(filter)

    }
    
  },[data])

  const toggleStatus = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
function handleArchieve(id) {
  const item = data.find(item => item.id === id);
  const newArchived = !item.archived;
  setData(prevData =>
    prevData.map(i =>
      i.id === id ? { ...i, archived: newArchived } : i
    )
  );
  toast.success(
    `"${item.name}" is now ${newArchived ? "archived" : "unarchived"}`
  );
}

function handleFilter(e){
  if(e.target.value==="archived"){
    const filter=data.filter((data)=>data.archived===true)
    setFilter(filter)
  }
  else if(e.target.value==="unarchived"){
     const filter=data.filter((data)=>data.archived===false)
     setFilter(filter)
  }
  else{
    setFilter(data)
  }
   setFilterOption(e.target.value);
}

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Aside />
      {/* Main Content */}
      <main className="w-full p-3 rounded-md ">
        <div className="flex  flex-col md:flex-row items-center justify-between  gap-2 ">
          <h2 className="capitalize font-bold text-left text-black text-2xl">
            contract
          </h2>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between md:items-center md:gap-2">
            <DialogContract />
            <select
  value={filterOption}
  onChange={(e)=>handleFilter(e)}
  className="border p-2 rounded"
>
  <option value="all">All</option>
  <option value="archived">Archived</option>
    <option value="unarchived">unArchived</option>
</select>

          </div>
        </div>
        <div className="overflow-x-auto md:table-fixed">
  <DataTable columns={columns} data={filter} caption="A list of your contracts." />
</div>
      </main>
    </div>
  );
}
