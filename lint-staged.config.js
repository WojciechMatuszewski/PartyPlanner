module.exports = {
  '*.{ts,tsx}': [
    'eslint . --fix -c .eslintrc',
    'prettier --write',
    'git add',
    'jest --bail --findRelatedTests'
  ]
};
