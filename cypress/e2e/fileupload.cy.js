require("cypress-file-upload")

describe("upload", () => {
    it("Testing fileupload", () => {
      cy.visit("https://the-internet.herokuapp.com/upload")
      cy.get("#file-upload").attachFile('Capture001.png')
      cy.get("#file-submit").click()
    });
  });