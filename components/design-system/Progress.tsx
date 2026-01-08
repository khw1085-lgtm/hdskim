"use client";

import { Progress as BaseProgress } from "@/components/ui-base/progress";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedProgress = withFeatureFlag(BaseProgress, "Progress");

export { WrappedProgress as Progress };

