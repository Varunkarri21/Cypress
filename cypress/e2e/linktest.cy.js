describe('temlate spec',()=>{
    it('Link testing',()=>{
        cy.visit('https://filiphric.com/testing-links-with-cypress')
        cy.contains('Community').click()
        cy.go('back')
    })
})