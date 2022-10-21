
// //                                      GOKU


personagem = {
    nome : "Goku",
    nomesAlternativos: "\"Son Goku\" \"Son Gokou\" \"Kakarotto\"",
    altura: 1.75,
    peso: 62,
    sexo: "masculino",
    raca: "Saijin",
    DGZ:true,
    habilidade: [" Kamehameha ", "Genki Dama"],
    
    
    
    
}


// //                                      VEGETA


personagem1 = {
    nome : "Vegeta",
    nomesAlternativos: "\"Prícipe dos Saiyajins\" \"Prícipe Vegeta\" \"Vegita\"",
    altura: 1.64,
    peso: 56,
    sexo: "masculino",
    raca: "Saijin",
    DGZ:true,
    habilidade: ["final flash ", "Big bang attack"],
   

    
}

// //                                      MESTRE KAME

personagem2 = {
    nome : "Mestre Kame",
    nomesAlternativos: "\"Kame\"",
    altura: 1.65,
    peso: 44,
    sexo: "masculino",
    raca: "terráqueo",
    DGZ: true, 
    habilidade: ["Humor"],
   
   
    
     
}
                    
// media da altura dos personagens
const mediaAltura= ((personagem.altura+personagem1.altura+personagem2.altura)/3)
console.log(`a media de altura dos personagens são: ${mediaAltura.toFixed(2)} Metros`);

// verificação se todos participaram de DGZ
console.log(`todo os personagens participaram de Dragon ball z? ${personagem.DGZ&& personagem1.DGZ&& personagem2.DGZ}`);

// alterando o nome dos personagens para maiusculo 
personagem.nome = personagem.nome.toUpperCase()
personagem1.nome= personagem1.nome.toUpperCase()
personagem2.nome= personagem2.nome.toUpperCase()



// array vazio  para aramazenar os personagens 
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

console.log(personagenArray)  

    

 //Mostrar tudo no console e tranformar os arrays em string (refatoração )
console.log("ARRAY EM STRING");

for(let personagem of personagenArray){
    personagem.habilidade = personagem.habilidade.join(", ")

}
console.log(personagem);
console.log(personagem1);
console.log(personagem2);


// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada stringdo relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente. 
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
devolveString (personagenArray)

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


//Exercicio 4 - Função para buscar o personagem de acordo com o nome que o usuário digitar


function buscaPersonagem(){
    
    let listaFiltrada = document.getElementById("containerGeral")
    let lutador = document.getElementById("busca").value.toUpperCase()
    for (let i = 0; i < personagenArray.length; i++) {
        if(lutador === personagenArray[i].nome){
            return (listaFiltrada.innerHTML = `

            <section id="buscador">
                
            <input type="text" name="busca" id="busca" placeholder="pesquisar">
        
            <button  id="button" onclick="buscaPersonagem()">Buscar</button>
            
            

        </section>

            <section class="personagem">
            
            <ul>
                <li><b>Nome:</b>${personagenArray[i].nome}</li>
                <li><b>Nomes alternativos:</b> ${personagenArray[i].nomesAlternativos}</li>
                <li><b>altura:</b>${personagenArray[i].altura}</li>
                <li><b>peso:</b>${personagenArray[i].peso}</li>
                <li><b>sexo:</b>${personagenArray[i].sexo}</li>
                <li><b>raca:</b> ${personagenArray[i].raca}</li>
                <li><b>habilidade:</b> ${personagenArray[i].habilidade}</li>

            </ul>
                </section>
                
              
                
                `)
                
            }
            
        }

    alert("Nada foi encontrado!");
    document.getElementById("busca").value = "";
   

}

