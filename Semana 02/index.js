// //                                      GOKU

personagem = {
    nome : "Goku".toUpperCase(),
    nomesAlternativos: "\"Son Goku\" \"Son Gokou\" \"Kakarotto\"",
    anoNascimento: 736,
    altura: 1.75,
    peso: 62,
    sexo: "masculino",
    raca: "Saijin",
    DGZ:true,
    habilidade: [" Kamehameha ", "Genki Dama"]
}


// //                                      VEGETA


personagem1 = {
    nome : "Vegeta".toUpperCase(),
    nomesAlternativos: "\"Prícipe dos Saiyajins\" \"Prícipe Vegeta\" \"Vegita\"",
    anoNascimento: 646,
    altura: 1.64,
    peso: 56,
    sexo: "masculino",
    raca: "Saijin",
    DGZ:true,
    habilidade: ["final flash ", "Big bang attack"]
}


// //                                      MESTRE KAME

personagem2 = {
    nome : "Mestre Kame".toUpperCase(),
    nomesAlternativos: "\"Kame\"",
    anoNascimento: 430,
    altura: 1.65,
    peso: 44,
    sexo: "masculino",
    raca: "terráqueo",
    DGZ: true,
    habilidade: []
     
}

personagensarray=[] 
if(personagem.DGZ === true && personagem1.DGZ === true && personagem2.DGZ === true ){
    console.log("Os personagens participaram de Dragon Ball Z")
    personagensarray.push(personagem,personagem1,personagem2)
    console.log(personagensarray)
    
}else{
   
    alert ("Um(s) dos personagens não participaram de Dragon Ball Z", )
   

}


