const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  video: true,
  e2e: {
    watchForFileChanges:false,
     trashAssetsBeforeRuns:true,
    // defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);  //html reports
      // implement node event listeners here
    }, 
  },
});
