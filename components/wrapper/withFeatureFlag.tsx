"use client";

import { shadcnFeatures, type ShadcnFeatureKey } from "@/shadcn-features.config";
import React from "react";

/**
 * Higher Order Component (HOC) for Feature Flagging
 * 
 * 컴포넌트를 감싸서 shadcn-features.config.ts의 설정에 따라
 * 컴포넌트의 렌더링 여부를 제어합니다.
 * 
 * @param Component - 래핑할 컴포넌트
 * @param featureKey - shadcn-features.config.ts에 정의된 컴포넌트 키
 * @returns 설정이 false인 경우 null을 반환하고, true인 경우 컴포넌트를 그대로 반환
 */
export function withFeatureFlag<P extends object>(
  Component: React.ComponentType<P>,
  featureKey: ShadcnFeatureKey
) {
  const WrappedComponent = (props: P) => {
    const isEnabled = shadcnFeatures[featureKey];

    if (!isEnabled) {
      return null;
      // 또는 커스텀 fallback UI를 반환할 수 있습니다:
      // return <div className="text-muted-foreground text-sm">Coming Soon</div>;
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withFeatureFlag(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
}

