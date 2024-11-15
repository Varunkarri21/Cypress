require("cypress-xpath")
describe('template spec',()=>{
    it('X-Path Test',()=>{
        cy.visit('https://www.google.com/')
        cy.xpath("//a[normalize-space()='Images']").click()
    })
})