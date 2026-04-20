const tela = require('readline-sync')

const nomeAluno:string = tela.question('informe o nome do aluno(a): ')
const nota1:number = Number(tela.question('informe a primeira nota: ')) 
const nota2:number = Number(tela.question('informe a segunda nota: '))
const nota3:number = Number(tela.question('informe a terceira nota: '))

const media = (nota1 + nota2 + nota3) / 3

// aluno aprovado so com media maior ou igual á 7.0
let situacao:string 

if (media >= 7) {
        situacao = "Aprovado"
} else {
	situacao = "Reprovado"
}

console.log(`aluno(a), ${nomeAluno} obteve á média de ${media} e está ${situacao}`)

