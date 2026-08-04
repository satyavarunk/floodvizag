"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      icon: "🏠",
      label: "Home",
    },
    {
      href: "/map",
      icon: "🗺️",
      label: "Map",
    },
    {
      href: "/reports",
      icon: "📋",
      label: "Reports",
    },
    {
      href: "/emergency",
      icon: "🚨",
      label: "Emergency",
    },
    {
      href: "/profile",
      icon: "👤",
      label: "Profile",
    },
  ];

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-slate-200
        bg-white
        shadow-lg
      "
    >
      <div className="mx-auto flex max-w-7xl justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                flex-col
                items-center
                rounded-lg
                px-3
                py-2
                text-xs
                font-medium
                transition-colors

                ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-blue-600"
                }
              `}
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}