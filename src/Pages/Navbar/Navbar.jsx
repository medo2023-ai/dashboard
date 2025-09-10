import { DropdownMenu,DropdownMenuContent,DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { useNotifications } from "@/context/Notification.context";
import { Bell, Moon } from "lucide-react";
export default function Navbar() {
  const { notifications} = useNotifications();

  return (
    <>
    <section className="flex items-center justify-end mt-8 container border-gray-200 dark:border-gray-700">
    <div className=" bg-primary px-4 py-2 rounded-full flex gap-6">

          <button
        // onClick={toggleDarkMode}
        className="p-1 rounded  dark:hover:bg-gray-700 transition"
      >
        <Moon size={24} className="text-white dark:text-gray-200" />
      </button>
     
        <DropdownMenu>
        <DropdownMenuTrigger className="relative focus:outline-none">
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {notifications.length}
            </span>
          )}
          <Bell size={24} className="text-white  dark:text-gray-200 cursor-pointer" />
        </DropdownMenuTrigger>

        <DropdownMenuContent side="bottom" align="end" className="w-48 bg-white">
          {/* <DropdownMenuLabel >Notifications</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          {notifications.length === 0 ? (
            <DropdownMenuItem className="text-gray-500">No notifications</DropdownMenuItem>
          ) : (
            notifications.map((notification, index) => (
              <DropdownMenuItem key={index}>{notification.message}</DropdownMenuItem>
            ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    
    </div>
      </section> 
     </>);
  }
  


  