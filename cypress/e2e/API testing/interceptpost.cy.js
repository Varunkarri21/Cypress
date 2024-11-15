describe('HTTP equest',()=>{
    it.only('test api with interceprt',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{fixture:'creaeuser.json'}).as('posts')
        cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
    })
})