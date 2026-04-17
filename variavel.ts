const tela = require('readline-sync')

// Declarando as Váriaveis
let nome:string 
let idade:number

// setando os valores
nome = tela.question('Qual é o seu nome? ')
idade = Number(tela.question('Qual é a sua idade? '))

// saida das informações
console.log("Nome: "+nome+" idade: "+idade)
