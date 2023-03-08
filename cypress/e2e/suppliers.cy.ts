import info from "../fixtures/userInfo.json";


describe('Suppliers view', () => {
 before('Login', () => {
  cy.visit("/login");
  cy.get('#user').should("exist");
  cy.get('#user').type(info.user);
  cy.get('#password').type(info.password);
  cy.get('.btn').should("be.enabled").click();
  });

  it("See the list of available suppliers", () => {
    cy.get('.suppliers-view').should("be.visible");
    cy.get('.suppliers-list').find('li').filter(':visible').should('have.length.gt', 0);
  });

  it("Details of a specific supplier ", () => {
    cy.get('.suppliers > :nth-child(1) > a').click();
    cy.get('.single-supplier').find('h2').should('contain','Supplier of').siblings('p').should('exist');
  });
  //todo testcase page navigation
  //todo maybe some asserts with the url containing specific id's
})