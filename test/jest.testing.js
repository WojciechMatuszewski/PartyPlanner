const path = require('path');

module.exports = {
  displayName: 'TEST',
  rootDir: path.join(__dirname, '..'),
  // look for ts files
  testMatch: ['**/*.test.(j|t)s?(x)'],
  // tells it that ts/tsx files are valid modules
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  // explicitly transform ts/tsx with babel
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', 'jest.*']
};
