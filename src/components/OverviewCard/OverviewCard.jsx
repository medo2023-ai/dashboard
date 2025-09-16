import { Card, CardContent } from "@/components/ui/card"

export default function OverviewCard({ card }) {
 
  return (
    <Card className="w-full rounded-2xl shadow-md h-auto max-h-[200px] border-none  dark:bg-slate-800 ">
      <CardContent className="flex items-center flex-col justify-center gap-4 p-6">
        <div className={`p-3 rounded-full ${card.color || "bg-gray-100 text-gray-600"}`}>
          <card.Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-semibold md:text-base text-gray-500 dark:text-gray-100">{card.title}</p>
          <p className="text-xl font-bold dark:text-white">{card.value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
