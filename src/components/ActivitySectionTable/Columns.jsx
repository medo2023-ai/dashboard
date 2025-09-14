

export  const Columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "user", header: "User" },
 
  { accessorKey: "description", header: "Description" ,
        cell: ({ row }) => (
      <div className="max-w-[200px] truncate text-sm text-gray-700 dark:text-gray-300">
        {row.original.description}
      </div>
    ),

  },
  { accessorKey: "date_time", header: "Date" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = (getValue() ).trim().toLowerCase();
      let color = "text-gray-600 font-semibold";
      if (status === "delivered") color = "text-green-600 font-semibold";
      else if (status === "pending") color = "text-yellow-600 font-semibold";
      else if (status === "cancelled") color = "text-red-500 font-semibold";
      else if (status === "in progress") color = "text-blue-600 font-semibold";
      return <span className={color}>{getValue()}</span>;
    },
  },
  { accessorKey: "related_item", header: "Related Item" },
];


