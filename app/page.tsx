"use client";

import Link from "next/link";
import { Button } from "@/components/design-system";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/design-system";
import { Header } from "@/components/layout/Header";
import { 
  MousePointerClick, 
  Palette, 
  Layout, 
  Type, 
  Zap,
  Code,
  Layers,
  Settings
} from "lucide-react";

const componentCategories = [
  {
    title: "Button",
    description: "Interactive elements for user actions",
    icon: MousePointerClick,
    href: "/components?id=button",
    color: "bg-blue-500"
  },
  {
    title: "Form",
    description: "Input fields and form controls",
    icon: Layout,
    href: "/components?id=input",
    color: "bg-green-500"
  },
  {
    title: "Feedback",
    description: "Alerts, dialogs, and notifications",
    icon: Zap,
    href: "/components?id=alert",
    color: "bg-yellow-500"
  },
  {
    title: "Layout",
    description: "Cards, containers, and structure",
    icon: Layers,
    href: "/components?id=card",
    color: "bg-purple-500"
  },
  {
    title: "Navigation",
    description: "Menus, tabs, and navigation elements",
    icon: Settings,
    href: "/components?id=tabs",
    color: "bg-pink-500"
  },
  {
    title: "Data Display",
    description: "Badges, avatars, and data visualization",
    icon: Palette,
    href: "/components?id=badge",
    color: "bg-indigo-500"
  },
];

const foundationItems = [
  {
    title: "Colors",
    description: "Color palette and usage guidelines",
    icon: Palette,
    href: "/foundation/colors",
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
    href: "/foundation/spacing",
    comingSoon: true
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <Header />
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-12 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              HDS Design System
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive design system built on shadcn/ui. 
              Switchable components with feature flags for flexible control.
            </p>
            <div className="flex gap-4">
              <Link href="/components">
                <Button size="lg">Explore Components</Button>
              </Link>
              <Link href="/foundation">
                <Button variant="outline" size="lg">View Foundation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-16">
        <div className="container mx-auto px-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Foundation</h2>
            <p className="text-gray-600">Design principles and core elements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 rounded-lg bg-gray-100">
                        <item.icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  {item.comingSoon && (
                    <CardContent>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Components</h2>
            <p className="text-gray-600">Reusable UI components with variants and examples</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentCategories.map((category) => (
              <Link key={category.href} href={category.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-3 rounded-lg ${category.color} text-white group-hover:scale-110 transition-transform`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="container mx-auto px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Key Features</h2>
            <p className="text-gray-600">What makes HDS special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feature Flags</h3>
              <p className="text-gray-600 text-sm">
                Enable or disable components with a simple config file
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Palette className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">
                Built on shadcn/ui with easy customization options
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
              <p className="text-gray-600 text-sm">
                Type-safe components with full TypeScript support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
