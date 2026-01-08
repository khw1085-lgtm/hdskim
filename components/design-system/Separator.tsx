"use client";

import { Separator as BaseSeparator } from "@/components/ui-base/separator";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedSeparator = withFeatureFlag(BaseSeparator, "Separator");

export { WrappedSeparator as Separator };

