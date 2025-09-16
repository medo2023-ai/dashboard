import DataTable from "./DataTable";
import Aside from "./aside";
import { Eye, Download, Archive, ArchiveRestore } from "lucide-react";
import { DialogContract } from "./dialogcontracts";
import { useEffect, useContext, useState } from "react";
import { Con } from "@/js/context";
import { Button } from "./button";
import toast from "react-hot-toast";

export default function ContractPage() {
  const { data, setData } = useContext(Con);
  const [filterOption, setFilterOption] = useState("all");
  const [filter, setFilter] = useState([]);

  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Date", accessorKey: "date" },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <Button
          className={`${
            row.original.status
              ? "bg-green-700 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500"
              : "bg-red-700 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500"
          } text-white font-semibold capitalize`}
          size="sm"
          onClick={() => toggleStatus(row.original.id)}
        >
          {row.original.status ? "Active" : "Inactive"}
        </Button>
      ),
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="flex gap-3 justify-center">
          {/* View */}
          <Button asChild variant="ghost" size="icon" className="text-green-600 dark:text-green-400">
            <a href={row.original.fileUrl || "#"} target="_blank">
              <Eye />
            </a>
          </Button>

          {/* Download */}
          <Button asChild variant="ghost" size="icon" className="text-green-600 dark:text-green-400">
            <a href={row.original.fileUrl || "#"} download={row.original.fileName}>
              <Download />
            </a>
          </Button>

          {/* Archive / Unarchive */}
          {row.original.archived ? (
            <Button variant="ghost" size="icon" onClick={() => handleArchive(row.original.id)}>
              <ArchiveRestore className="text-blue-600 dark:text-blue-400" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => handleArchive(row.original.id)}>
              <Archive className="text-gray-600 dark:text-gray-400" />
            </Button>
          )}
        </div>
      ),
    },
  ];

  const initialData = [
    { name: "Contract A", status: true },
    { name: "Contract B", status: false },
    { name: "Contract C", status: true },
    { name: "Contract D", status: false },
  ].map((item, index) => ({
    ...item,
    id: index + 1,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    archived: false,
  }));

  useEffect(() => {
    setData(initialData);
  }, []);

  // Filter logic
  useEffect(() => {
    if (filterOption === "all") {
      setFilter(data);
    } else if (filterOption === "archived") {
      setFilter(data.filter((d) => d.archived));
    } else {
      setFilter(data.filter((d) => !d.archived));
    }
  }, [data, filterOption]);

  const toggleStatus = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  function handleArchive(id) {
    const item = data.find((i) => i.id === id);
    const newArchived = !item.archived;

    setData((prevData) =>
      prevData.map((i) => (i.id === id ? { ...i, archived: newArchived } : i))
    );

    toast.success(
      `"${item.name}" is now ${newArchived ? "archived" : "unarchived"}`
    );
  }

  return (
    <main className="w-full p-3 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h2 className="capitalize font-bold text-2xl">Contracts</h2>

        <div className="flex flex-col md:flex-row gap-2 items-center">
          <DialogContract />
          <select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
            className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="all">All</option>
            <option value="archived">Archived</option>
            <option value="unarchived">Unarchived</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto md:table-fixed mt-4">
        <DataTable
          columns={columns}
          data={filter}
          caption="A list of your contracts."
          className="bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-300"
        />
      </div>
    </main>
  );
}
