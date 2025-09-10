

export  const Columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "user", header: "User" },
 
  { accessorKey: "description", header: "Description" },
  { accessorKey: "date_time", header: "Date & Time" },
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


