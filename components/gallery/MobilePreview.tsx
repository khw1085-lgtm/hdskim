"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, GripVertical } from "lucide-react";
import { Button } from "@/components/design-system";

interface DroppedComponent {
  id: string;
  type: string;
  layoutType: "fill" | "fixed";
  component: React.ReactNode;
}

interface MobilePreviewProps {
  droppedComponents: DroppedComponent[];
  onRemove: (id: string) => void;
  onLayoutChange: (id: string, layoutType: "fill" | "fixed") => void;
  onDrop?: (component: React.ReactNode, type: string) => void;
}

export function MobilePreview({ droppedComponents, onRemove, onLayoutChange, onDrop }: MobilePreviewProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    
    try {
      const data = e.dataTransfer.getData("text/plain");
      if (data) {
        const componentData = JSON.parse(data);
        if (onDrop) {
          onDrop(null, componentData.type || "component");
        }
      }
    } catch (error) {
      console.error("Failed to parse drop data:", error);
    }
  };
  return (
    <div className="w-80 border-l border-gray-200 bg-gray-50 h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Mobile Preview</h3>
        <p className="text-xs text-gray-500">컴포넌트를 드래그하여 배치하세요</p>
      </div>
      
      <div className="p-4">
        {/* Mobile Frame */}
        <div className="bg-white rounded-2xl shadow-lg border-4 border-gray-900 mx-auto" style={{ width: '375px', maxWidth: '100%' }}>
          <div className="bg-gray-900 rounded-t-xl h-8 flex items-center justify-center">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            </div>
          </div>
          <div 
            className={cn(
              "bg-white rounded-b-xl min-h-[600px] p-4 transition-colors",
              isDraggingOver && "bg-blue-50"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {droppedComponents.length === 0 ? (
              <div className="flex items-center justify-center h-full min-h-[500px] text-gray-400 text-sm border-2 border-dashed border-gray-300 rounded-lg">
                컴포넌트를 드래그하여 추가하세요
              </div>
            ) : (
              <div className="space-y-4">
                {droppedComponents.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "relative group border-2 border-dashed border-gray-300 rounded-lg p-3 transition-all",
                      item.layoutType === "fill" ? "w-full" : "w-auto"
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-medium text-gray-600">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={item.layoutType}
                          onChange={(e) => onLayoutChange(item.id, e.target.value as "fill" | "fixed")}
                          className="text-xs border border-gray-300 rounded px-2 py-1 bg-white"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="fill">Fill</option>
                          <option value="fixed">Fixed</option>
                        </select>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <X className="h-3 w-3 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <div className={cn(item.layoutType === "fill" ? "w-full" : "")}>
                      {item.component}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

