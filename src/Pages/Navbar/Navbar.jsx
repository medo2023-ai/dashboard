import { DropdownMenu,DropdownMenuContent,DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { useNotifications } from "@/context/Notification.context";
import { Bell, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { notifications} = useNotifications();
  const [isDark,setIsDark] = useState(false);
  useEffect(()=>{
if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }}, [])

function toggleDarkMode(){
   document.documentElement.classList.toggle("dark");
   const newTheme = document.documentElement.classList.contains("dark")?"dark" : "light"
  localStorage.setItem("theme" , newTheme )
   setIsDark(newTheme === "dark");
  }

  return (
    <>
    <section className="flex items-center justify-end pt-8 container border-gray-200 ">
    <div className=" bg-primary px-4 py-2 rounded-full flex gap-6 dark:bg-gray-800">

          <button
         onClick={toggleDarkMode}
        className="p-1 rounded   transition"
      >
       
        {isDark ?  <Sun size={24} className="text-white dark:text-gray-200" />
         :  <Moon size={24} className="text-white dark:text-gray-200" />}
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
  


  