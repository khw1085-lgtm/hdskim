"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "@/components/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  id: string;
  name: string;
  href: string;
}

const foundationItems: SidebarItem[] = [
  { id: "overview", name: "Overview", href: "/foundation" },
  { id: "typography", name: "Typography", href: "/foundation/typography" },
  { id: "color", name: "Color", href: "/foundation/color" },
  { id: "layout", name: "Layout", href: "/foundation/layout" },
  { id: "iconography", name: "Iconography", href: "/foundation/iconography" },
  { id: "object-styles", name: "Object Styles", href: "/foundation/object-styles" },
];

interface FoundationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FoundationSidebar({ isOpen, onClose }: FoundationSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-4 border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <nav className="p-3">
          <div className="space-y-1">
            {foundationItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href === "/foundation" && pathname === "/foundation");
              
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    // 클라이언트에서만 실행
                    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 block",
                    isActive
                      ? "text-gray-900 font-bold"
                      : "text-gray-500 hover:text-gray-900 font-medium"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
}

