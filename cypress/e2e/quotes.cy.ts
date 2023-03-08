import info from "../fixtures/userInfo.json";


describe('Suppliers view', () => {
 before('Login', () => {
  cy.visit("/login");
  cy.get('#user').should("exist");
  cy.get('#user').type(info.user);
  cy.get('#password').type(info.password);
  cy.get('.btn').should("be.enabled").click();
  });

  it("Navigate to quotes view and check the first quote", () => {
    cy.get("a[href='/quotes']").click();
    cy.get('.quotes-view').should('be.visible');
    cy.get(':nth-child(1) > .card-body > .card-title').should('not.be.empty');
    cy.get(':nth-child(1) > .card-body').should('contain','Amount').and('contain',' Created');
  });
})