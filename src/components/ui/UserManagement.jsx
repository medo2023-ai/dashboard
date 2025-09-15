import DataTable from "./DataTable";
import Aside from "./aside";
import { Pencil } from "lucide-react";
import { DialogUser } from "./dialogUsers";
import { useEffect, useContext,} from "react";
import { Con } from "@/js/context";
import { Button } from "./button";
import {DialogEdit} from"../ui/dialogedit"
export default function UserManagementtPage() {
  const { users, setUsers } = useContext(Con);
  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
     { header: "Password", accessorKey: "password" },
      { header: "Role", accessorKey: "role" },

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
          <DialogEdit row={row}></DialogEdit>
        </div>
      ),
    },
  ];

  const initialData = [
  { name: "Ahmed Ali", email: "ahmed.ali@mail.com", role: "Admin", status: true },
  { name: "Sara Hassan", email: "sara.hassan@mail.com", role: "Editor", status: false },
  { name: "Mohamed Samir", email: "mohamed.samir@mail.com", role: "Viewer", status: true },
  { name: "Laila Ibrahim", email: "laila.ibrahim@mail.com", role: "Admin", status: true },
  { name: "Omar Khaled", email: "omar.khaled@mail.com", role: "Editor", status: false },
  { name: "Nour Adel", email: "nour.adel@mail.com", role: "Viewer", status: true },
  { name: "Hossam Fathy", email: "hossam.fathy@mail.com", role: "Editor", status: false },
  { name: "Mariam Youssef", email: "mariam.y@mail.com", role: "Viewer", status: false },
  { name: "Yasser Ahmed", email: "yasser.ahmed@mail.com", role: "Admin", status: true },
  { name: "Dina Magdy", email: "dina.magdy@mail.com", role: "Viewer", status: false },
  { name: "Karim Salah", email: "karim.salah@mail.com", role: "Editor", status: false },
  { name: "Rania Nabil", email: "rania.nabil@mail.com", role: "Viewer", status: true },
  { name: "Tamer Mostafa", email: "tamer.mostafa@mail.com", role: "Editor", status: false },
  { name: "Huda Reda", email: "huda.reda@mail.com", role: "Admin", status: false },
  { name: "Samir Adel", email: "samir.adel@mail.com", role: "Viewer", status: true },
  { name: "Aya Fares", email: "aya.fares@mail.com", role: "Editor", status: true },
  { name: "Mahmoud Gamal", email: "mahmoud.g@mail.com", role: "Admin", status: false },
  { name: "Heba Lotfy", email: "heba.lotfy@mail.com", role: "Viewer", status: true },
  { name: "Adel Morsi", email: "adel.morsi@mail.com", role: "Editor", status: true },
  { name: "Mona Essam", email: "mona.essam@mail.com", role: "Viewer", status: false },
  ].map((item, index) => ({
    ...item,
    id: index + 1,
    password:"1234",
  }));

  useEffect(() => {
    setUsers(initialData);
  }, []);
  const toggleStatus = (id) => {
    setUsers((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Aside />
      {/* Main Content */}
      <main className="w-full p-3 rounded-md ">
        <div className="flex  flex-col md:flex-row items-center justify-between  gap-2 ">
          <h2 className="capitalize font-bold text-left text-black text-2xl">
            users
          </h2>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between md:items-center md:gap-2">
            <DialogUser/>
          </div>
        </div>
        <div className="overflow-x-auto md:table-fixed">
  <DataTable columns={columns} data={users} caption="A list of your users." />
</div>
      </main>
    </div>
  );
}
