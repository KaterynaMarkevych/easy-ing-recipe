export default {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Для обробки JavaScript через Babel
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Мок для стилів
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Мок для зображень
    },
    testEnvironment: "jsdom", // Для підтримки браузерного середовища
  };
  