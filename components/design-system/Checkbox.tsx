"use client";

import { Checkbox as BaseCheckbox } from "@/components/ui-base/checkbox";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedCheckbox = withFeatureFlag(BaseCheckbox, "Checkbox");

export { WrappedCheckbox as Checkbox };

