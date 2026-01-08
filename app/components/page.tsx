"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ComponentShowcase } from "@/components/gallery/ComponentShowcase";
import { Menu } from "lucide-react";
import { Button } from "@/components/design-system";

function ComponentsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const componentId = searchParams.get("id") || "button";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(componentId);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setSelectedComponent(componentId);
    // 컴포넌트가 선택되면 사이드바 열기 (데스크톱에서만)
    if (componentId && typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  }, [componentId]);

  const handleSelectComponent = (id: string) => {
    setSelectedComponent(id);
    router.push(`/components?id=${id}`);
    // 모바일에서는 사이드바 닫기
    if (isMounted && typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex pt-14">
      {isMounted && (
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          selectedComponent={selectedComponent}
          onSelectComponent={handleSelectComponent}
          title="Components"
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
        <ComponentShowcase componentId={selectedComponent} />
      </div>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={
        <div className="flex pt-14">
          <div className="flex-1 lg:ml-64 p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      }>
        <ComponentsContent />
      </Suspense>
    </div>
  );
}
