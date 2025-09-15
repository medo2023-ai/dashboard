import logo from '@/assets/Images/chart-statistics-right-side.jpg'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
   SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  } from "@/components/ui/sidebar"
import items from '@/data/side-Bar/items'
import { LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'


export function AppSidebar() {
   const navigate = useNavigate()
  return (
    <>
    <div className="flex gap-0 ">

<Sidebar    collapsible="offcanvas" 
className="  w-64 md:w-44 lg:w-64
 text-gray-100 shadow-lg border-none "   >

  <SidebarContent className="py-4 bg-primary dark:bg-slate-800"
   overlayProps={{ className: "dark" }}>
    <SidebarGroup>
      <SidebarGroupLabel className="  uppercase  flex w-full  px-0 items-center gap-1 lg:gap-3 font-semibold mb-2">
        <img src={logo} alt="logo charts image" className="w-12 h-12 rounded-md object-contain" />
        <h1 className="font-semibold md:text-base  lg:text-lg  text-white">DashBoardX</h1>
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu className="space-y-1 mt-4">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  to={item.url}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-100 hover:bg-gray-700 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-gray-300" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
             
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
             <button className='flex items-center gap-3 px-3 py-2 rounded-md text-gray-100 hover:bg-gray-700 transition-colors'
             onClick={()=> {
              localStorage.removeItem('token')
              navigate('/signin')
             }}> 
                 <LogOut className="w-5 h-5 text-gray-300"/>
                 <span className="text-sm font-medium"> Log Out</span>
             </button>
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

