import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am in the living room"$/iu, () => {
    cy.log("How comfy it is")
})

Given(/^I want to listen to a song"$/iu, () => {
    cy.log("I want to listen to a song")
})

Given(/^I want to read a book"$/iu, () => {
    cy.log("I want to read a book")
})
