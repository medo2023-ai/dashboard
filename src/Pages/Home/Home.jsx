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
//       <main  className='flex'>

// <section className=''> 
// <SidebarProvider style={{
//     "--sidebar-width": "15rem",
//     "--sidebar-width-mobile": "10rem", }} defaultOpen={true}>
//   <AppSidebar/>
// </SidebarProvider>
// </section>

// <section className='space-y-6'>
//   <Navbar/>

// <QuickOverview/>


// <section className='container grid gap-6 grid-cols-1
//     md:grid-cols-3 lg:grid-cols-3 ' >
//       <div className="">
//          <ChartPieLabelList/>
//       </div>
//       <div className="">
//           <ChartLineDotsCustom/>
//       </div>
//       <div className="">
//            <ChartBarHorizontal/>
//       </div>
// </section>



//  <div className=" container mx-auto  pt-5 ">

   
   
// <h2 className="text-xl md:text-2xl font-semibold mb-4"> Recent Orders</h2>
//       <DataTable columns={columns} data={orders}  />

//    <h2 className="text-xl md:text-2xl font-semibold mb-4">Activity Section</h2>
//       <ActivitySectionTable columns={Columns} />

     
//     </div>

//  </section>
//     </main> 

<main className=" ">
 
  {/* <section className=" hidden md:block w-[10rem] lg:w-[15rem]  shrink-0">
    <SidebarProvider
      style={{
        "--sidebar-width": "15rem",
        "--sidebar-width-mobile": "10rem",
      }}
      defaultOpen={true}
    >
      <AppSidebar />
    </SidebarProvider>
  </section> */}


  <section className="flex-1 space-y-6 p-4 md:p-6 dark:bg-slate-900">

    <QuickOverview />

    {/* <section
      className="container dark:bg-slate-900  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div>
        <ChartPieLabelList className='p-0'/>
      </div>
      <div>
        <ChartLineDotsCustom />
      </div>
      <div>
        <ChartBarHorizontal />
      </div>
    </section> */}

<section
  className="container dark:bg-slate-900 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
>
  <div>
    <ChartPieLabelList className="h-64 md:h-72 lg:h-80" />
  </div>
  <div>
    <ChartLineDotsCustom className="h-64 md:h-72 lg:h-80" />
  </div>
  <div>
    <ChartBarHorizontal className="h-64 md:h-72 lg:h-80" />
  </div>
</section>


    <div className="container mx-auto pt-5 space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">
          Recent Orders
        </h2>
        <DataTable columns={columns} data={orders}  />
      </div>

      <div className='rounded-lg'>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">
          Activity Section
        </h2>
        <ActivitySectionTable columns={Columns} />
      </div>
    </div>
  </section>
</main>

)
}
