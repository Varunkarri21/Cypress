require("cypress-xpath")

describe("Mouseover", () => {
    it("Testing mouseover", () => {
      cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
      cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick()
      cy.get('.context-menu-icon-paste>span').should('be.visible')
    });
  });