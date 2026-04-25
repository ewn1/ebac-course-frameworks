/// <reference types="cypress" />

describe("Teste para a funcionalidade de alteração de contatos", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve alterar os dados de um contato corretamente", () => {
    cy.get('input[type="text"]').type("Gabriel 'Fallen' Toledo");
    cy.get('input[type="email"]').type("fallenstore@gmail.com");
    cy.get('input[type="tel"]').type("1199999999");
    cy.get(".adicionar").click();
    cy.contains("Gabriel 'Fallen' Toledo").should("be.visible");

    cy.get(".edit").last().click();
    cy.get('input[type="text"]').clear().type("The Professor");
    cy.get('input[type="email"]').clear().type("theprofessor@gmail.com");
    cy.get('input[type="tel"]').clear().type("48 123456789");
    cy.get(".alterar").click();

    cy.contains("The Professor").should("be.visible");
    cy.contains("theprofessor@gmail.com").should("be.visible");
    cy.contains("48 123456789").should("be.visible");
  });
});
