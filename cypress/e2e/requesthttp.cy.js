require("cypress-file-upload")

describe("HTTPrequest", () => {
    it("Get call", () => {
      cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal',200)
    });
    it('POST CALL',()=>{
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:{
                title:"post call",
                body:"call",
                userID:1
            }
        })
        .its('status')
        .should('equal',201)
    })
  });