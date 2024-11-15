import {Login,Product,Checkout,UserInfo,Finish} from "./../PageObject/LoginPage"
describe('template spec',()=>{
    it('Complete login',()=>{
        cy.visit('https://www.saucedemo.com')
 
        const ln = new Login()
        ln.setUserName("standard_user")
        ln.setPassWord("secret_sauce")
        ln.clickSubmit()
        ln.verifyLogin()
        const pr = new Product()
        pr.selectProduct()
        pr.cart()
        const ch = new Checkout()
        ch.checkout()
        const ui = new UserInfo()
        ui.userInfo('Girish','Sabbavarapu','530025')
        const fi = new Finish()
        fi.finish()
        fi.verifyFinish()
    })
})