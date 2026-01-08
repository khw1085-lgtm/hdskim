/**
 * Shadcn Features Configuration
 * 
 * 이 파일에서 각 컴포넌트의 활성화 여부를 제어합니다.
 * false로 설정된 컴포넌트는 withFeatureFlag HOC에 의해 렌더링되지 않습니다.
 */
export const shadcnFeatures = {
  Button: true,
  Input: true,
  Card: true,
  Alert: true,
  Popover: true,
  Dialog: true,
  Select: true,
  Checkbox: true,
  Switch: true,
  Tabs: true,
  Badge: true,
  Avatar: true,
  Label: true,
  Textarea: true,
  Separator: true,
  Progress: true,
  Skeleton: true,
  Tooltip: true,
  // 추가 컴포넌트들을 여기에 정의하세요
} as const;

export type ShadcnFeatureKey = keyof typeof shadcnFeatures;

