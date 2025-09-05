import React from 'react'
import { columns } from './Columns'
import orders from '@/data/Sales'

export default function Sales() {
  return (
    <>
     <div className="container mx-auto  min-h-screen">
      <DataTable columns={columns} data={orders} />
    </div>
    </>
  )
}
