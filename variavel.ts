const tela = require('prompt-sync')()

// Declarando as Váriaveis
let nome:string 
let idade:number

// setando os valores
nome = tela('Qual é o seu nome? ')
idade = Number(tela('Qual é a sua idade? '))

// saida das informações
console.log("Nome: "+nome+" idade: "+idade)
