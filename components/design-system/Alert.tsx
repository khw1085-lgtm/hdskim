"use client";

import { Alert as BaseAlert, AlertTitle, AlertDescription } from "@/components/ui-base/alert";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedAlert = withFeatureFlag(BaseAlert, "Alert");
const WrappedAlertTitle = withFeatureFlag(AlertTitle, "Alert");
const WrappedAlertDescription = withFeatureFlag(AlertDescription, "Alert");

export { WrappedAlert as Alert, WrappedAlertTitle as AlertTitle, WrappedAlertDescription as AlertDescription };

