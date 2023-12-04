module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/*.test.ts'],
    // Add other configurations as needed
  };
  