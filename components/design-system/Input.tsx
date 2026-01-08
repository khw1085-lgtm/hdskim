"use client";

import { Input as BaseInput } from "@/components/ui-base/input";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedInput = withFeatureFlag(BaseInput, "Input");

export { WrappedInput as Input };

