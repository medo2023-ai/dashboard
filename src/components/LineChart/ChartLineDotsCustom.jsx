"use client"
import { GitCommitVertical, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import {ChartContainer, ChartTooltip, 
 ChartTooltipContent,} from "@/components/ui/chart"
import chartConfig from "@/data/chart-line/chartConfig"
import chartData from "@/data/chart-line/chartData"
  import { Tooltip } from "recharts";
export const description = "A line chart with custom dots"
export function ChartLineDotsCustom() {

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg p-2 bg-white dark:bg-slate-800 shadow-md">
        <p className="text-sm text-gray-800 dark:text-white font-medium">
          {`${label} : ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

  return (
    <Card className='rounded-2xl shadow-md h-[444px] dark:bg-slate-800 border-none  '>
      <CardHeader className='pb-0'>
        <CardTitle className='text-base md:text-2xl font-semibold dark:text-white'>Line Chart - Custom Dots</CardTitle>
        <CardDescription className='text-sm md:text-base dark:text-gray-400'>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full min-h-[280px] max-h-[300px]  " config={chartConfig}>
    
        <LineChart
            accessibilityLayer data={chartData} margin={{left: 12,  right: 12,}}>
            <CartesianGrid vertical={false} />
           <XAxis dataKey="month" tickLine={false} axisLine={false}
            tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} tick={({ x, y, payload }) => (
      <text   x={x}  y={y + 15}
      textAnchor="middle"className="text-xs"
      style={{ fill: "currentColor" }}     >
      <tspan className="fill-gray-700 dark:fill-white">
        {payload.value.slice(0, 3)}  </tspan>
    </text>    )}/>

   <ChartTooltip cursor={false}
              content={<ChartTooltipContent hideLabel  className='dark:text-white'/>}/>
           


            {Object.keys(chartConfig).map((key) => (
              <Line key={key} dataKey={key} type="natural"    stroke={chartConfig[key].color}
               strokeWidth={2}
                dot={({ cx, cy, payload }) => { const r = 10
                  return (
                    <GitCommitVertical
                      key={`${payload.month}-${key}`}
                      x={cx - r / 2}  y={cy - r / 2}
                      width={r} height={r}
                      fill="hsl(var(--background))"
                      stroke={chartConfig[key].color}  className="dark:text-white"   />  ) }}    />  ))}
          </LineChart>
 </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium dark:text-white">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none dark:text-white">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
); }
