const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

// Fields for npm distribution
const distPkg = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  license: pkg.license,
  keywords: pkg.keywords,
  repository: pkg.repository,
  bugs: pkg.bugs,
  homepage: pkg.homepage,

  // Entry points - tsup outputs to dist root
  main: './index.js',           // CommonJS
  module: './index.mjs',        // ESM
  types: './index.d.ts',        // TypeScript types

  // Modern exports field for better module resolution
  exports: {
    '.': {
      require: './index.js',
      import: './index.mjs',
      types: './index.d.ts'
    }
  },

  // Specify which files to include (everything in dist)
  files: ['*'],

  // Runtime dependencies only
  dependencies: pkg.dependencies,
  peerDependencies: pkg.peerDependencies,
};

// Remove undefined/empty fields
Object.keys(distPkg).forEach(key => {
  const value = distPkg[key];
  if (value === undefined || value === '' ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'object' && Object.keys(value).length === 0)) {
    delete distPkg[key];
  }
});

const distPath = path.join(__dirname, '../dist');
fs.writeFileSync(
  path.join(distPath, 'package.json'),
  JSON.stringify(distPkg, null, 2) + '\n'
);

console.log('✓ Created dist/package.json');
