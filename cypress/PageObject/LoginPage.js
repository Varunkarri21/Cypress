class Login{
    setUserName(username){
        cy.get("#user-name").type(username)
    }
    setPassWord(password){
        cy.get("#password").type(password)
    }
    clickSubmit(){
        cy.get("#login-button").click()
    }
    verifyLogin(){
        cy.get(".title").should('have.text','Products')
    }
}
class Product{
    selectProduct(){
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    }
    cart(){
        cy.get('.shopping_cart_link').click()
    }
}
class Checkout{
    checkout(){
        cy.get('#checkout').click()
    }
}
class UserInfo{
    userInfo(firstname,lastname,postalcode){
        cy.get('#first-name').type(firstname)
        cy.get('#last-name').type(lastname)
        cy.get('#postal-code').type(postalcode)
        cy.get('#continue').click()
    }
}
class Finish{
    finish(){
        cy.get('#finish').click()
    }
    verifyFinish(){
        cy.get('.title').should('have.text','Checkout: Complete!')
    }
}
export default {Login,Product,Checkout,UserInfo,Finish}