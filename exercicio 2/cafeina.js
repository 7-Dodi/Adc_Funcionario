const dados = { //Criando o protótito do objeto
    nome: "",
    salario: "",
}

function adicionarVet (vetor, dados){ //Criando a função para adicionar o objeto dentro de um vetor
     vetor.push(dados);
    console.log(vetor);
    return vetor;
}

function maiorSalario (vetor){ //Para encontar o maior salario do vetor
    if(vetor.length===1){ //Caso seja o primeiro elemento do vetor
        return vetor[0].salario;
    }
    else{ //caso não seja o primeiro elemento
        let maior= vetor[0].salario;
        for (const k in vetor) {
            if ((vetor[k].salario*1) > maior) {
                maior= vetor[k].salario;
            }
        }
        return maior;
    }
}
const resultado= document.querySelector(".resultado"); //Criando as estruturas que serao usadas
const button= document.querySelector("button");
const vetor=[]; //Criando o vetor


button.addEventListener("click", ()=>{
    const nome= document.querySelector("#nome").value; //Lendo os valores dos input's
    const salario= document.querySelector("#salario").value;
    
    const criar= Object.create(dados); //Criando o objeto segundo o prototipo
    criar.nome= nome; //Ordenado as variaveis do objeto
    criar.salario= salario;

    adicionarVet(vetor, criar); //Adicionando o objeto ao vetor
    
    console.log(vetor);
    
    const somatorio= vetor.reduce((total, elemento) => { //Função reduce, para soma os salarios
       return total += (elemento.salario*1); 
    }, 0);

    //Criando os itens de resposta
    const item= document.createElement("ul");
    const result= document.createElement("p");
    const texto= document.createElement("li");
    const valor= document.createElement("li");
    const dinheiro= document.createElement("li");
    const soma= document.createElement("li");

    //Informando a saída do programa
    result.textContent= `Adicionando funcionário...`;
    texto.textContent= `Nome do funcionário: ${criar.nome};`;
    valor.textContent= `Salário do funcionário: ${criar.salario} Reais;`;
    dinheiro.textContent= `Maior salário: ${maiorSalario(vetor)} Reais;`;
    soma.textContent= `Soma dos salários: ${somatorio} Reais.`;

    //Organiazando os elementos criados
    item.appendChild(result); 
    item.appendChild(texto); 
    item.appendChild(valor); 
    item.appendChild(dinheiro);
    item.appendChild(soma);
    resultado.appendChild(item);
});
