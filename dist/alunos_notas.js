"use strict";

var alunos = [{
  nome: "Gandalf",
  nota: 10
}, {
  nome: "Darth Vader",
  nota: 9
}, {
  nome: "Sauron",
  nota: 5
}, {
  nome: "Pamela Anderson",
  nota: 10
}, {
  nome: "Michelle Pfeiffer",
  nota: 10
}, {
  nome: "Jim Morrison",
  nota: 5
}, {
  nome: "Ozzy Osbourne",
  nota: 5
}, {
  nome: "Gollum",
  nota: 2
}, {
  nome: "Bruna Lombardi",
  nota: 10
}, {
  nome: "Heath Ledger",
  nota: 4
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);