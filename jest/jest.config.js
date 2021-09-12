module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './jest/babel.config.js' }]
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/jest/__mocks__/styleMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.svg': '<rootDir>/jest/__mocks__/svgrMock.js'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/coverage'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/@types/**/*'],
  collectCoverage: true,
  testEnvironment: 'jsdom'
}
