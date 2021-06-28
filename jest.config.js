const path = require('path');

module.exports = {
  verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // moduleDirectories: [ "node_modules"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: path.join(__dirname, 'src'),
  testMatch: [
    '**/*.{spec,test}.{js,jsx,ts,tsx}',
    '**/__tests?__/**/*.{js,jsx,ts,tsx}'
  ],
  testPathIgnorePatterns: ['node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
