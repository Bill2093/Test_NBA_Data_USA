const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.nba.com',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    pageLoadTimeout: 120000, // Aumentar el tiempo de espera a 2 minutos (120,000 ms)
    defaultCommandTimeout: 15000, // Ajustar el tiempo de espera para comandos individuales si es necesario
  },
});
