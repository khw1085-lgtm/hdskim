"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/design-system";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="relative overflow-x-auto text-sm pb-12">
        <code className="font-mono text-gray-900 leading-relaxed whitespace-pre">{code}</code>
      </pre>
      <div className="absolute right-4 bottom-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-gray-200 rounded-md bg-white shadow-sm border border-gray-200"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4 text-gray-500" />
          )}
        </Button>
      </div>
    </div>
  );
}

