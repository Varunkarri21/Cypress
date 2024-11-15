describe("Assertions", () => {
    it("Testing Assertions", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get('.orangehrm-login-form').within(()=>{
        cy.get("input[placeholder='Username']").should('have.attr','placeholder','Username');
      cy.get("input[placeholder='Password']").should('have.attr','placeholder','Password');  
      })  
    });
  });