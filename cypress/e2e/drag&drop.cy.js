require("@4tw/cypress-drag-drop")

describe("Mouseover", () => {
    it("Testing mouseover", () => {
      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
      cy.get("#box3").drag('#box103',{force:true})
    });
  });