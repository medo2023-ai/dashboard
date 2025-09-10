"use client"

import { GitCommitVertical, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A line chart with custom dots"


const chartData = [
  { month: "January", Laptop: 120, Smartphone: 80, Headphones: 60, Tablet: 40, Camera: 30 },
  { month: "February", Laptop: 150, Smartphone: 100, Headphones: 90, Tablet: 50, Camera: 40 },
  { month: "March", Laptop: 180, Smartphone: 130, Headphones: 100, Tablet: 70, Camera: 60 },
  { month: "April", Laptop: 200, Smartphone: 150, Headphones: 110, Tablet: 90, Camera: 70 },
  { month: "May", Laptop: 170, Smartphone: 140, Headphones: 100, Tablet: 80, Camera: 60 },
  { month: "June", Laptop: 220, Smartphone: 160, Headphones: 120, Tablet: 100, Camera: 80 },
  { month: "July", Laptop: 210, Smartphone: 170, Headphones: 130, Tablet: 95, Camera: 75 },
  { month: "August", Laptop: 230, Smartphone: 180, Headphones: 140, Tablet: 110, Camera: 90 },
  { month: "September", Laptop: 250, Smartphone: 200, Headphones: 150, Tablet: 120, Camera: 100 },
  { month: "October", Laptop: 240, Smartphone: 195, Headphones: 145, Tablet: 115, Camera: 95 },
  { month: "November", Laptop: 260, Smartphone: 210, Headphones: 160, Tablet: 130, Camera: 110 },
  { month: "December", Laptop: 300, Smartphone: 250, Headphones: 200, Tablet: 150, Camera: 130 },
]



const chartConfig = {
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



export function ChartLineDotsCustom() {
  return (
    <Card className='rounded-2xl shadow-md  '>
      <CardHeader>
        <CardTitle className='text-base md:text-2xl font-semibold'>Line Chart - Custom Dots</CardTitle>
        <CardDescription className='text-sm md:text-base'>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="min-h-[300px] max-h-[300px] w-full " config={chartConfig}>
        <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            {Object.keys(chartConfig).map((key) => (
              <Line
                key={key}
                dataKey={key}
                type="natural"
                stroke={chartConfig[key].color}
                strokeWidth={2}
                dot={({ cx, cy, payload }) => {
                  const r = 10
                  return (
                    <GitCommitVertical
                      key={`${payload.month}-${key}`}
                      x={cx - r / 2}
                      y={cy - r / 2}
                      width={r}
                      height={r}
                      fill="hsl(var(--background))"
                      stroke={chartConfig[key].color}
                    />
                  )
                }}
              />
            ))}
          </LineChart>


        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
