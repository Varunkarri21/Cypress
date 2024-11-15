describe("template spec", () => {
    beforeEach(() => {
        cy.visit("https://filiphric.com/testing-links-with-cypress");
    });
 
    it('Link Testing - Courses', () => {
        cy.contains('Courses').should('be.visible').click();
        cy.wait(1000);
        cy.url({ timeout: 10000 }).should('eq', 'https://filiphric.com/courses');
        cy.go('back');
        cy.wait(500);
    });
 
    it('Link Testing - Blog', () => {
        cy.contains('Blog').should('be.visible').click();
        cy.wait(1000);
        cy.url({ timeout: 10000 }).should('eq', 'https://filiphric.com/blog');
        cy.go('back');
        cy.wait(500);
    });
 
    it('Link Testing - Workshops', () => {
        cy.contains('Workshops').should('be.visible').click();
        cy.wait(1000);
        cy.url({ timeout: 10000 }).should('eq', 'https://filiphric.com/workshops');
        cy.go('back');
        cy.wait(500);
    });
 
    it('Link Testing - Community', () => {
        cy.contains('Community').should('be.visible').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://discord.com/invite/3MdvPfT');
        cy.go('back');
        cy.wait(500);
    });
 
    it('Link Testing - About', () => {
        cy.contains('About').should('be.visible').click();
        cy.wait(1000);
        cy.url({ timeout: 10000 }).should('eq', 'https://filiphric.com/about');
        cy.go('back');
        cy.wait(500);
    });
});