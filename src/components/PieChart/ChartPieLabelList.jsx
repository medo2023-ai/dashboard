"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {

  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a label list"

const chartData = [
    { product: "Laptop", sales: 450, fill: "var(--chart-1)" },
  { product: "Smartphone", sales: 350, fill: "var(--chart-2)" },
   { product: "Headphones", sales: 450, fill: "var(--chart-3)" },
   { product: "Tablet", sales: 200, fill: "var(--chart-4)" },
  { product: "Camera", sales: 150, fill: "var(--chart-5)" },
 
]

const chartConfig = {
    sales: {
     label: "Sales",
   },
   Laptop: {
     label: "Laptop",
     color: "var(--chart-1)",
   },
   Smartphone: {
     label: "Smartphone",
     color: "var(--chart-2)",
   },
   Headphones: {
     label: "Headphones",
     color: "var(--chart-3)",
   },
   Tablet: {
     label: "Tablet",
     color: "var(--chart-4)",
   },
   Camera: {
     label: "Camera",
     color: "var(--chart-5)",
   },
} 

export default  function ChartPieLabelList() {
  return (
    <Card className="flex flex-col rounded-2xl shadow-md ">
      <CardHeader className="items-center pb-0">
           <CardTitle className='text-base md:text-2xl font-semibold'>Top Selling Products</CardTitle>
        <CardDescription className='text-sm md:text-base'>Share of total sales</CardDescription>
      </CardHeader>
    
      <CardContent className="flex flex-col items-center pb-0">
  <ChartContainer
    config={chartConfig}
    className="mx-auto aspect-square max-h-[300px]  h-[300px]"
  >
    <PieChart>
      <ChartTooltip
        content={<ChartTooltipContent nameKey="product" hideLabel />}
      />
      <Pie data={chartData} dataKey="sales" nameKey="product">
        <LabelList
          dataKey="product"
          stroke="none"
          fill="white"
          fontSize={12}
          formatter={(value) => chartConfig[value]?.label}
        />
      </Pie>
    </PieChart>
  </ChartContainer>

 
  <div className="grid grid-cols-2 gap-4 my-4 text-sm">
    {chartData.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: item.fill }}
        />
        <span>{item.product} - {item.sales}</span>
      </div>
    ))}
  </div>
</CardContent>

    </Card>
  )
}

