describe("HTTP request", () => {
    const accesstoken = "c3a6aaabe7ba5da001b83d1c3303c16fbc2dc241647c760005eee5d5aa7c313c";
 
    it("Create User", () => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          authorization: "Bearer c3a6aaabe7ba5da001b83d1c3303c16fbc2dc241647c760005eee5d5aa7c313c",
        },
        body: {
          "name": "udsi",
          "email": "wsxcft@gmail.com",
          "gender": "male",
          "status": "active"
        }
      }).then((res)=>{
        expect(res.status).to.eq(201);
        expect(res.body).has.property("email", "wsxcft@gmail.com");
        expect(res.body).has.property("gender", "male");
      })
      .then((res) => {
        const userID = res.body.id;
        cy.log('user id is'+userID);
        cy.request({
            method:"DELETE",
            url:'https://gorest.co.in/public/v2/users/'+userID,
            headers:{
                'authorization':"Bearer c3a6aaabe7ba5da001b83d1c3303c16fbc2dc241647c760005eee5d5aa7c313c"
            },
        }).then((res)=>{
            expect(res.status).to.eq(204)
        })
      });
    });
  });