import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('go to hompage URL', () => {
  cy.visit('http://localhost:4200');
});

Then('page title is {string}', (expectedPageTitle) => {
  cy.get('h1')
    .invoke('text')
    .should('contains', expectedPageTitle);
});
