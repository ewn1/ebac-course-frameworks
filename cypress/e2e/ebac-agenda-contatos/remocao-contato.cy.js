/// <reference types="cypress" />

describe("Remoção de contato da lista", () => {
  it("Deve remover um contato da lista", () => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");

    cy.get('input[type="text"]').type("Contato para Deletar");
    cy.get('input[type="email"]').type("deletar@teste.com");
    cy.get('input[type="tel"]').type("1199999999");
    cy.get(".adicionar").click();
    cy.contains("Contato para Deletar").should("be.visible");

    cy.get(".delete").last().click();
    cy.contains("Contato para Deletar").should("not.exist");
  });
});
