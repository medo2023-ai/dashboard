import { Calendar, File, Home,  Menu, Search, Settings, ShoppingCart, X } from "lucide-react"
import { BarChart3, FileText, Users } from "lucide-react"

import logo from '@/assets/Images/chart-statistics-right-side.jpg'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "../button"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Reports",
    url: "#",
    icon:  BarChart3,
  },
  {
    title: "Contracts",
    url: "#",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
    //  const {open,toggleSidebar} = useSidebar()
  return (
    <>
    <div className="flex gap-0 ">

<Sidebar  collapsible="offcanvas" className="w-64   text-gray-100 shadow-lg">
  <SidebarContent className="p-4 bg-primary">
    <SidebarGroup>
      <SidebarGroupLabel className=" uppercase flex items-center gap-3 font-semibold mb-2">
        <img src={logo} alt="logo charts image" className="w-12 h-12 rounded-md object-contain" />
        <h1 className="font-semibold text-lg  text-white">DashBoardX</h1>
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu className="space-y-1 mt-4">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a
                  href={item.url}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-100 hover:bg-gray-700 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-gray-300" />
                  <span className="text-sm font-medium">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>

    {/* <Sidebar collapsible="offcanvas" >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar> */}

{/* <div className=" flex items-center px-2">
        <Button onClick={toggleSidebar} className=" ">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        </div>  */}
  
  </div>
      </>
  )
}