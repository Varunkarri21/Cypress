require("cypress-xpath")

describe("Xpath", () => {
    it("Testing Xpath", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.xpath("//input[@placeholder='Username']").click()
      cy.xpath("//input[@placeholder='Username']").type('Admin')
      cy.xpath("//input[@placeholder='Password']").click()
      cy.xpath("//input[@placeholder='Password']").type('admin123')
    //   cy.xpath("//button[normalize-space()='Login']").click()
      cy.xpath("//button[normalize-space()='Login']").trigger('mouseover')
    });
  });