"use client"
import { TrendingUp } from "lucide-react"
import { Cell, LabelList, Pie, PieChart } from "recharts"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,
} from "@/components/ui/card"
import { ChartContainer,ChartTooltip,ChartTooltipContent,} from "@/components/ui/chart"
import chartData from "@/data/pie-chart/chartData"
import chartConfig from "./chartConfig"
export const description = "A pie chart with a label list"
export default  function ChartPieLabelList() {
  return (
<Card className="flex flex-col rounded-2xl shadow-md h-[444px] bg-white dark:dark:bg-slate-800 border-none text-gray-900 dark:text-gray-100">
  <CardHeader className="items-center ">
    <CardTitle className="text-base md:text-2xl font-semibold">
      Top Selling Products
    </CardTitle>
    <CardDescription className="text-sm md:text-base text-gray-500 dark:text-gray-400">
      Share of total sales
    </CardDescription>
  </CardHeader>

  <CardContent className="flex flex-col items-center p-0">
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square  w-full min-h-[280px] max-h-[300px]  "
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="product" hideLabel />}
        />
<Pie
  data={chartData}
  dataKey="sales"
  nameKey="product"
  labelLine={false}
>
  {chartData.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={entry.fill} />
  ))}

  <LabelList
    dataKey="product"
    stroke="none"
    className="fill-gray-900 dark:fill-white"
    fontSize={12}
    formatter={(value) => chartConfig[value]?.label}
  />
</Pie>

      </PieChart>
    </ChartContainer>
{/* 
    <div className="grid grid-cols-2 gap-4 my-4 text-sm px-6">
      {chartData.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.fill }}
          />
          <span>{item.product} - {item.sales}</span>
        </div>
      ))}
    </div> */}
  </CardContent>
</Card> )}

