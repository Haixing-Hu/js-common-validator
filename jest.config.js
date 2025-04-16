////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  verbose: true,
  testMatch: ['**/test/**/*.test.js'],
  testEnvironment: 'jest-environment-jsdom-global',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  moduleFileExtensions: ['js'],
  transform: {
    '\\.js$': 'babel-jest',
  },
  // transformIgnorePatterns: [
  //   '/node_modules/(?!@qubit-ltd)',
  // ],
  setupFilesAfterEnv: [
    'jest-extended/all',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/index.js',
    'src/validators/**/*.js',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
