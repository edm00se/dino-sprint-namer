// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration
import { defineConfig } from 'jest';

export default defineConfig({
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': [
      'babel-jest',
      { plugins: ['@babel/plugin-transform-modules-commonjs'] }
    ]
  }
});
