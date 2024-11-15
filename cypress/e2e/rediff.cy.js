require("cypress-xpath")
describe('template spec',()=>{
    it('Data Driven Testing',()=>{
        cy.visit('https://register.rediff.com/register/register.php')
 
        cy.fixture('rediff').then( (data)=>{
            cy.get('[width="200"] > input').type(data.fullname)
            cy.get('[valign="bottom"] > [type="text"]').type(data.mailid)
            cy.xpath("//input[@id='newpasswd']").type(data.password)
            cy.xpath("//input[@id='newpasswd1']").type(data.retypepassword)
            cy.get(':nth-child(1) > [width="185"] > input').type(data.altemail)
            // cy.xpath("input[name='altemail3f86a569']").type(data.altemail)
            cy.get('#mobno').type(data.mobileno)
            // cy.xpath("input[value='m']").type(data.gender)
        })
    })
})