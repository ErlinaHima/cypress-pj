import info from "../fixtures/userInfo.json";



describe('SignIn and SignOut', () => {

  beforeEach("Login", () => {
    cy.visit("/login");
    cy.get('#user').should("exist");
    cy.get('#user').type(info.user);
    cy.get('#password').type(info.password);
    cy.get('.btn').should("be.enabled").click();
   });
     
   it("Login successful",() => {
    cy.get('.home-view').should("be.visible");
   });


   it("Logout successful",() => {
    cy.get('#navbarNav').contains("Logout").click();
    cy.get('.login-view').should("exist");
   });
   //todo wrong log in 

});