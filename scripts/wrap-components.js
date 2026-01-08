// 자동으로 컴포넌트 래퍼 생성 스크립트
const fs = require('fs');
const path = require('path');

const components = [
  'input', 'card', 'dialog', 'select', 'checkbox', 'radio-group', 'switch',
  'slider', 'tabs', 'accordion', 'avatar', 'badge', 'table', 'textarea',
  'label', 'separator', 'sheet', 'tooltip', 'dropdown-menu', 'command',
  'calendar', 'progress', 'skeleton', 'toast', 'hover-card', 'menubar',
  'navigation-menu', 'scroll-area', 'toggle', 'toggle-group', 'context-menu'
];

const template = (componentName, ComponentName, exports) => `"use client";

import { ${exports.map(e => `${e} as Base${e}`).join(', ')} } from "@/components/ui-base/${componentName}";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

${exports.map(e => `const Wrapped${e} = withFeatureFlag(Base${e}, "${ComponentName}");`).join('\n')}

export { ${exports.map(e => `Wrapped${e} as ${e}`).join(', ')} };
`;

components.forEach(comp => {
  const ComponentName = comp.split('-').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join('');
  const filePath = path.join(__dirname, `../components/ui-base/${comp}.tsx`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${comp} - file not found`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const exports = [];
  const exportMatches = content.matchAll(/export\s+(?:const|function|class|)\s+(\w+)/g);
  for (const match of exportMatches) {
    exports.push(match[1]);
  }
  
  if (exports.length === 0) {
    console.log(`No exports found for ${comp}`);
    return;
  }
  
  const wrapperPath = path.join(__dirname, `../components/design-system/${ComponentName}.tsx`);
  fs.writeFileSync(wrapperPath, template(comp, ComponentName, exports));
  console.log(`Created wrapper for ${ComponentName}`);
});

