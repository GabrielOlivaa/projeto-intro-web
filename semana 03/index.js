
// //                                      GOKU


personagem = {
    nome : "Goku".toUpperCase(),
    nomesAlternativos: "\"Son Goku\" \"Son Gokou\" \"Kakarotto\"",
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
    altura: 1.65,
    peso: 44,
    sexo: "masculino",
    raca: "terráqueo",
    DGZ: true, 
    habilidade: ["Humor"]
     
}
                    

// array para aramazenar os personagens 
personagenArray=[]  

// condicional para incluir somente os personagens que participaram de Dragon Ball Z
// //                                      GOKU -> CONDICIONAL

if(personagem.DGZ === true ){
    personagenArray.push(personagem)
        
}else{
       alert ("Um personagen não participou de Dragon Ball Z",personagem.nome ) 
}


 //                                        VEGETA -> CONDICIONAL
if(personagem1.DGZ === true ){
        personagenArray.push(personagem1)
        
}else{
       alert ("Um personagen não participou de Dragon Ball Z",personagem1.nome ) 
}

// //                                      MESTRE KAME -> CONDICIONAL

if(personagem2.DGZ === true ){
    personagenArray.push(personagem2) 
 
}else{
       alert (" Um personagen não participou de Dragon Ball Z",personagem2.nome ) 
}

//                  console log () a ser rescrito 

// console.log(personagenArray)  

    

 //Mostrar tudo no console e tranformar os arrays em string
console.log("ARRAY EM STRING");

let stringPersonagem = [personagem,personagem1,personagem2]

for(let i of stringPersonagem){
    i.habilidade = i.habilidade.join(", ")

}
console.log(personagem);
console.log(personagem1);
console.log(personagem2);


// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente. 
console.log("IMPRESSÃO COM LOOP");
function impressao (objeto){
    for (i in objeto) {
        console.log(objeto[i])
    }
}
impressao (personagem)
console.log('--------------------')
    
impressao (personagem1)
console.log('--------------------')
    
impressao (personagem2)
console.log('--------------------')
    
console.log('--------------------')
    



//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

console.log("FUNÇÃO QUE RECEBE UM OBJ COM PARAMETRO E RETORNA STRING COM OS DADOS DO MESMO");

function devolveString (objeto) {
    for ( i of objeto) {
        for (j in i) {
            console.log(`${j}:${i[j]}`)
        } console.log('--------------------')
    }
}
devolveString (stringPersonagem)

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.





const recebeArray = (array, string) => {
    for (objeto of array) {
    if(objeto.nome === string) {
        console.log(objeto, string)
    } else {alert("Não encontrado")}
    }
}

recebeArray (personagenArray, prompt("Digite um personagem"))




// // 
// // 

