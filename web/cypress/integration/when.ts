import {When} from "@badeball/cypress-cucumber-preprocessor";

When(/^I look at my wall"$/iu, () => {
    cy.log("How pretty it is")
})

When(/^I look at my (\w+) shelf"$/iu, (shelfColor: string) => {
    cy.log("The shelf is " + shelfColor)
})
