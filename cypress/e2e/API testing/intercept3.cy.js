describe('HTTP equest',()=>{
    it.only('test api with interceprt',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{totalpost:5}).as('posts')
        cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
        cy.wait('@posts')
    })
})