import { columns } from '../Sales/Columns'
import orders from '@/data/Sales'
import { DataTable } from '../Sales/DataTable'
import QuickOverview from '../QuickOverview/QuickOverview'
import ChartPieLabelList from '@/components/PieChart/ChartPieLabelList'
import { ChartLineDotsCustom } from '@/components/LineChart/ChartLineDotsCustom'
import { ChartBarHorizontal } from '@/components/Bar Chart - Horizontal/ChartBarHorizontal'
import ActivitySectionTable from '@/components/ActivitySectionTable/ActivitySectionTable'
import { Columns } from '@/components/ActivitySectionTable/Columns'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <main className=" ">
      <section className=" dark:bg-slate-900  my-10 space-y-4 pb-10 md:pb-3  min-h-screen lg:container mx-auto  md:mr-3  lg:mr-0 ">
       {/* flex-1  space-y-6 py-4 md:py-6 */}
        {/* flex-1  py-4 md:py-6  */}
        <QuickOverview className='container mx-auto' />

        <section className="container mx-auto dark:bg-slate-900 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <ChartPieLabelList  isSales={false} className="h-64 md:h-72 lg:h-80" />
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
            <DataTable columns={columns} data={orders} />
          </div>

          <div className="">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">
              Activity Section
            </h2>
            <ActivitySectionTable columns={Columns} />
          </div>
        </div>
      </section>
    </main>
  );
}


