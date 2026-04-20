const tela = require('readline-sync')


const salario:number = Number(tela.question('Informe um salario: '))
const percentual:number = 0.15 // 15/100  
const resultado:number = salario + salario * percentual

console.log(`O salario com ajuste de 15% será: ${resultado.toFixed(2)}`)

