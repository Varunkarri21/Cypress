describe("backup", () => {
    it("checking assertions", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //   cy.url().should('include','orangehrmlive.com')
    //   cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //   cy.url().should('contain','orangehrm')
    //   cy.url().should('include','orangehrmlive.com')
    //           .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //           .should('contain','orangehrm')
        // cy.url().should('include','orangehrmlive.com')
        //       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //       .and('contain','orangehrm')
        //       .and('not.contain','orangehrm1')
        //       .and('not.include','orangehrmlive1.com')
        //       .and('not.eq','https://opensource-demo1.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('include','Orange')
          .and('eq','OrangeHRM')
          .and('contain','HRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
    })
})