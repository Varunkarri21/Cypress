describe('Checkbox', () => {
    it('demoqa', () => {
        cy.visit('https://demoqa.com/checkbox')
        // cy.get('body > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > ol:nth-child(2) > li:nth-child(1) > span:nth-child(1) > button:nth-child(1)').click()
        cy.get('rct-collapse rct-collapse-btn').click()
        // cy.get('.rct-icon rct-icon-uncheck').click()
    })
})