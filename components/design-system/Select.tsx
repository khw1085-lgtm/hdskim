"use client";

import { Select as BaseSelect, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectLabel, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton } from "@/components/ui-base/select";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedSelect = withFeatureFlag(BaseSelect, "Select");
const WrappedSelectGroup = withFeatureFlag(SelectGroup, "Select");
const WrappedSelectValue = withFeatureFlag(SelectValue, "Select");
const WrappedSelectTrigger = withFeatureFlag(SelectTrigger, "Select");
const WrappedSelectContent = withFeatureFlag(SelectContent, "Select");
const WrappedSelectItem = withFeatureFlag(SelectItem, "Select");
const WrappedSelectLabel = withFeatureFlag(SelectLabel, "Select");
const WrappedSelectSeparator = withFeatureFlag(SelectSeparator, "Select");
const WrappedSelectScrollUpButton = withFeatureFlag(SelectScrollUpButton, "Select");
const WrappedSelectScrollDownButton = withFeatureFlag(SelectScrollDownButton, "Select");

export { 
  WrappedSelect as Select,
  WrappedSelectGroup as SelectGroup,
  WrappedSelectValue as SelectValue,
  WrappedSelectTrigger as SelectTrigger,
  WrappedSelectContent as SelectContent,
  WrappedSelectItem as SelectItem,
  WrappedSelectLabel as SelectLabel,
  WrappedSelectSeparator as SelectSeparator,
  WrappedSelectScrollUpButton as SelectScrollUpButton,
  WrappedSelectScrollDownButton as SelectScrollDownButton
};

