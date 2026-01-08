"use client";

import { Card as BaseCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui-base/card";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedCard = withFeatureFlag(BaseCard, "Card");
const WrappedCardHeader = withFeatureFlag(CardHeader, "Card");
const WrappedCardTitle = withFeatureFlag(CardTitle, "Card");
const WrappedCardDescription = withFeatureFlag(CardDescription, "Card");
const WrappedCardContent = withFeatureFlag(CardContent, "Card");
const WrappedCardFooter = withFeatureFlag(CardFooter, "Card");

export { 
  WrappedCard as Card,
  WrappedCardHeader as CardHeader,
  WrappedCardTitle as CardTitle,
  WrappedCardDescription as CardDescription,
  WrappedCardContent as CardContent,
  WrappedCardFooter as CardFooter
};

