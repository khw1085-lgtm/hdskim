# 문제 해결 가이드

## 현재 문제: "Operation not permitted" 에러

이 문제는 macOS의 보안 정책이나 파일 시스템 권한 문제로 발생할 수 있습니다.

## 해결 방법

### 1. 터미널에서 직접 실행

```bash
cd /Users/biilkim/Cursor/HDS
npm run dev
```

### 2. 프로젝트 권한 확인 및 수정

```bash
# 프로젝트 폴더 권한 확인
ls -la /Users/biilkim/Cursor/HDS

# 필요시 권한 수정
chmod -R 755 /Users/biilkim/Cursor/HDS
```

### 3. 완전 재설치

```bash
cd /Users/biilkim/Cursor/HDS
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

### 4. 다른 위치로 프로젝트 이동 (최후의 수단)

```bash
# 프로젝트를 다른 위치로 복사
cp -r /Users/biilkim/Cursor/HDS ~/Desktop/HDS
cd ~/Desktop/HDS
npm install
npm run dev
```

### 5. macOS 보안 설정 확인

시스템 설정 > 보안 및 개인 정보 보호에서:
- 터미널 또는 Cursor에 "전체 디스크 접근 권한"이 있는지 확인
- 필요시 권한 추가

## 빠른 테스트

간단한 페이지로 테스트:

```bash
# app/page.tsx를 최소한으로 수정
echo 'export default function Home() { return <div>Test</div>; }' > app/page.tsx
npm run dev
```

이것도 작동하지 않으면 Next.js 설치 자체에 문제가 있을 수 있습니다.

