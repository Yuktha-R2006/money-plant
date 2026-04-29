import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const fixImports = (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Change figma:asset/... to @/assets/...
  content = content.replace(/from "figma:asset\/(.+?)"/g, 'from "@/assets/$1"');
  
  // Replace references to contexts
  content = content.replace(/from "(\.\.?\/)+contexts\/(.+?)"/g, 'from "@/contexts/$2"');
  // Replace references to pages
  content = content.replace(/from "(\.\.?\/)+pages\/(.+?)"/g, 'from "@/pages/$2"');
  // Replace references to components (ui, etc)
  content = content.replace(/from "(\.\.?\/)+components\/(.+?)"/g, 'from "@/components/$2"');
  // Replace references to ui if they were relative directly, e.g. from "../ui/xyz"
  content = content.replace(/from "(\.\.?\/)+ui\/(.+?)"/g, 'from "@/components/ui/$2"');

  // Specific components that moved
  content = content.replace(/from "(\.\.?\/)+Navbar"/g, 'from "@/components/layout/Navbar"');
  content = content.replace(/from "(\.\.?\/)+Footer"/g, 'from "@/components/layout/Footer"');
  content = content.replace(/from "(\.\.?\/)+Root"/g, 'from "@/components/layout/Root"');
  content = content.replace(/from "(\.\.?\/)+RegistrationModal"/g, 'from "@/components/common/RegistrationModal"');

  // Root level files
  content = content.replace(/from "(\.\.?\/)+routes"/g, 'from "@/routes"');
  content = content.replace(/from "(\.\.?\/)+App(\.tsx)?"/g, 'from "@/App"');

  // In App.tsx or similar
  content = content.replace(/from "\.\/routes"/g, 'from "@/routes"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated imports in ${filePath}`);
  }
};

walkDir('./src', fixImports);
console.log('Done fixing imports.');
