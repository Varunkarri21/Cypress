describe("Assertions", () => {
    it("Testing Assertions", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("input[placeholder='Username']").type('Admin1');
      cy.get("input[placeholder='Username']").should('have.value','Admin1');
      cy.get("input[placeholder='Username']").clear()
      cy.get("input[placeholder='Username']").type('Admin')
      cy.get("input[placeholder='Username']").should('have.value','Admin');
 
   
   
     
    });
  });
 