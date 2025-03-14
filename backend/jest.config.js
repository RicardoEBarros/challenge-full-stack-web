module.exports = {
  injectGlobals: false,
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts"
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  }
}