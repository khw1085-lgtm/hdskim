"use client";

import { Switch as BaseSwitch } from "@/components/ui-base/switch";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedSwitch = withFeatureFlag(BaseSwitch, "Switch");

export { WrappedSwitch as Switch };

