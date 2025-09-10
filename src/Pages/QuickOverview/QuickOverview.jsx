
import OverviewCard from "@/components/OverviewCard/OverviewCard"

import { BarChart3, FileText, ShoppingCart, Users } from "lucide-react"

export default function QuickOverview() {
       const cardsData = [
  {
    title: "Contracts",
    value: 120,
    Icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Users",
    value: 3450,
    Icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Sales",
    value: "$12,450",
    Icon: ShoppingCart,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Reports",
    value: 45,
    Icon: BarChart3,
    color: "bg-purple-100 text-purple-600",
  },
]
  return (
    <>
    <div className="container  grid gap-6 grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4">
 {cardsData.map((card, index )=>(<OverviewCard card={card} key={index}/>))}

  </div>

    </>
  )
}
