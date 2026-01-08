"use client";

import { Label as BaseLabel } from "@/components/ui-base/label";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedLabel = withFeatureFlag(BaseLabel, "Label");

export { WrappedLabel as Label };

