# 프로젝트 재설정 가이드

## 현재 문제
"Operation not permitted" 에러로 인해 Next.js가 정상 작동하지 않습니다.

## 해결 방법

### 방법 1: 완전 재설치 (권장)

터미널에서 다음 명령어를 순서대로 실행하세요:

```bash
# 1. 프로젝트 폴더로 이동
cd /Users/biilkim/Cursor/HDS

# 2. 실행 중인 서버 종료 (Ctrl+C)

# 3. 모든 캐시 및 의존성 삭제
rm -rf node_modules package-lock.json .next

# 4. npm 캐시 클리어
npm cache clean --force

# 5. 의존성 재설치
npm install

# 6. 서버 실행
npm run dev
```

### 방법 2: 프로젝트를 새 위치로 복사

```bash
# Desktop에 새 프로젝트 복사
cp -r /Users/biilkim/Cursor/HDS ~/Desktop/HDS-fresh

# 새 위치로 이동
cd ~/Desktop/HDS-fresh

# 의존성 재설치
rm -rf node_modules package-lock.json .next
npm install

# 서버 실행
npm run dev
```

### 방법 3: Next.js 버전 다운그레이드

만약 Next.js 15가 문제라면:

```bash
cd /Users/biilkim/Cursor/HDS
rm -rf node_modules package-lock.json .next
npm install next@14.2.18 --save
npm install
npm run dev
```

## 확인 사항

서버가 시작되면:
- 터미널에 "Ready" 메시지가 보여야 합니다
- `http://localhost:3000` 접속 시 페이지가 보여야 합니다
- 브라우저 콘솔에 에러가 없어야 합니다

## 여전히 문제가 발생하는 경우

1. **macOS 보안 설정 확인:**
   - 시스템 설정 > 보안 및 개인 정보 보호
   - 전체 디스크 접근 권한에서 터미널 앱 확인

2. **프로젝트 권한 확인:**
   ```bash
   ls -la /Users/biilkim/Cursor/HDS
   chmod -R 755 /Users/biilkim/Cursor/HDS
   ```

3. **다른 포트로 실행:**
   ```bash
   PORT=3001 npm run dev
   ```

