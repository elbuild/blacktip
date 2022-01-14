export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/test/*.spec.[jt]s?(x)'
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testURL: 'http://localhost/'
}