"use client";

import { Button as BaseButton, type ButtonProps } from "@/components/ui-base/button";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

/**
 * Design System Button Component
 * 
 * shadcn/ui의 Button 컴포넌트를 withFeatureFlag로 래핑하여
 * shadcn-features.config.ts의 설정에 따라 활성화/비활성화됩니다.
 * 
 * 커스텀 스타일을 추가하려면:
 * 1. /components/ui-base/button.tsx의 buttonVariants에 새로운 variant를 추가
 *    예: brand: "bg-[#FF5733] text-white hover:bg-[#FF5733]/90 shadow-lg"
 * 2. 이 컴포넌트에서 해당 variant를 사용
 * 
 * 사용 예시:
 * <Button variant="default">Click me</Button>
 * <Button variant="brand">Brand Button</Button>
 */
const WrappedButton = withFeatureFlag(BaseButton, "Button");

export { WrappedButton as Button };
export type { ButtonProps };

