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
import { CheckCircle2, AlertCircle, Info } from "lucide-react";
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

  const getButtonPreview = () => {
    let button = <Button variant={selectedType as any}>Button</Button>;
    
    if (selectedState === "disabled") {
      button = <Button variant={selectedType as any} disabled>Button</Button>;
    } else if (selectedState === "hover") {
      // Hover state는 CSS로 처리되므로 일반 버튼으로 표시
      button = <Button variant={selectedType as any} className="hover:opacity-90">Button</Button>;
    }

    // Size는 나중에 구현
    // if (selectedSize === "small") {
    //   button = <Button variant={selectedType as any} size="sm">Button</Button>;
    // }

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
    
    const variant = variantMap[selectedType] || "default";
    const disabledAttr = selectedState === "disabled" ? " disabled" : "";
    
    if (selectedState === "disabled") {
      const examples = [];
      
      // 1. 기본 disabled 버튼
      examples.push(`import { Button } from "@/components/design-system";

<Button variant="${variant}"${disabledAttr}>
  Label
</Button>`);

      // 2. Outline variant with icon
      if (selectedType === "outline") {
        examples.push(`import { Button } from "@/components/design-system";
import { IconName } from "lucide-react";

<Button variant="${variant}"${disabledAttr}>
  <IconName className="h-4 w-4" />
  <span>Label</span>
</Button>`);
      }

      // 3. Ghost variant with label and icon
      if (selectedType === "ghost") {
        examples.push(`import { Button } from "@/components/design-system";
import { IconName } from "lucide-react";

<Button variant="${variant}"${disabledAttr}>
  <span>Label</span>
  <IconName className="h-4 w-4" />
</Button>`);
      }

      return examples.join('\n\n');
    } else {
      return `import { Button } from "@/components/design-system";

<Button variant="${variant}"${disabledAttr}>
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
