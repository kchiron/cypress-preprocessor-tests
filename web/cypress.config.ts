import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
// const webpackPreprocessor = require('@cypress/webpack-preprocessor')
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        setupNodeEvents,
        baseUrl: 'https://duckduckgo.com/',
        chromeWebSecurity: false,
        scrollBehavior: 'center',
        viewportWidth: 375,
        viewportHeight: 667,
        videosFolder: 'cypress/reports',
        screenshotsFolder: 'cypress/reports',
        defaultCommandTimeout: 10000,
        requestTimeout: 10000,
        slowTestThreshold: 20000,
        specPattern: '../features/',
        supportFile: false,
        trashAssetsBeforeRuns: false,
    },
})

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );

    // on('file:preprocessor', webpackPreprocessor(
    //     {webpackOptions:{
    //         resolve: {
    //           extensions: [".ts", ".js"],
    //         },
    //         module: {
    //           rules: [
    //             {
    //               test: /\.ts$/,
    //               exclude: [/node_modules/],
    //               use: [
    //                 {
    //                   loader: "ts-loader",
    //                 },
    //               ],
    //             },
    //             {
    //               test: /\.feature$/,
    //               use: [
    //                 {
    //                   loader: "@badeball/cypress-cucumber-preprocessor/webpack",
    //                   // options: config,
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       }
    //     }
    // ))

    // Make sure to return the config object as it might have been modified by the plugin.
    return config
}
