module.exports = {
  rootDir: '../../',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.svg': '<rootDir>/test/__mocks__/svgrMock.js'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/coverage'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/__config__/jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/@types/**/*'],
  collectCoverage: true,
  testEnvironment: '<rootDir>/test/__config__/jest.env.ts'
}
