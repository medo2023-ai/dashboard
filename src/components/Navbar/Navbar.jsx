import { DropdownMenu,DropdownMenuContent,DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { useNotifications } from "@/context/Notification.context";
import { Bell, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
export default function Navbar() {
  const { notifications} = useNotifications();
  const [isDark,setIsDark] = useState(false);
  const token = localStorage.getItem("token");
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
    <div className=" bg-primary px-4 py-2 mr-[37px] rounded-full flex gap-6 dark:bg-gray-800">

          <button  onClick={toggleDarkMode}
        className="p-1 rounded   transition">
       
        {isDark ?  <Sun size={24} className="text-white dark:text-gray-200" />
         :  <Moon size={24} className="text-white dark:text-gray-200" />}
      </button>
     
        <DropdownMenu>
        <DropdownMenuTrigger className="relative focus:outline-none"   
           onClick={() => {
        if (!token) {
          toast.error("Please sign in to view notifications");
        }
      }} >
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {notifications.length}
            </span>
          )}
          <Bell size={24} className="text-white  dark:text-gray-200 cursor-pointer" />
        </DropdownMenuTrigger>

{token &&
 <DropdownMenuContent 
  side="bottom" 
  align="end" 
  className="w-64 bg-white shadow-lg rounded-xl p-2 dark:bg-slate-800 border-none"
>
  {notifications.length === 0 ? (
    <DropdownMenuItem className="text-gray-500 text-sm py-2">
      No notifications
    </DropdownMenuItem>
  ) : (
    <div className="max-h-60 overflow-y-auto ">
      {notifications.map((notification, index) => (
        <DropdownMenuItem
          key={index}
          className="text-sm text-gray-700  dark:text-white hover:bg-gray-100 rounded-lg px-3 py-2 mb-1 transition-colors"
        >
          {notification.message}
        </DropdownMenuItem>
      ))}
    </div>
  )}
</DropdownMenuContent>

}



      </DropdownMenu>
    
    </div>
      </section> 
     </>);
  }
  


  