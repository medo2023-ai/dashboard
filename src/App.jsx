
import { FileText } from 'lucide-react';
import './App.css'
import DashboardCard from './components/OverviewCard/OverviewCard';
import { AppSidebar } from './components/ui/app-sidebar/AppSidebar';
import { Button } from './components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import QuickOverview from './Pages/QuickOverview/QuickOverview';
import { DataTable } from './Pages/Sales/DataTable';
import orders from './data/Sales';
import { columns } from './Pages/Sales/Columns';

function App() {

  return (
     <>
    <main  className='flex '>

<div>
<SidebarProvider
 style={{
    "--sidebar-width": "20rem",
    "--sidebar-width-mobile": "20rem",
  }} defaultOpen={true}>
  <AppSidebar/>
</SidebarProvider>
</div>

<div>
<QuickOverview/>
 <div className=" container mx-auto">
      <DataTable columns={columns} data={orders} />
     
    </div>
 </div>
    </main>


</>
  )
}

export default App
