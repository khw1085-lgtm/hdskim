"use client";

import { Skeleton as BaseSkeleton } from "@/components/ui-base/skeleton";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedSkeleton = withFeatureFlag(BaseSkeleton, "Skeleton");

export { WrappedSkeleton as Skeleton };

