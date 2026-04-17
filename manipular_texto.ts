  const texto = "O Rato roeu a roupa do rei de roma"

   
  //Imprimir tamanho do texto 
  console.log("tamanho texto: "+texto.length)
  console.log("texto em caixa alta: "+texto.toUpperCase())
  console.log("texto em caixa baixa: "+texto.toLowerCase()) 
  console.log("Tem a palavra rato? "+texto.includes("rato"))
  console.log("Tem a palavra princesa? "+texto.includes("princesa"))
  console.log(texto.replace("rato","josé"))
  console.log(texto.replaceAll("a","@")) 

  const email:string = " email@miguel.com.br "
  console.log('Email: '+email.trim())
