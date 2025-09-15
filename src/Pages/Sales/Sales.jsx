import { columns } from './Columns'
import orders from '@/data/Sales'
import TotalSales from '@/data/TotalSales'

import OverviewCard from '@/components/OverviewCard/OverviewCard'
import { DataTable } from './DataTable'
import ChartPieLabelList from '@/components/PieChart/ChartPieLabelList'
import { ChartLineDotsCustom } from '@/components/LineChart/ChartLineDotsCustom'
import { ChartBarHorizontal } from '@/components/Bar Chart - Horizontal/ChartBarHorizontal'

export default function Sales() {
  return (

 <main className="min-h-screen container mx-auto  my-10 space-y-4 pb-10 md:pb-3 ">
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-6  ">
        {TotalSales.map((card, index) => (
          <OverviewCard card={card} key={index} />
        ))}
      </section>
              <section>
        <DataTable columns={columns} data={orders} className='' />
      </section>

  <section className='space-y-8 '>

 <section>
      <ChartPieLabelList isSales={true}/>
      </section>
      <section >
      <ChartLineDotsCustom/>
    
      </section>
      <section >
  <ChartBarHorizontal/>
</section>
      
  </section>
    </main>
  )
}
