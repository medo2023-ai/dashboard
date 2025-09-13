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
      defaultOpen={true} >
      <div className="md:flex  md:flex-row min-h-screen gap-4">
        <AppSidebar />

        <div className="dark:bg-slate-900">
          <Navbar />

          <main className=" md:p-6 dark:bg-slate-900">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
