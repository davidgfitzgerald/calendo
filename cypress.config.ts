import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  defaultCommandTimeout: 500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
