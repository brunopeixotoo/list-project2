
let inputElement = document.querySelector("#shop input");//Fazendo relação com as tags
let buttonElement = document.querySelector("#shop button");
let listElement = document.querySelector("#shop ul");
let inputBuscador = document.querySelector("#buscador input");
let divBuscador = document.querySelector("#buscador div");
let buttonBuscador = document.querySelector("#buscador button");



let LISTA_DE_COMPRAS = JSON.parse(localStorage.getItem("@cestaCompras")) || [];

function adicionarCompras() { //Function para adição de compras
    if (inputElement.value === '') {
        alert("Você deve preencher o espaço!");
        return false;
    } else {
        let compras = inputElement.value;//Valor digitado no input do index
        LISTA_DE_COMPRAS.push(compras);//Adicionando na array
        inputElement.value = ''//limpando campo do input

        colocarNoIndex();
        salvarDados();
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
    salvarDados();//Salvando
}

function salvarDados() {//Salvando no LocalStorage
    localStorage.setItem("@cestaCompras", JSON.stringify(LISTA_DE_COMPRAS));
}

function pesquisaProduto() {//Function para pesquisa de produtos da lista

    if (inputBuscador.value === '') {//Verificadno o valor do input
        alert("Você precisa digitar um item");
        return false;
    } else {
        let encontrado = false;
       
        let filtro = LISTA_DE_COMPRAS.forEach((item) => {//Percorrendo a lista(item por item)
            if (item === inputBuscador.value) {
                encontrado = true;

                let paragrafElement = document.createElement('p');//Criando elementos html
                let itemList = document.createTextNode(`O produto ${inputBuscador.value} foi encontrado na sua cesta!`);

                paragrafElement.appendChild(itemList);//Adionando text no <p>
                divBuscador.appendChild(paragrafElement);//Adionando na <div>

                inputBuscador.value = '';
               
            }
        })
        if (!encontrado){

                let paragrafElement = document.createElement('p');//Criando elementos html
                let itemList = document.createTextNode(`Não foi encontrado o produto: ${inputBuscador.value}`);

                paragrafElement.appendChild(itemList);//Adionando text no <p>
                divBuscador.appendChild(paragrafElement);//Adionando na <div>

                inputBuscador.value = '';
        }
    }
}
 
buttonBuscador.onclick = pesquisaProduto;//Ativando Button do buscador

