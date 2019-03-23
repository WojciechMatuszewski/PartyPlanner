const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  runner: 'jest-runner-eslint',
  displayName: 'LINT',
  testMatch: ['**/*.+(j|t)s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', 'jest.*'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less)$': 'identity-obj-proxy'
  }
};
