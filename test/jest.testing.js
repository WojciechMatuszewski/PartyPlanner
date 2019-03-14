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
    '^.+\\.tsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@generated/(.*)': '<rootDir>/generated/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@apolloSetup/(.*)': '<rootDir>/apolloSetup/$1',
    '@axios/(.*)': '<rootDir>/axios/$1'
  },

  transformIgnorePatterns: ['<rootDir>/node_modules/', 'jest.*']
};
