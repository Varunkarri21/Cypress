import Login from "./../PageObject/LoginPage"
describe('template spec',()=>{
    it('POM TC LOGIN',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
        const ln = new Login()
        ln.setUserName("Admin")
        ln.setPassWord("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })
})