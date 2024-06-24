const { defineConfig } = require('cypress')
 
module.exports = defineConfig({
  video: false, 
  viewportHeight: 800,
  viewportWidth: 1212,
  defaultCommandTimeout: 10000,
  e2e: {
    //specPattern: ["**/*.feature", "cypress/integration/**/*.cy{js,jsx,ts,tsx}"], 
    setupNodeEvents(on, config){
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.narwalsistemas.com.br"
  },
})