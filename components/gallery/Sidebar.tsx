"use client";

import { cn } from "@/lib/utils";

interface ComponentItem {
  id: string;
  name: string;
  icon: string;
}

const components: ComponentItem[] = [
  { id: "button", name: "Button", icon: "🔘" },
  { id: "alert", name: "Alert", icon: "⚠️" },
  { id: "popover", name: "Popover", icon: "💬" },
  { id: "input", name: "Input", icon: "📝" },
  { id: "card", name: "Card", icon: "🃏" },
  { id: "dialog", name: "Dialog", icon: "🗨️" },
  { id: "select", name: "Select", icon: "📋" },
  { id: "checkbox", name: "Checkbox", icon: "☑️" },
  { id: "switch", name: "Switch", icon: "🔀" },
  { id: "tabs", name: "Tabs", icon: "📑" },
  { id: "badge", name: "Badge", icon: "🏷️" },
  { id: "avatar", name: "Avatar", icon: "👤" },
  { id: "label", name: "Label", icon: "🏷️" },
  { id: "textarea", name: "Textarea", icon: "📄" },
  { id: "separator", name: "Separator", icon: "➖" },
  { id: "progress", name: "Progress", icon: "📊" },
  { id: "skeleton", name: "Skeleton", icon: "💀" },
  { id: "tooltip", name: "Tooltip", icon: "💡" },
];

interface SidebarProps {
  selectedComponent: string;
  onSelectComponent: (id: string) => void;
}

export function Sidebar({ selectedComponent, onSelectComponent }: SidebarProps) {
  return (
    <div className="w-72 bg-white border-r border-gray-100 h-screen overflow-y-auto">
      <div className="p-8 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">HDS</h1>
        <p className="text-sm text-gray-500">Design System</p>
      </div>
      <nav className="px-4 pb-8">
        <div className="space-y-1">
          {components.map((component) => (
            <button
              key={component.id}
              onClick={() => onSelectComponent(component.id)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                "flex items-center gap-3",
                selectedComponent === component.id
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <span className="text-lg">{component.icon}</span>
              <span>{component.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
