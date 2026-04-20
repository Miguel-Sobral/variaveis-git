const tela = require('readline-sync')

console.log(" Cálculo de Retângulo ")

// Entrada de dados
const largura: number = Number(tela.question('Informe a largura: '))
const altura: number = Number(tela.question('Informe a altura: '))

// Processamento
const area = largura * altura
const perimetro = 2 * (largura + altura)

// Saída formatada
console.log("\n Resultados ")
console.log(`Largura:   ${largura}`)
console.log(`Altura:    ${altura}`)
console.log(`Área:      ${area.toFixed(2)}`)
console.log(`Perímetro: ${perimetro.toFixed(2)}`)
