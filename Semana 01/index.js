//                                      GOKU

const nomePersonagem = ("Goku")
const nomeToUpperCase= nomePersonagem.toUpperCase()
const arrayNomeAlternativo= (`\"Son Goku\" - \"Son Gokou\"- \"Kakarotto\"` )
const dataNascimento =736
const altura = 1.75
let peso = 62
const sexo = ("Masculino")
const raca =("Saijin")
const Z= (true)


//                                      VEGETA

const nomePersonagem1 = ("Vegeta")
const nomeToUpperCase1 = nomePersonagem1.toUpperCase() 
const arrayNomeAlternativo1= (`Príncipe dos Saiyajins - Príncipe Vegeta - Vegita` )
const dataNascimento1 =646
const altura1 = 1.64
let peso1 = 56
const sexo1 = ("Masculino")
const raca1 =("Saijin")
const Z1= (true)


//                                      MESTRE KAME

const nomePersonagem2 = ("Meste Kame")
const nomeToUpperCase2= nomePersonagem2.toUpperCase()
const arrayNomeAlternativo2= (`\"Kame\"` )
const dataNascimento2 = 430
const altura2 = 1.65
let peso2 = 44
const sexo2 = ("Masculino")
const raca2 =("Terráqueo")
const Z2= (true)

// media de altura e peso e ano de nascimento dos personagens //
const mediaPeso = (peso + peso1 + peso2)/3
console.log(`media de peso dos três personagens: ${mediaPeso} `)

const mediaAlutura =(altura + altura1 + altura2)/3
console.log(`media de altura dos três personagens: ${mediaAlutura}`) 

const mediaNascimento =(dataNascimento + dataNascimento1 + dataNascimento2)/3
console.log("media do ano de nascimento dos três persongens é:", mediaNascimento) 

//                                       //

// console.log abaixo verificando o resultado das operações logicas abaixo (os personagems participaram de Dragonball Z)

const verificacaoDz= (Z && Z1 && Z2)
console.log("Os personagens participaram de Dragon ball Z:",verificacaoDz)


//                                      //
// crie pelo menos um caracteristica para o item que você criou com um array(manter o mesmo tipo de dados no array sempre)
// const arrayNomeAlternativo

//                                     //

//                                      console log GOKU

console.log(` Nome do personagem:${nomeToUpperCase}

Nomes Alternativos: ${arrayNomeAlternativo}

Ano de Nascimento:${dataNascimento}

Altura:${altura}

Peso:${peso}

Sexo:${sexo}

Raça:${raca}

O personagem apareceu em Dragon Ball Z:${Z} `)


//                                      console log VEGETA

console.log(` Nome do personagem:${nomeToUpperCase1}

Nomes Alternativos: ${arrayNomeAlternativo1}

Ano de Nascimento:${dataNascimento1}

Altura:${altura1}

Peso:${peso1}

Sexo:${sexo1}

Raça:${raca1}

O personagem apareceu em Dragon Ball Z:${Z1} `)


//                                    console log MESTRE KAME

console.log(` Nome do personagem:${nomeToUpperCase2}

Nomes Alternativos: ${arrayNomeAlternativo2}

Ano de Nascimento:${dataNascimento2}

Altura:${altura2}

Peso:${peso2}

Sexo:${sexo2}

Raça:${raca2}

O personagem apareceu em Dragon Ball Z:${Z2} `)
