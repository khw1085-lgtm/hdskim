"use client";

import { Textarea as BaseTextarea } from "@/components/ui-base/textarea";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedTextarea = withFeatureFlag(BaseTextarea, "Textarea");

export { WrappedTextarea as Textarea };

