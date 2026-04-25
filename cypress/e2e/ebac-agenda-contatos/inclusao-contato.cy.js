/// <reference types="cypress" />

describe("Teste para inclusão de contatos", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve incluir um contato na lista corretamente", () => {
    cy.get('input[type="text"]').type("Gandalf The Grey");
    cy.get('input[type="email"]').type("mithrandir.thebest@gmail.com");
    cy.get('input[type="tel"]').type("48 999999999");
    cy.get(".adicionar").click();
  });

  it("Deve verificar se o contato foi adicionado corretamente", () => {
    cy.get(".contato").last().should("contain", "Gandalf The Grey");
    cy.get(".contato").last().should("contain", "mithrandir.thebest@gmail.com");
    cy.get(".contato").last().should("contain", "48 999999999");
  });
});
