# 터미널 사용 가이드

## Cursor 에이전트 터미널은 읽기 전용입니다

Cursor의 에이전트 터미널은 읽기 전용이므로, 직접 입력할 수 없습니다.

## 해결 방법

### 방법 1: 시스템 터미널 사용 (권장)

1. **Spotlight로 터미널 열기:**
   - `Cmd + Space` 누르기
   - "터미널" 입력 후 Enter

2. **또는 Finder에서:**
   - Finder 열기
   - `Cmd + Shift + U` (유틸리티 폴더)
   - 터미널 앱 더블클릭

3. **터미널에서 다음 명령어 실행:**
   ```bash
   cd /Users/biilkim/Cursor/HDS
   npm run dev
   ```

### 방법 2: Cursor의 통합 터미널 사용

1. Cursor에서 `Ctrl + `` (백틱) 또는 `View > Terminal` 메뉴
2. 새 터미널 탭이 열리면 직접 입력 가능
3. 다음 명령어 실행:
   ```bash
   cd /Users/biilkim/Cursor/HDS
   npm run dev
   ```

### 방법 3: Desktop의 복사본 사용

이미 Desktop에 복사본이 있으므로:
```bash
cd ~/Desktop/HDS
npm run dev
```

## 에러가 발생하는 경우

만약 "Operation not permitted" 에러가 계속 발생한다면:

```bash
# 프로젝트 폴더 권한 확인
ls -la /Users/biilkim/Cursor/HDS

# 권한 수정
chmod -R 755 /Users/biilkim/Cursor/HDS

# node_modules 권한 수정
cd /Users/biilkim/Cursor/HDS
chmod -R u+r node_modules

# 다시 실행
npm run dev
```

## 포트가 이미 사용 중인 경우

```bash
# 포트 3000 사용 중인 프로세스 확인
lsof -ti:3000

# 프로세스 종료
kill -9 $(lsof -ti:3000)

# 다른 포트로 실행
PORT=3001 npm run dev
```

