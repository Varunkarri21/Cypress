describe("HTTP request", () => {
    const accesstoken = "c3a6aaabe7ba5da001b83d1c3303c16fbc2dc241647c760005eee5d5aa7c313c";
 
    it("Create User", () => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          authorization: "Bearer"+accesstoken,
        },
        body: {
          "name": "asdf",
          "email": "asdf@gmail.com",
          "gender": "male",
          "status": "active"
        }
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body).has.property("email", "asdf@gmail.com");
        expect(res.body).has.property("status", "active");
      });
    });
  });
 