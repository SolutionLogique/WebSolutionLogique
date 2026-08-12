const nextJest = require("next/jest");

/* next/jest transforme les tests avec SWC, comme le build.
   L'ancien montage passait par babel-jest + un babel.config.js, ce qui
   desactivait SWC pour TOUT le projet — d'ou l'impossibilite d'utiliser
   next/font, et les options `compiler` de next.config silencieusement ignorees. */
const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test_jest",
        outputName: "junit.xml",
      },
    ],
  ],
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)",
    "**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
};

module.exports = createJestConfig(customJestConfig);
