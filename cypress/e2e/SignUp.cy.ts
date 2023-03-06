import info from "../fixtures/userInfo.json";
import {randomizer} from "../helpers/randomizer";
info.email = randomizer.randomizeEmail(info.email);

describe('SignUp Page', () => {

  it('Visit SignUp page', () => {
    cy.visit("/");
    cy.get('#user').should("exist");
    cy.get("a[href='/signup']").click();
    cy.get('#first-name').should("exist");
  })

  it('SignUp a new user', () => {

    cy.get('#first-name').should("exist");
    cy.get('#first-name').type(info.firstName);
    cy.get('#last-name').type(info.lastName);
    cy.get('#email').type(info.email);
    cy.get('#password').type(info.password);
    cy.get('.btn').should("be.enabled").click()
    cy.get('.text-success').should("exist")
  })
})