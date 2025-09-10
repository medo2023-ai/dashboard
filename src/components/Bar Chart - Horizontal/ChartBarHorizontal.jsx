"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import orders from "@/data/Sales";

export const description = "A horizontal bar chart";

const chartConfig = { 
  Electronics: { label: "Electronics", color: "#06b6d4" }, 
  Accessories: { label: "Accessories", color: "#f59e0b" },
  };

 function getChartData(orders) {
  const totals = {};
  orders.forEach(order => {
    order.products.forEach(product => {
      totals[product.category] = (totals[product.category] || 0) + order.total;
    });
  });
  return Object.entries(totals).map(([category, total]) => ({ category, total }));
}

const chartData = getChartData(orders);


export function ChartBarHorizontal() {
  return (
    <Card className='rounded-2xl shadow-md  '>
      <CardHeader>
        <CardTitle className="text-base md:text-2xl font-semibold">
          Category Breakdown
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          Distribution of sales by product categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="min-h-[300px] max-h-[320px]  w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 30,  
    top: 20,
    right: 20,
    bottom: 20,
            }}
          >
           
            <XAxis type="number" dataKey="total" hide   tick={{ fill: "#ffffff", fontSize: 14 }} />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              
              axisLine={false}
          
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
 
<Bar dataKey="total" radius={4}  barSize={40}>
   <LabelList dataKey="total" position="right" fill="#ffffff" />
  {chartData.map((entry) => (
    <Cell key={entry.category} fill={chartConfig[entry.category]?.color || "#4f46e5"} />
  ))}
</Bar>

          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Total sales increased this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing sales for all categories
        </div>
      </CardFooter>
    </Card>
  );
}
