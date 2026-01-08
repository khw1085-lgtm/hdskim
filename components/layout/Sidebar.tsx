"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "@/components/design-system";

interface ComponentItem {
  id: string;
  name: string;
}

const components: ComponentItem[] = [
  { id: "button", name: "Button" },
  { id: "alert", name: "Alert" },
  { id: "popover", name: "Popover" },
  { id: "input", name: "Input" },
  { id: "card", name: "Card" },
  { id: "dialog", name: "Dialog" },
  { id: "select", name: "Select" },
  { id: "checkbox", name: "Checkbox" },
  { id: "switch", name: "Switch" },
  { id: "tabs", name: "Tabs" },
  { id: "badge", name: "Badge" },
  { id: "avatar", name: "Avatar" },
  { id: "label", name: "Label" },
  { id: "textarea", name: "Textarea" },
  { id: "separator", name: "Separator" },
  { id: "progress", name: "Progress" },
  { id: "skeleton", name: "Skeleton" },
  { id: "tooltip", name: "Tooltip" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedComponent: string;
  onSelectComponent: (id: string) => void;
  title?: string;
}

export function Sidebar({ 
  isOpen, 
  onClose, 
  selectedComponent, 
  onSelectComponent,
  title = "Components"
}: SidebarProps) {
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
            {components.map((component) => (
              <button
                key={component.id}
                onClick={() => {
                  onSelectComponent(component.id);
                  onClose();
                }}
                className={cn(
                  "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                  selectedComponent === component.id
                    ? "text-gray-900 font-bold"
                    : "text-gray-500 hover:text-gray-900 font-medium"
                )}
              >
                {component.name}
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
