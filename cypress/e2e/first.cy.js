describe("backup", () => {
    it("tests backup", () => {
      cy.viewport(1018, 585);
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get("form > div:nth-of-type(1) input").click();
      cy.get("form > div:nth-of-type(1) input").type("Admin");
      cy.get("form > div:nth-of-type(2) input").click();
      cy.get("form > div:nth-of-type(2) input").type("admin123");
      cy.get("button").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
      cy.get("li:nth-of-type(2) > a").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
      cy.get("div.oxd-topbar-header-userarea i").click();
      cy.get("div.oxd-topbar-header li:nth-of-type(4) > a").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });
  });
  describe("backup", () => {
    it("tests backup", () => {
      cy.viewport(1018, 585);
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get("form > div:nth-of-type(1) input").click();
      cy.get("form > div:nth-of-type(1) input").type("Admin");
      cy.get("form > div:nth-of-type(2) input").click();
      cy.get("form > div:nth-of-type(2) input").type("admin123");
      cy.get("button").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
      cy.get("li:nth-of-type(2) > a").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
      cy.get("div.oxd-topbar-header-userarea i").click();
      cy.get("div.oxd-topbar-header li:nth-of-type(4) > a").click();
      cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });
  });
   