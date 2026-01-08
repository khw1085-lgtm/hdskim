"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, ChevronDown } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/foundation", label: "Foundation" },
    { href: "/components", label: "Components" },
  ];

  const isFoundation = pathname?.startsWith("/foundation");
  const isComponents = pathname?.startsWith("/components");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-gray-50">
      <div className="flex h-14 items-center">
        {/* Left: Logo/Brand */}
        <div className="flex items-center gap-2 px-6 border-r border-gray-200">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-sm font-medium text-gray-700">HDS</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="flex items-center gap-1 flex-1 px-6">
          {navItems.map((item) => {
            const isActive = 
              (item.href === "/" && pathname === "/") ||
              (item.href === "/foundation" && isFoundation) ||
              (item.href === "/components" && isComponents);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm transition-colors rounded-md",
                  isActive
                    ? "text-gray-900 font-bold bg-gray-100"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Version & Search */}
        <div className="flex items-center gap-4 px-6 border-l border-gray-200">
          <span className="text-xs text-gray-500">v 1.0</span>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <Search className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
