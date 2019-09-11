module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": '<rootDir>/src/$1',
    "^@Compo/(.*)$": '<rootDir>/src/components/$1',
    "^@Config/(.*)$": '<rootDir>/src/config/$1',
    "^@Misc/(.*)$": '<rootDir>/src/misc/$1',
    "^@Model/(.*)$": '<rootDir>/src/models/$1',
    "^@Services/(.*)$": '<rootDir>/src/services/$1',
    "^@Styles/(.*)$": '<rootDir>/src/styles/$1',
  }
};
