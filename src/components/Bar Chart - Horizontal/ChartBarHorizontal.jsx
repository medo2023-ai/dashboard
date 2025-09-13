"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import {ChartContainer,ChartTooltip,ChartTooltipContent, } from "@/components/ui/chart";
import orders from "@/data/Sales";
import chartConfig from "@/data/chart-bar/chartConfig";

export const description = "A horizontal bar chart";
function getChartData(orders) {
  const totals = {};
  orders.forEach(order => {
    order.products.forEach(product => {
      totals[product.category] = (totals[product.category] || 0) + order.total;
    });
  });
  return Object.entries(totals).map(([category, total]) => ({ category, total }));}

const chartData = getChartData(orders);
export function ChartBarHorizontal() {
  return (
    <Card className='rounded-2xl shadow-md  h-[444px] dark:bg-slate-800 border-none '>
      <CardHeader>
        <CardTitle className="text-base md:text-2xl font-semibold dark:text-white">
          Category Breakdown
        </CardTitle>
        <CardDescription className="text-sm md:text-base dark:text-gray-400">
          Distribution of sales by product categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="min-h-[280px] max-h-[300px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer  data={chartData}
            layout="vertical"  margin={{
              left: 30,  top: 20,right: 20,bottom: 20,}}>
      
  <XAxis type="number" dataKey="total" hide
               tick={{ fill: "#ffffff", fontSize: 14 }} />
<YAxis 
  dataKey="category" type="category"  
   tickLine={false}
  tickMargin={10}   
  axisLine={false}  
  tick={({ x, y, payload }) => (
    <text  x={x}  y={y}  dy={4}  textAnchor="end"
      style={{ fill: "currentColor" }}
      className="text-sm text-gray-900 dark:text-white" >
      {payload.value}
    </text>
  )}
/>


   

            <ChartTooltip 
              cursor={false}
              content={<ChartTooltipContent hideLabel />} />
 
<Bar dataKey="total" radius={4}  barSize={40}    >

   <LabelList 
  dataKey="total" 
  position="right" 
  className="fill-gray-900 dark:fill-white" 
/>



  {chartData.map((entry) => (
    <Cell key={entry.category} fill={chartConfig[entry.category]?.color || "#4f46e5"} />
  ))}
</Bar>

          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium dark:text-white">
          Total sales increased this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none dark:text-white">
          Showing sales for all categories
        </div>
      </CardFooter> */}
    </Card>
  );
}
