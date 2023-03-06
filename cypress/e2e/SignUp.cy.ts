

import info from "../fixtures/userInfo.json"

describe('SignUp Page', function() {

 /* before( function() {
    cy.fixture('userInfo').then( function (data) {
      info=data;
    })
  });*/


  it('Visit SignUp page', function() {
    cy.visit("/");
    cy.get('#user').should("exist");
    cy.get("a[href='/signup']").click();
    cy.get('#first-name').should("exist");
  })

  it('SignUp a new user', function() {

    cy.get('#first-name').should("exist");
    cy.get('#first-name').type(info.firstName);
    cy.get('#last-name').type(info.lastName);
    cy.get('#email').type(info.email);
    cy.get('#password').type(info.password);
    
  })
})