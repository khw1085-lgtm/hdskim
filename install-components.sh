#!/bin/bash
# shadcn/ui 컴포넌트 일괄 설치 스크립트

cd /Users/biilkim/Cursor/HDS

components=(
  "input"
  "card"
  "dialog"
  "select"
  "checkbox"
  "radio-group"
  "switch"
  "slider"
  "tabs"
  "accordion"
  "avatar"
  "badge"
  "table"
  "textarea"
  "label"
  "separator"
  "sheet"
  "tooltip"
  "dropdown-menu"
  "command"
  "calendar"
  "progress"
  "skeleton"
  "toast"
  "hover-card"
  "menubar"
  "navigation-menu"
  "scroll-area"
  "toggle"
  "toggle-group"
  "context-menu"
)

for component in "${components[@]}"; do
  echo "Installing $component..."
  npx shadcn-ui@latest add $component --yes --overwrite
done

echo "All components installed!"

