import { Card, CardContent } from "@/components/ui/card"

export default function DashboardCard({ card }) {
 
  return (
    <Card className="w-full rounded-2xl shadow-md h-auto max-h-[150px] ">
      <CardContent className="flex items-center flex-col justify-center gap-4 p-6">
        <div className={`p-3 rounded-full ${card.color || "bg-gray-100 text-gray-600"}`}>
          <card.Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{card.title}</p>
          <p className="text-xl font-bold">{card.value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
