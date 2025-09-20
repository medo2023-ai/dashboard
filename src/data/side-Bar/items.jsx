import { 
  BarChart3, 
  FileText, 
  Home,  
  LogOut,  
  Settings, 
  ShoppingCart,
  Users,
  Tags
} from "lucide-react"

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
    url: "/reports",
    icon: BarChart3,
  },
  {
    title: "Contracts",
    url: "/contracts",
    icon: FileText,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Pricing Catalog",
    url: "/catalog",
    icon: Tags,
  },
  {
    title: "Settings",
    url: "/setting",
    icon: Settings,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
]


export default items
