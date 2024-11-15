require("cypress-xpath")

describe("Mouseover", () => {
    it("Testing mouseover", () => {
      cy.visit("http://www.countries-ofthe-world.com/flags-of-the-world.html")
      cy.get("img[alt='Flag of India']").scrollIntoView()
    });
  });