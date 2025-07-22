/* eslint-disable cypress/no-force */
// @ts-nocheck
/// <reference types='cypress' />

Cypress.Commands.add('clickRandomRadio', (selector) => {
  cy.get(selector).then((radios) => {
    const randomIndex = Math.floor(Math.random() * radios.length);
    const randomValue = radios.get(randomIndex).value;

    cy.get(selector).eq(randomIndex).check({ force: true });

    cy.get(selector)
      .eq(randomIndex)
      .then(() => randomValue);
  });
});

Cypress.Commands.add('clickRandomMenu', (selector) => {
  return cy.get(selector).then((checkBoxs) => {
    const randomIndex = Math.floor(Math.random() * checkBoxs.length);
    const randomValue = checkBoxs.get(randomIndex).textContent;

    cy.get(selector).eq(randomIndex).click({ force: true });
    cy.then(() => randomValue);
  });
});

Cypress.Commands.add('clickRandomCheckBoxes', (selector) => {
  return cy
    .get(selector)
    .its('length')
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);
      return cy.get(selector).eq(randomIndex).check({ force: true });
    })
    .parent()
    .invoke('text');
});

Cypress.Commands.add('assertModalData', (dataRowName, expecteddata) => {
  cy.get('td')
    .contains(dataRowName)
    .parent()
    .find('td')
    .eq(1)
    .should('have.text', expecteddata);
});
