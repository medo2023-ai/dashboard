
import { BarChart3,FileText, Home,  LogOut,  Settings, ShoppingCart} from "lucide-react"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Reports",
    url: "#",
    icon:  BarChart3,
  },
  {
    title: "Contracts",
    url: "#",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
]

 export default items