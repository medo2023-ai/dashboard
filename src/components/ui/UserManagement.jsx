import DataTable from "./DataTable";
import { DialogUser } from "./dialogUsers";
import { DialogEdit } from "../ui/dialogedit";
import { useEffect, useContext } from "react";
import { Con } from "@/js/context";

export default function UserManagementPage() {
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
          className={`m-2 p-2 rounded-lg text-white font-semibold transition duration-300 ease-in-out capitalize ${
            row.original.status
              ? "bg-green-700 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
              : "bg-red-700 hover:bg-red-500 dark:bg-red-600 dark:hover:bg-red-500"
          }`}
          onClick={() => toggleStatus(row.original.id)}
        >
          {row.original.status ? "active" : "inactive"}
        </button>
      ),
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => <DialogEdit row={row} />,
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
  ].map((item, index) => ({ ...item, id: index + 1, password: "1234" }));

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
    <main className="w-full p-3 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-4">
        <h2 className="capitalize font-bold text-2xl">Users</h2>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <DialogUser />
        </div>
      </div>

      <div className="overflow-x-auto md:table-fixed">
        <DataTable
          columns={columns}
          data={users}
          caption="A list of your users."
          className="bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-300"
        />
      </div>
    </main>
  );
}
