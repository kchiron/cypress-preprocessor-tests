import {Then} from "@badeball/cypress-cucumber-preprocessor";
import {TableDefinition} from "cypress-cucumber-preprocessor";

Then(/^I see all my shelves"$/iu, (datatable: TableDefinition) => {
    const shelves = datatable.hashes()[0]
    cy.log(`I see ${shelves}`)
})

Then(/^I see (blue|red) (\w+)$/iu, (shelfColor: string, item: string) => {
    cy.log(`Interesting ${item} on my ${shelfColor} shelf`)
})
