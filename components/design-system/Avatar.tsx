"use client";

import { Avatar as BaseAvatar, AvatarImage, AvatarFallback } from "@/components/ui-base/avatar";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedAvatar = withFeatureFlag(BaseAvatar, "Avatar");
const WrappedAvatarImage = withFeatureFlag(AvatarImage, "Avatar");
const WrappedAvatarFallback = withFeatureFlag(AvatarFallback, "Avatar");

export { 
  WrappedAvatar as Avatar,
  WrappedAvatarImage as AvatarImage,
  WrappedAvatarFallback as AvatarFallback
};

