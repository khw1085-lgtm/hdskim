"use client";

import { Tabs as BaseTabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui-base/tabs";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedTabs = withFeatureFlag(BaseTabs, "Tabs");
const WrappedTabsList = withFeatureFlag(TabsList, "Tabs");
const WrappedTabsTrigger = withFeatureFlag(TabsTrigger, "Tabs");
const WrappedTabsContent = withFeatureFlag(TabsContent, "Tabs");

export { 
  WrappedTabs as Tabs,
  WrappedTabsList as TabsList,
  WrappedTabsTrigger as TabsTrigger,
  WrappedTabsContent as TabsContent
};

