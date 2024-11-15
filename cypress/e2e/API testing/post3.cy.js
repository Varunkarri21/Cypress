let dataJson=require ("../../fixtures/createuser.json")
describe("HTTP request", () => {
    let randomText=""
    let testEmail=""
    it('POST call', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<10;i++){
            randomText+=pattern.charAt(Math.floor(Math.random()*pattern.length))
        }
        testEmail=randomText+'@gmail.com'
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          authorization: "Bearer c3a6aaabe7ba5da001b83d1c3303c16fbc2dc241647c760005eee5d5aa7c313c",
        },
        body: {
          "name": dataJson.name,
          "email": dataJson.email,
          "gender": dataJson.gender,
          "status": dataJson.status
        }
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body).has.property("email", dataJson.email);
        expect(res.body).has.property("status", "active");
      });
    });
  });