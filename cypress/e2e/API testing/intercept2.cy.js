describe('HTTP equest',()=>{
    it.only('test api with interceprt',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path:'/posts'
        }).as('tests')
        cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
        cy.wait('@posts').then(inter=>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
        })
    })
})