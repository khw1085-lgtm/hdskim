"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { FoundationSidebar } from "@/components/layout/FoundationSidebar";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/design-system";
import { Palette, Type, Layout, Menu } from "lucide-react";
import { Button } from "@/components/design-system";

const foundationItems = [
  {
    title: "Colors",
    description: "Color palette and usage guidelines",
    icon: Palette,
    href: "/foundation/color",
    comingSoon: true
  },
  {
    title: "Typography",
    description: "Font families, sizes, and styles",
    icon: Type,
    href: "/foundation/typography",
    comingSoon: true
  },
  {
    title: "Spacing",
    description: "Layout and spacing system",
    icon: Layout,
    href: "/foundation/layout",
    comingSoon: true
  },
];

export default function FoundationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // 데스크톱에서만 사이드바 열기
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex pt-14">
        {isMounted && (
          <FoundationSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}
        <div className="flex-1 lg:ml-64">
          <div className="lg:hidden p-4 border-b border-gray-200 bg-white sticky top-14 z-30">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div className="container mx-auto px-12 py-16">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Foundation</h1>
              <p className="text-gray-600 text-lg">
                Design principles and core elements that form the basis of our design system
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundationItems.map((item) => (
                <Card key={item.href} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 rounded-lg bg-gray-100">
                        <item.icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                    {item.comingSoon && (
                      <div className="mt-4">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
