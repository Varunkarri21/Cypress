describe('Dropdown',()=>{
    it('Monaco',()=>{
        cy.visit('https://register.rediff.com/register/register.php')
        //select option monaco with value and then verify with assertion
        cy.get('select[id="country"]').select('140').should('have.value','140')
    })
})