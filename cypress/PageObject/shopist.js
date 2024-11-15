class Profile{
    seeProfile(){
        cy.get('.hamburger').click()
        cy.get('[href="/profile"] > .menu-item-small').click()
        cy.get("div[class='profile'] div:nth-child(1) div:nth-child(2)").should('have.text','Doe John') //Assertion
    }
}
class Chairs{
    chairsSection(){
        cy.get('.hamburger').click()
        cy.get('[href="/department/chairs"] > .menu-item-small').click()
        cy.get("img[src='/pictures/furniture/1.jpg']").should('be.visible') //Assertion
    }
    selectChair(){
        cy.get("img[src='/pictures/furniture/1.jpg']").click()
        cy.get(".purchase-button").should('be.visible') //Assertion
    }
    chairsSection2(){
        cy.get('.hamburger').click()
        cy.get('[href="/department/chairs"] > .menu-item-small').click()
    }
    selectChair2(){
        cy.get("img[src='/pictures/furniture/2.jpg']").click()
        cy.get(".purchase-button").should('be.visible') //Assertion
    }
}
class AddToCart{
    addToCart(){
        cy.get(".purchase-button").click()
    }
}
class CheckCart{
    checkCart(){
        cy.get('.hamburger').click()
        cy.get('[href="/cart"] > .menu-item-small').click()
        cy.get('.checkout').should('be.visible') //Assertion
    }
}
class Checkout{
    checkout(){
        cy.get('.checkout').click()
        cy.wait(4000)
        cy.get('.continue-shopping').should('be.visible') //Assertion
    }
}
class Finish{
    finish(){
        cy.get('.continue-shopping').click()
    }
}
export default {Profile,Chairs,AddToCart,CheckCart,Checkout,Finish}