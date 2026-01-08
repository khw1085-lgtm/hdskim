# HDS - Shadcn-Based Switchable Design System

shadcn/ui 기반의 중앙 관리형 디자인 시스템으로, 설정 파일 하나로 컴포넌트의 사용 여부를 제어할 수 있습니다.

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
/src (또는 루트)
  /components
    /ui-base          # shadcn/ui CLI로 설치되는 원본 컴포넌트들
    /design-system    # 실제 프로젝트에서 import해서 쓸 '제어 가능한' 컴포넌트들
       index.ts       # 여기서 모든 디자인 시스템 컴포넌트를 export
    /wrapper          # 기능 On/Off를 담당하는 HOC
  shadcn-features.config.ts  # 컴포넌트 활성화 여부 설정 파일
```

## 🎯 핵심 기능

### Feature Switch (컴포넌트 On/Off)

`shadcn-features.config.ts` 파일에서 각 컴포넌트의 활성화 여부를 제어할 수 있습니다:

```typescript
export const shadcnFeatures = {
  Button: true,   // 활성화
  Input: false,   // 비활성화 (렌더링되지 않음)
  Card: true,
} as const;
```

### 사용 방법

```tsx
import { Button } from '@/components/design-system';

export default function MyPage() {
  return (
    <Button variant="default">Click me</Button>
  );
}
```

`shadcn-features.config.ts`에서 `Button: false`로 설정하면, 위 컴포넌트는 렌더링되지 않습니다.

## 🎨 커스텀 디자인 확장

### Variant 추가하기

1. `/components/ui-base/button.tsx`의 `buttonVariants`에 새로운 variant 추가:

```typescript
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        // 기존 variants...
        brand: "bg-[#FF5733] text-white hover:bg-[#FF5733]/90 shadow-lg",
        "soft-outline": "border-2 border-primary/20 bg-primary/5 hover:bg-primary/10",
      },
    },
  }
);
```

2. 사용:

```tsx
<Button variant="brand">Brand Button</Button>
```

## 📦 새로운 컴포넌트 추가하기

### 1. shadcn/ui 컴포넌트 설치

```bash
npx shadcn-ui@latest add input
```

컴포넌트는 자동으로 `/components/ui-base`에 설치됩니다.

### 2. Design System 래퍼 생성

`/components/design-system/Input.tsx` 생성:

```typescript
"use client";

import { Input as BaseInput, type InputProps } from "@/components/ui-base/input";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedInput = withFeatureFlag(BaseInput, "Input");

export { WrappedInput as Input };
export type { InputProps };
```

### 3. Config에 추가

`shadcn-features.config.ts`:

```typescript
export const shadcnFeatures = {
  Button: true,
  Input: true,  // 추가
  // ...
} as const;
```

### 4. Index에 Export

`/components/design-system/index.ts`:

```typescript
export { Button } from "./Button";
export { Input } from "./Input";  // 추가
export type { ButtonProps } from "./Button";
export type { InputProps } from "./Input";
```

## 🧪 테스트

`shadcn-features.config.ts`에서 컴포넌트를 `false`로 설정하고 페이지를 새로고침하면 해당 컴포넌트가 렌더링되지 않습니다.

## 📚 참고 자료

- [shadcn/ui 공식 문서](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)

