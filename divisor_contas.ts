const tela = require('readline-sync')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Conta: ", (conta) => {
  rl.question("Pessoas: ", (pessoas) => {
    let total = Number(conta) * 1.10;
    let valor = total / Number(pessoas);

    console.log("Cada pessoa paga: R$ " + valor.toFixed(2));
    rl.close();
  });
});
