const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.nba.com', 
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', 
  },
});

