const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, ".."),
  runner: "jest-runner-eslint",
  displayName: "LINT",
  testMatch: ["**/*.+(j|t)s?(x)"],
  testPathIgnorePatterns: ["node_modules", "webpack-config", "dist"],
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"]
};
