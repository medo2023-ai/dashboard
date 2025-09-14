import items from "@/data/side-Bar/items";
import { Link, useLocation } from "react-router-dom";
export default function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-slate-900 text-white shadow-inner md:hidden z-50">
      <ul className="flex justify-around items-center py-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.url;

          return (
            <li key={item.title}>
              <Link
                to={item.url}
                className={`flex flex-col items-center text-xs ${
                  active ? "text-blue-400" : "text-gray-400"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
