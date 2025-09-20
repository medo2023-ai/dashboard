import Packages from "./packages"
import { Con } from "@/js/context"
import { useContext } from "react"
import { useEffect } from "react"
import {
  ShoppingCart,
  GraduationCap,
  Building,
  Stethoscope,
  Cpu,
  Coins,
  Factory,
  Hotel,
  Truck,
  Bolt,
  Wheat,
  Film,
  User,
  Landmark,
  HeartHandshake
} from "lucide-react"
import * as Icons from "lucide-react";
import Services from "./services";
import Invoice from "./invoice"
export default function Catalog(){
    const{setIndustry,setPackage,setFeature,setServices}=useContext(Con)
 const industries = [
  { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "realestate", name: "Real Estate", icon: Building },
  { id: "healthcare", name: "Healthcare", icon: Stethoscope },
  { id: "technology", name: "Technology", icon: Cpu },
  { id: "finance", name: "Finance", icon: Coins },
  { id: "manufacturing", name: "Manufacturing", icon: Factory },
  { id: "hospitality", name: "Hospitality & Tourism", icon: Hotel },
  { id: "transportation", name: "Transportation & Logistics", icon: Truck },
  { id: "energy", name: "Energy", icon: Bolt },
  { id: "agriculture", name: "Agriculture", icon: Wheat },
  { id: "media", name: "Media & Entertainment", icon: Film },
  { id: "consulting", name: "Consulting", icon: User },
  { id: "government", name: "Government", icon: Landmark },
  { id: "nonprofit", name: "Nonprofit & NGOs", icon: HeartHandshake }
]
const features = [
  {
    id: 1,
    title: "Order Tracking",
    desc: "Allows users to track the status of their orders in real time.",
    cost: 150,
    time: "2 weeks",
    industry: "e-commerce",
    package: "Basic"
  },
  {
    id: 2,
    title: "Interactive Lessons",
    desc: "A system with video lessons and short quizzes for students.",
    cost: 300,
    time: "3 weeks",
    industry: "education",
    package: "Premium"
  },
  {
    id: 3,
    title: "Property Map",
    desc: "Displays properties on an interactive map with filter options.",
    cost: 250,
    time: "2-3 weeks",
    industry: "realestate",
    package: "Standard"
  },
  {
    id: 4,
    title: "Appointment Booking",
    desc: "Booking system for doctors with reminder notifications.",
    cost: 400,
    time: "4 weeks",
    industry: "healthcare",
    package: "Pro"
  },
  {
    id: 5,
    title: "AI Customer Chat",
    desc: "Chatbot that responds to customer inquiries intelligently.",
    cost: 500,
    time: "5 weeks",
    industry: "technology",
    package: "Enterprise"
  }
];


 const packages = [
  // 🛒 E-Commerce
  {
    id: "basic-ecommerce",
    name: "Basic E-Commerce",
    icon: Icons.ShoppingCart,
    industry: "e-commerce",
  },
  {
    id: "pro-ecommerce",
    name: "Pro E-Commerce",
    icon: Icons.Package,
    industry: "e-commerce",
  },

  // 🎓 Education
  {
    id: "starter-education",
    name: "Starter Education",
    icon: Icons.GraduationCap,
    industry: "education",
  },
  {
    id: "advanced-education",
    name: "Advanced Education",
    icon: Icons.BookOpen,
    industry: "education",
  },

  // 🏢 Real Estate
  {
    id: "basic-realestate",
    name: "Basic Real Estate",
    icon: Icons.Building,
    industry: "realestate",
  },
  {
    id: "premium-realestate",
    name: "Premium Real Estate",
    icon: Icons.Home,
    industry: "realestate",
  },

  // 🏥 Healthcare
  {
    id: "basic-healthcare",
    name: "Basic Health Package",
    icon: Icons.HeartPulse,
    industry: "healthcare",
  },
  {
    id: "advanced-healthcare",
    name: "Advanced Health Package",
    icon: Icons.Stethoscope,
    industry: "healthcare",
  },

  // 💻 Technology
  {
    id: "starter-tech",
    name: "Starter Tech",
    icon: Icons.Cpu,
    industry: "technology",
  },
  {
    id: "enterprise-tech",
    name: "Enterprise Tech",
    icon: Icons.Server,
    industry: "technology",
  },

  // 💰 Finance
  {
    id: "starter-finance",
    name: "Starter Finance",
    icon: Icons.Wallet,
    industry: "finance",
  },
  {
    id: "pro-finance",
    name: "Pro Finance",
    icon: Icons.CreditCard,
    industry: "finance",
  },

  // 🏭 Manufacturing
  {
    id: "basic-manufacturing",
    name: "Basic Manufacturing",
    icon: Icons.Factory,
    industry: "manufacturing",
  },
  {
    id: "premium-manufacturing",
    name: "Premium Manufacturing",
    icon: Icons.Package,
    industry: "manufacturing",
  },

  // 🏨 Hospitality
  {
    id: "starter-hospitality",
    name: "Starter Hospitality",
    icon: Icons.Hotel,
    industry: "hospitality",
  },
  {
    id: "luxury-hospitality",
    name: "Luxury Hospitality",
    icon: Icons.Bed,
    industry: "hospitality",
  },

  // 🚚 Transportation
  {
    id: "basic-transportation",
    name: "Basic Transportation",
    icon: Icons.Truck,
    industry: "transportation",
  },
  {
    id: "logistics-pro",
    name: "Logistics Pro",
    icon: Icons.Ship,
    industry: "transportation",
  },

  // ⚡ Energy
  {
    id: "green-energy",
    name: "Green Energy",
    icon: Icons.Bolt,
    industry: "energy",
  },
  {
    id: "nuclear-energy",
    name: "Nuclear Energy",
    icon: Icons.Flame,
    industry: "energy",
  },

  // 🌾 Agriculture
  {
    id: "basic-agriculture",
    name: "Basic Agriculture",
    icon: Icons.Wheat,
    industry: "agriculture",
  },
  {
    id: "smart-agriculture",
    name: "Smart Agriculture",
    icon: Icons.Sprout,
    industry: "agriculture",
  },

  // 🎬 Media
  {
    id: "starter-media",
    name: "Starter Media",
    icon: Icons.Film,
    industry: "media",
  },
  {
    id: "pro-media",
    name: "Pro Media",
    icon: Icons.Camera,
    industry: "media",
  },

  // 👔 Consulting
  {
    id: "basic-consulting",
    name: "Basic Consulting",
    icon: Icons.User,
    industry: "consulting",
  },
  {
    id: "pro-consulting",
    name: "Pro Consulting",
    icon: Icons.Users,
    industry: "consulting",
  },

  // 🏛 Government
  {
    id: "basic-government",
    name: "Basic Government",
    icon: Icons.Landmark,
    industry: "government",
  },
  {
    id: "enterprise-government",
    name: "Enterprise Government",
    icon: Icons.Gavel,
    industry: "government",
  },

  // ❤️ Nonprofit
  {
    id: "starter-nonprofit",
    name: "Starter Nonprofit",
    icon: Icons.HeartHandshake,
    industry: "nonprofit",
  },
  {
    id: "advanced-nonprofit",
    name: "Advanced Nonprofit",
    icon: Icons.Heart,
    industry: "nonprofit",
  },
];
  const services = [
    {
      title: "VPS Plans",
      price: "$50",
      description: "Virtual Private Server hosting solutions",
      items: [
        { name: "Basic VPS (1GB RAM, 25GB SSD)", price: "$50" },
        { name: "Business VPS (4GB RAM, 100GB SSD)", price: "$120" },
        { name: "Enterprise VPS (8GB RAM, 200GB SSD)", price: "$220" },
      ],
    },
    {
      title: "SSL Certificates",
      price: "From $60/mo",
      description: "Secure socket layer certificates for websites",
      items: [
        { name: "Basic SSL (Domain Validation)", price: "$60" },
        { name: "Business SSL (Organization Validation)", price: "$150" },
        { name: "Extended SSL (Extended Validation)", price: "$250" },
      ],
    },
    {
      title: "Mobile Apps",
      price: "From $200/mo",
      description: "Native mobile applications for iOS and Android",
      items: [
        { name: "iOS App (Monthly)", price: "$200" },
        { name: "Android App (Monthly)", price: "$200" },
        { name: "Both Platforms (Yearly - Save 15%)", price: "$4,080" },
      ],
    },
    {
      title: "vvI",
      price: "From $300",
      description: "Custom options",
      items: [
        { name: "Basic Option", price: "$300" },
        { name: "Standard Option", price: "$450" },
        { name: "Premium Option", price: "$600" },
      ],
    },
  ]

useEffect(()=>{
    setIndustry(industries);
    setPackage(packages);
    setFeature(features);
    setServices(services);
},[])
    return(
        <div>
        <h1 className="capitalize font-semibold text-2xl text-left p-6 dark:text-white">Pricing Catalog</h1>
        <hr></hr>
       <Packages/>
       <hr></hr>
       <Services/>
       <hr></hr>
       <Invoice/>
    </div>
    )
    
}