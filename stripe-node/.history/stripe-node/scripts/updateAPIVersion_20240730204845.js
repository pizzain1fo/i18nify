#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


const read = (file) => fs.readFileSync(path.resolve(file), 'utf8');
const write = (file, content) => fs.writeFileSync(path.resolve(file), content, 'utf8');
const edit = (file, cb) => write(file, cb(read(file)));

// Define the regex pattern for API version
const API_VERSION_PATTERN = '2[0-9]{3}-[0-9]{2}-[0-9]{2}';

const main = () => {
  const filePath = 'src/apiVersion.ts';
  const fileContent = read(filePath);

 
  if (!match) {
    throw new Error(`Expected 1 match for ApiVersion = '...' in ${filePath}, but found none.`);
  }
  const apiVersion = match[1];


  const replaceAPIVersion = (file, pattern) => {
    const [prefix, suffix] = pattern.split('API_VERSION');
    const regex = new RegExp(`${prefix}${API_VERSION_PATTERN}${suffix}`, 'g');

    edit(file, (content) => content.replace(regex, `${prefix}${apiVersion}${suffix}`));
  };

  
  const replacements = [
    { file: 'README.md', pattern: "apiVersion: ['\"]API_VERSION['\"]" },
    { file: 'package.json', pattern: '"types": "types/API_VERSION/index.d.ts' },
    { file: 'types/lib.d.ts', pattern: "export type LatestApiVersion = ['\"]API_VERSION['\"]" },
    { file: 'types/test/typescriptTest.ts', pattern: '///<reference types=["\']\\.\\./API_VERSION[\'"]' },
    { file: 'types/test/typescriptTest.ts', pattern: "apiVersion: ['\"]API_VERSION['\"]" },
  ];

  replacements.forEach(({ file, pattern }) => replaceAPIVersion(file, pattern));
};

if (require.main === module) {
  main();
}
