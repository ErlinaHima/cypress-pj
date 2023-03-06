// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  /*it("visits the app root url", () => {
    cy.visit("/");
    cy.get('#user').should("exist");

  });*/
  it('SignUp as a new user', () => {
    cy.visit("/");
    cy.get('#user').should("exist");
    cy.get("a[href='/signup']").click();
  })
});
