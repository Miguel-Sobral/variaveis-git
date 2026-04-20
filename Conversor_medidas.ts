const tela = require('readline-sync')

const m:number = Number(tela.question('Informe um valor em metro(s): '))
const cm:number = m * 100
const mm:number = m * 1000

console.log(`Metro(s): ${m}\nCentimetro(s): ${cm}\nMilimetro(s): ${mm}`)
