import { AppSidebar } from "@/components/ui/app-sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "15rem",
        "--sidebar-width-mobile": "10rem",
      }}
      defaultOpen={true} className='block  md:flex' >
<div className="min-h-screen md:grid md:grid-cols-[10rem_1fr] lg:grid-cols-[15rem_1fr] overflow-x-hidden">

{/* <div className="min-h-screen md:grid md:grid-cols-[minmax(4rem,6rem)_1fr] lg:grid-cols-[14rem_1fr] overflow-x-hidden"> */}



  <aside className="hidden md:block dark:bg-slate-800 overflow-hidden">
    <AppSidebar />
  </aside>


  <div className="dark:bg-slate-900 flex flex-col">
    <Navbar className=" " />

    <main className="flex-1 p-3  dark:bg-slate-900">
      <Outlet />
    </main>
  </div>
</div>





    </SidebarProvider>
  );
}
