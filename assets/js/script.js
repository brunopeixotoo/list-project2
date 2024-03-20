
let inputElement = document.querySelector("#shop input");//Fazendo relação com as tags
let buttonElement = document.querySelector("#shop button");
let listElement = document.querySelector("#shop ul");
let inputBuscador = document.querySelector("#buscador input");
let h4Buscador = document.querySelector("#buscador h4");


let LISTA_DE_COMPRAS = [];

function adicionarCompras() { //Function para adição de compras
    if (inputElement.value === '') {
        alert("Você deve preencher o espaço!");
        return false;
    } else {
        let compras = inputElement.value;//Valor digitado no input do index
        LISTA_DE_COMPRAS.push(compras);//Adicionando na array
        inputElement.value = ''//limpando campo do input
        colocarNoIndex();
    }
    
}

buttonElement.onclick = adicionarCompras;//Ativando a função quando apertar no button


function colocarNoIndex() {//Essa function vai colocar os valores no index.html
    listElement.innerHTML = '';

    LISTA_DE_COMPRAS.map((compra) => {//Método MAP vai percorrer a lista de compras. O usa da Arrow Function é para fazer uma repetição dessa atividade de pegar o item adicionado na lista e criando a <li> para adicionar

        let liElement = document.createElement('li');//Criando elemento <li>
        let textElement = document.createTextNode(compra);//Criando o texto do item da lista
        let buttonExcluir = document.createElement('a');//Criando <a>
        buttonExcluir.setAttribute('href', '#');

        let textButton = document.createTextNode('Excluir');//Criando texto do button e colocando dentro da tag <a>
        buttonExcluir.appendChild(textButton);

        let position = LISTA_DE_COMPRAS.indexOf(compra);//Indentificando a posição do index para excluir
        buttonExcluir.setAttribute('onclick', `excluir(${position})`);//Craindo uma atribuição no <a>

        listElement.appendChild(liElement);//Adicionando na <ul>
        liElement.appendChild(textElement);//Adicionando na <li>
        liElement.appendChild(buttonExcluir);//Adiconando <a>

        

    })
}

function excluir(compra) { //Function para caso o usuário aperte o botão 'excluir'
    LISTA_DE_COMPRAS.splice(compra, 1);
    colocarNoIndex();//Expondo nova lista, sem os itens exluídos.
    pesquisaProduto();
}

function pesquisaProduto() {//Function para pesquisa de produtos da lista

    if (inputBuscador === '') {
        alert("Você precisa digitar um item")
        return false;
    } else {
        let filter = LISTA_DE_COMPRAS.filter((item) => {
        
            if (item.lenght === inputBuscador.value) {
                
            }
        })
    }
    
}