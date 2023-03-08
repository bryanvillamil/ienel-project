// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@atoms/(.*)$': '<rootDir>/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/components/organisms/$1',
    '^@templates/(.*)$': '<rootDir>/templates/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@app/(.*)$': '<rootDir>/app/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~styles/(.*)$': '<rootDir>/styles/$1'
  }
}

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/__mocks__/svg.ts',
      ...nextJestConfig.moduleNameMapper
    }
  }
}

module.exports = jestConfig
