const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    /*reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports'
    },*/
    env: {
      baseURL: 'http://localhost:4000'
    }
  },
  
});
