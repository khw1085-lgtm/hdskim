"use client";

import { Badge as BaseBadge } from "@/components/ui-base/badge";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedBadge = withFeatureFlag(BaseBadge, "Badge");

export { WrappedBadge as Badge };

