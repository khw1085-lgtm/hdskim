"use client";

import { Button } from "@/components/design-system";
import { Alert, AlertTitle, AlertDescription } from "@/components/design-system";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/design-system";
import { Input } from "@/components/design-system";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/design-system";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/design-system";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/design-system";
import { Checkbox } from "@/components/design-system";
import { Switch } from "@/components/design-system";
import { Badge } from "@/components/design-system";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/design-system";
import { Label } from "@/components/design-system";
import { Textarea } from "@/components/design-system";
import { Separator } from "@/components/design-system";
import { Progress } from "@/components/design-system";
import { Skeleton } from "@/components/design-system";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/design-system";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/design-system";
import { CheckCircle2, AlertCircle, Info, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { cn } from "@/lib/utils";

interface ComponentShowcaseProps {
  componentId: string;
}

interface ExampleItem {
  id: string;
  title: string;
  preview: React.ReactNode;
  htmlCode: string;
}

export function ComponentShowcase({ componentId }: ComponentShowcaseProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("default");
  const [selectedState, setSelectedState] = useState<string>("default");
  const [selectedSize, setSelectedSize] = useState<string>("default");
  const [screenshotIndex, setScreenshotIndex] = useState<number>(0);
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);

  const sizeMap: Record<string, "2xsmall" | "xsmall" | "default" | "sm" | "lg" | undefined> = {
    "2xsmall": "2xsmall",
    "xsmall": "xsmall",
    "small": "sm",
    "default": "default",
    "large": "lg",
    "xlarge": "lg",
  };
  
  // Screenshots array - 3개의 스크린샷
  const screenshots = [
    {
      id: 1,
      component: (
        <div className="bg-white w-full h-full flex items-center justify-center">
          <Button 
            variant={selectedType as any} 
            size={sizeMap[selectedSize] || "default"}
            className="rounded-lg"
            style={{
              backgroundColor: '#584de4',
              color: '#ffffff',
              borderRadius: '8px',
              height: selectedSize === '2xsmall' ? '32px' : selectedSize === 'xsmall' ? '36px' : '36px',
              padding: '0 12px',
              fontSize: '14px',
              lineHeight: '20px',
              fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400
            }}
          >
            Button Label
          </Button>
        </div>
      )
    },
    {
      id: 2,
      component: (
        <div className="bg-white w-full h-full flex items-center justify-center">
          <Button 
            variant={selectedType as any} 
            size={sizeMap[selectedSize] || "default"}
            className="rounded-lg"
            style={{
              backgroundColor: '#584de4',
              color: '#ffffff',
              borderRadius: '8px',
              height: selectedSize === '2xsmall' ? '32px' : selectedSize === 'xsmall' ? '36px' : '36px',
              padding: '0 12px',
              fontSize: '14px',
              lineHeight: '20px',
              fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400
            }}
          >
            Button Label
          </Button>
        </div>
      )
    },
    {
      id: 3,
      component: (
        <div className="bg-white w-full h-full flex items-center justify-center">
          <Button 
            variant={selectedType as any} 
            size={sizeMap[selectedSize] || "default"}
            className="rounded-lg"
            style={{
              backgroundColor: '#584de4',
              color: '#ffffff',
              borderRadius: '8px',
              height: selectedSize === '2xsmall' ? '32px' : selectedSize === 'xsmall' ? '36px' : '36px',
              padding: '0 12px',
              fontSize: '14px',
              lineHeight: '20px',
              fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400
            }}
          >
            Button Label
          </Button>
        </div>
      )
    }
  ];

  const getButtonPreview = () => {

    const size = sizeMap[selectedSize] || "default";
    let button = <Button variant={selectedType as any} size={size}>Button</Button>;
    
    if (selectedState === "disabled") {
      button = <Button variant={selectedType as any} size={size} disabled>Button</Button>;
    } else if (selectedState === "hover") {
      // Hover state는 CSS로 처리되므로 일반 버튼으로 표시
      button = <Button variant={selectedType as any} size={size} className="hover:opacity-90">Button</Button>;
    }

    return button;
  };

  const getButtonCode = () => {
    // React 컴포넌트 코드 생성 (바로 사용 가능)
    const variantMap: Record<string, string> = {
      default: "default",
      destructive: "destructive",
      outline: "outline",
      secondary: "secondary",
      ghost: "ghost",
      link: "link"
    };
    
    const sizeMap: Record<string, string> = {
      "2xsmall": 'size="2xsmall"',
      "xsmall": 'size="xsmall"',
      "small": 'size="sm"',
      "default": "",
      "large": 'size="lg"',
      "xlarge": 'size="lg"',
    };
    
    const variant = variantMap[selectedType] || "default";
    const size = sizeMap[selectedSize] || "";
    const disabledAttr = selectedState === "disabled" ? " disabled" : "";
    const sizeAttr = size ? ` ${size}` : "";
    
    if (selectedState === "disabled") {
      const examples = [];
      
      // 1. 기본 disabled 버튼
      examples.push(`import { Button } from "@/components/design-system";

<Button variant="${variant}"${sizeAttr}${disabledAttr}>
  Label
</Button>`);

      // 2. Outline variant with icon
      if (selectedType === "outline") {
        examples.push(`import { Button } from "@/components/design-system";
import { IconName } from "lucide-react";

<Button variant="${variant}"${sizeAttr}${disabledAttr}>
  <IconName className="h-4 w-4" />
  <span>Label</span>
</Button>`);
      }

      // 3. Ghost variant with label and icon
      if (selectedType === "ghost") {
        examples.push(`import { Button } from "@/components/design-system";
import { IconName } from "lucide-react";

<Button variant="${variant}"${sizeAttr}${disabledAttr}>
  <span>Label</span>
  <IconName className="h-4 w-4" />
</Button>`);
      }

      return examples.join('\n\n');
    } else {
      return `import { Button } from "@/components/design-system";

<Button variant="${variant}"${sizeAttr}${disabledAttr}>
  Label
</Button>`;
    }
  };

  const getExamples = (): ExampleItem[] => {
    switch (componentId) {
      case "button":
        // Button은 type/state/size로 구분되므로 빈 배열 반환
        return [];

      case "alert":
        return [
          {
            id: "default",
            title: "Default",
            preview: (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            ),
            htmlCode: `import { Alert, AlertTitle, AlertDescription } from "@/components/design-system";
import { Info } from "lucide-react";

<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`
          },
          {
            id: "destructive",
            title: "Destructive",
            preview: (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            ),
            htmlCode: `import { Alert, AlertTitle, AlertDescription } from "@/components/design-system";
import { AlertCircle } from "lucide-react";

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`
          }
        ];

      case "badge":
        return [
          {
            id: "default",
            title: "Default",
            preview: <Badge>Default</Badge>,
            htmlCode: `import { Badge } from "@/components/design-system";

<Badge>Default</Badge>`
          },
          {
            id: "secondary",
            title: "Secondary",
            preview: <Badge variant="secondary">Secondary</Badge>,
            htmlCode: `import { Badge } from "@/components/design-system";

<Badge variant="secondary">Secondary</Badge>`
          },
          {
            id: "destructive",
            title: "Destructive",
            preview: <Badge variant="destructive">Destructive</Badge>,
            htmlCode: `import { Badge } from "@/components/design-system";

<Badge variant="destructive">Destructive</Badge>`
          }
        ];

      default:
        // 구현되지 않은 컴포넌트는 빈 배열 반환
        return [];
    }
  };

  const examples = getExamples();
  
  // Button 컴포넌트는 특별 처리
  if (componentId === "button") {
    const buttonTypes = [
      { id: "default", title: "Default" },
      { id: "destructive", title: "Destructive" },
      { id: "outline", title: "Outline" },
      { id: "secondary", title: "Secondary" },
      { id: "ghost", title: "Ghost" },
      { id: "link", title: "Link" }
    ];

    const buttonStates = [
      { id: "default", title: "Default" },
      { id: "disabled", title: "Disabled" },
      { id: "hover", title: "Hover" }
    ];

    const buttonSizes = [
      { id: "2xsmall", title: "2XSmall" },
      { id: "xsmall", title: "XSmall" },
      { id: "small", title: "Small" },
      { id: "default", title: "Default" },
      { id: "large", title: "Large" },
      { id: "xlarge", title: "XLarge" }
    ];

    return (
      <div className="flex-1 overflow-hidden bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-12 py-16">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-3 text-gray-900">Button</h1>
              <p className="text-gray-500 text-lg">
                다양한 variant와 사용 예시를 확인하세요
              </p>
            </div>

            {/* Type Segment Control */}
            <div className="mb-6">
              <div className="mb-3">
                <label className="text-sm font-medium text-gray-700">Type</label>
              </div>
              <Tabs value={selectedType} onValueChange={setSelectedType}>
                <TabsList className="bg-gray-100 p-1 inline-flex h-10">
                  {buttonTypes.map((type) => (
                    <TabsTrigger
                      key={type.id}
                      value={type.id}
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                      {type.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* State Segment Control */}
            <div className="mb-6">
              <div className="mb-3">
                <label className="text-sm font-medium text-gray-700">State</label>
              </div>
              <Tabs value={selectedState} onValueChange={setSelectedState}>
                <TabsList className="bg-gray-100 p-1 inline-flex h-10">
                  {buttonStates.map((state) => (
                    <TabsTrigger
                      key={state.id}
                      value={state.id}
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                      {state.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Size Segment Control */}
            <div className="mb-8">
              <div className="mb-3">
                <label className="text-sm font-medium text-gray-700">Size</label>
              </div>
              <Tabs value={selectedSize} onValueChange={setSelectedSize}>
                <TabsList className="bg-gray-100 p-1 inline-flex h-10">
                  {buttonSizes.map((size) => (
                    <TabsTrigger
                      key={size.id}
                      value={size.id}
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                      {size.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Main Preview Area */}
            <div className="mb-8">
              <div 
                className={cn(
                  "bg-white border border-gray-200 rounded-lg p-12 transition-all duration-200",
                  "hover:border-gray-300 hover:shadow-sm group"
                )}
              >
                <div className="flex items-center justify-center min-h-[200px] gap-4 group-hover:gap-6 transition-all duration-200">
                  {getButtonPreview()}
                </div>
              </div>
            </div>

            {/* Screenshot Section */}
            <div className="mb-8 mt-[100px]">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">스크린샷</h2>
              
              {/* Screenshot Gallery - 3개 가로 나열, 해상도 비율 유지 */}
              <div className="p-8">
                <div className="flex items-center justify-center gap-4 w-full">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={screenshot.id}
                      className="cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 flex-shrink-0 border border-black"
                      onClick={() => {
                        setScreenshotIndex(index);
                        setIsScreenshotModalOpen(true);
                      }}
                      style={{ width: '230px', height: '500px' }}
                    >
                      <div 
                        className="bg-white flex items-center justify-center w-full h-full"
                        style={{ 
                          width: '230px', 
                          height: '500px',
                          background: '#ffffff'
                        }}
                      >
                        <div style={{ transform: 'scale(0.59)', transformOrigin: 'center' }}>
                          {screenshot.component}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshot Modal */}
              {isScreenshotModalOpen && (
                <div 
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                  onClick={() => setIsScreenshotModalOpen(false)}
                >
                  {/* Previous Button - Left */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setScreenshotIndex(prev => prev === 0 ? screenshots.length - 1 : prev - 1);
                    }}
                    className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>

                  {/* Next Button - Right */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setScreenshotIndex(prev => prev === screenshots.length - 1 ? 0 : prev + 1);
                    }}
                    className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>

                  <div 
                    className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                    style={{ width: '390px', height: '844px' }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIsScreenshotModalOpen(false)}
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>

                    {/* Full Size Screenshot */}
                    <div 
                      className="bg-white flex items-center justify-center w-full h-full"
                      style={{ 
                        width: '390px', 
                        height: '844px',
                        background: '#ffffff'
                      }}
                    >
                      {screenshots[screenshotIndex]?.component}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const [selectedVariant, setSelectedVariant] = useState<string>("");
  
  const defaultVariant = examples.length > 0 ? examples[0].id : "";
  const currentVariant = selectedVariant || defaultVariant;
  const selectedExampleData = examples.length > 0 
    ? (examples.find(e => e.id === currentVariant) || examples[0])
    : null;

  const components = [
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

  if (examples.length === 0 && componentId !== "button") {
    return (
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-12 py-16">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3 text-gray-900">
              {components.find((c) => c.id === componentId)?.name || "Component"}
            </h1>
            <p className="text-gray-500 text-lg">
              이 컴포넌트는 아직 구현 중입니다.
            </p>
          </div>
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500">Coming Soon</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-hidden bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-12 py-16">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3 text-gray-900">
              {components.find((c) => c.id === componentId)?.name || "Component"}
            </h1>
            <p className="text-gray-500 text-lg">
              다양한 variant와 사용 예시를 확인하세요
            </p>
          </div>

          {/* Segment Control */}
          {examples.length > 1 && (
            <div className="mb-8">
              <Tabs value={currentVariant} onValueChange={setSelectedVariant}>
                <TabsList className="bg-gray-100 p-1 inline-flex h-10">
                  {examples.map((example) => (
                    <TabsTrigger
                      key={example.id}
                      value={example.id}
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                      {example.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          )}

          {/* Main Preview Area */}
          {selectedExampleData && selectedExampleData.preview && (
            <div className="mb-8">
              <div 
                className={cn(
                  "bg-white border border-gray-200 rounded-lg p-12 transition-all duration-200",
                  "hover:border-gray-300 hover:shadow-sm group"
                )}
              >
                <div className="flex items-center justify-center min-h-[200px] gap-4 group-hover:gap-6 transition-all duration-200">
                  {selectedExampleData.preview}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
