import React from 'react'
import { columns } from '../Sales/Columns'
import orders from '@/data/Sales'
import { DataTable } from '../Sales/DataTable'
import QuickOverview from '../QuickOverview/QuickOverview'
import { AppSidebar } from '@/components/ui/app-sidebar/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar';
import ChartPieLabelList from '@/components/PieChart/ChartPieLabelList'
import { ChartLineDotsCustom } from '@/components/LineChart/ChartLineDotsCustom'
import { ChartBarHorizontal } from '@/components/Bar Chart - Horizontal/ChartBarHorizontal'
import ActivitySectionTable from '@/components/ActivitySectionTable/ActivitySectionTable'
import { Columns } from '@/components/ActivitySectionTable/Columns'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
      <main  className='flex  '>

<section>
<SidebarProvider style={{
    "--sidebar-width": "15rem",
    "--sidebar-width-mobile": "10rem", }} defaultOpen={true}>
  <AppSidebar/>
</SidebarProvider>
</section>

<section className='space-y-6'>
  <Navbar/>

<QuickOverview/>


<section className='container grid gap-6 grid-cols-2 
    md:grid-cols-3 lg:grid-cols-3 ' >
      <div className="">
         <ChartPieLabelList/>
      </div>
      <div className="">
          <ChartLineDotsCustom/>
      </div>
      <div className="">
           <ChartBarHorizontal/>
      </div>
</section>



 <div className=" container mx-auto  pt-5 ">

   
   
<h2 className="text-xl md:text-2xl font-semibold mb-4"> Recent Orders</h2>
      <DataTable columns={columns} data={orders}  />

   <h2 className="text-xl md:text-2xl font-semibold mb-4">Activity Section</h2>
      <ActivitySectionTable columns={Columns} />

     
    </div>

 </section>
    </main> 
  )
}
