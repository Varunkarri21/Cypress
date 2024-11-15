require("cypress-xpath")

describe("Mouseover", () => {
    it("Testing mouseover", () => {
      cy.visit("https://demo.opencart.com/")
      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')
      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').click()
    });
  });