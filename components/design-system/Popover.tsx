"use client";

import { Popover as BasePopover, PopoverTrigger, PopoverContent } from "@/components/ui-base/popover";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedPopover = withFeatureFlag(BasePopover, "Popover");
const WrappedPopoverTrigger = withFeatureFlag(PopoverTrigger, "Popover");
const WrappedPopoverContent = withFeatureFlag(PopoverContent, "Popover");

export { WrappedPopover as Popover, WrappedPopoverTrigger as PopoverTrigger, WrappedPopoverContent as PopoverContent };

