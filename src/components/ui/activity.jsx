import DataTable from "./DataTable";
import Aside from "./aside";
import { Eye, Download, Archive,PackageOpen } from "lucide-react";
import { Input } from "../ui/input";
import { DialogContract } from "./dialogcontracts";
import { useEffect, useContext, _useState } from "react";
import { Con } from "@/js/context";
import { Button } from "./button";
import { useState } from "react";
export default function ActivityTable() {
  const{activities,_setActivities}=useContext(Con);
   const [filterOption, setFilterOption] = useState("all");
     const[filter,setFilter]=useState([])
   const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "UserID", accessorKey: "userId" },
    { header: "Action", accessorKey: "action",cell: ({ row }) => {
      const action = row.original.action;
      let style =
        "px-3 py-1 rounded-full text-xs font-semibold capitalize";

      if (action === "add") style += " bg-green-100 text-green-700";
      else if (action === "edit") style += " bg-yellow-100 text-yellow-700";
      else if (action === "delete") style += " bg-red-100 text-red-700";
      else if (action === "login") style += " bg-blue-100 text-blue-700";
      else style += " bg-gray-100 text-gray-700";

      return <span className={style}>{action}</span>;
    }, },
    { header: "Details", accessorKey: "info",cell: ({ row }) => {
      const action = row.original.info;
      let style =
        "px-3 py-1 rounded-full text-xs font-semibold capitalize  bg-gray-100 text-gray-700";
      return<p>user <span className={style}>{action}</span> was Added </p>;
    }, },
    { header: "Time", accessorKey: "time" },
  ];
  useEffect(() => {
    setFilter(activities)
  }, [activities]);

  useEffect(()=>{
     if(filterOption==="all"){
      setFilter(activities)
    }
    else if(filterOption==="add"){
      const filter=activities.filter((data)=>data.action==="add")
     setFilter(filter)

    }
    else if(filterOption==="edit"){
       const filter=activities.filter((data)=>data.action==="edit")
    setFilter(filter)

    }

    
  },[filterOption])
  function handleFilter(e){
  if(e.target.value==="add"){
    const filter=activities.filter((data)=>data.action==="add")
    setFilter(filter)
  }
  else if(e.target.value==="edit"){
     const filter=activities.filter((data)=>data.archived==="edit")
     setFilter(filter)
  }
  else if(e.target.value==="login"){
    //when add api
  }
  else{
    setFilter(activities)
  }
   setFilterOption(e.target.value);
}
  return (
    <div className="flex min-h-screen w-full">
      {/* Main Content */}
      <main className="w-full p-3 rounded-md ">
        <div className="flex  flex-col md:flex-row items-center justify-between  gap-2 ">
          <h2 className="capitalize font-bold text-left text-black text-2xl">
            Activity
          </h2>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between md:items-center md:gap-2">
            <select
  value={filterOption}
  onChange={(e)=>handleFilter(e)}
  className="border p-2 rounded"
>
  <option value="all">All</option>
  <option value="add">Add</option>
    <option value="edit">Edited</option>
      <option value="login">Login</option>
</select>
          </div>
        </div>
        <div className="overflow-x-auto md:table-fixed">
  <DataTable columns={columns} data={filter} caption="A list of your activites." />
</div>
      </main>
    </div>
  );
}
