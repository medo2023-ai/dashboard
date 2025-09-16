import OverviewCard from "@/components/OverviewCard/OverviewCard"
import cardsData from "@/data/QuickOverview/CardsData"
export default function QuickOverview() {

  return (
    <>
    <div className="container  grid gap-6 grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4">
 {cardsData.map((card, index )=>(<OverviewCard card={card} key={index}/>))}

  </div>

    </>
  )
}
