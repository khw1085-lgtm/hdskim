"use client";

import { Tooltip as BaseTooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui-base/tooltip";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedTooltip = withFeatureFlag(BaseTooltip, "Tooltip");
const WrappedTooltipTrigger = withFeatureFlag(TooltipTrigger, "Tooltip");
const WrappedTooltipContent = withFeatureFlag(TooltipContent, "Tooltip");
const WrappedTooltipProvider = withFeatureFlag(TooltipProvider, "Tooltip");

export { 
  WrappedTooltip as Tooltip,
  WrappedTooltipTrigger as TooltipTrigger,
  WrappedTooltipContent as TooltipContent,
  WrappedTooltipProvider as TooltipProvider
};

