// maioridade.ts
const anoNascimento = Number(process.argv[2]);
const anoAtual = new Date().getFullYear();

if (!anoNascimento) {
  console.log("Por favor, informe o ano de nascimento. Ex: npx ts-node maioridade.ts 2005");
} else {
  const idade = anoAtual - anoNascimento;

  if (idade >= 18) {
    console.log(`Idade: ${idade} anos. Você JÁ atingiu a maioridade penal.`);
  } else {
    console.log(`Idade: ${idade} anos. Você AINDA NÃO atingiu a maioridade penal.`);
  }
}
