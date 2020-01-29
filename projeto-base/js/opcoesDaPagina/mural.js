const moduloMural = (()=>{
    
    const mural = document.querySelector('.mural');

    // Exclusão de cartões no mural

    mural.addEventListener('click', event =>{
        // se o item clicado foi o botão de remoção de cartões ...
        if (event.target.classList.contains('opcoesDoCartao-remove')){
            if (confirm('Are you sure')){
                const cartao = event.target.parentElement.parentElement;
                cartao.classList.add('cartao--some');

                // efeito de transicção apara o cartao ser deletado
                cartao.addEventListener('transitioned', ()=>cartao.remove())
            }
        }
    });

    // Gerencia a troca de cor do cartão
    mural.addEventListener('change',event => {
        // se foi o Radio que disparou o evento "change"...
        if (event.target.classList.contains('opcoesDoCartao-radioTipo')){
            const cartao = event.target.parentElement.parentElement;
            cartao.style.backgroundColor = event.target.value;

        }
    });

    // Trocar a cor via teclado

    mural.addEventListener('keypress',event => {
        let isLabel = event.target.classList.contains('opcoesDoCartao-tipo');
        if (isLabel && (event.key === 'Enter' || event.key === ' ')){
            event.target.click();
        }
    })


    // altera o layout do mural

    function mudarLayout(){
        mural.classList.toggle('mural--linha')
    }

    // adiciona um novo cartao no mural
    // pega a informacao do formulario e cria um novo cartao

    let numeroDoCartao = 0; // para alimentar o id do cartao

    function adicionarCartao(conteudo, cor=''){
        
        numeroDoCartao++;

        // construir novo elemento em memoria
        const cartao = document.createElement('article');
        // adicionar a classe cartao
        cartao.classList.add('cartao');
        // para elemento ser acessado tambem via teclado
        cartao.tabIndex = 0;
        // adiciona a cor 
        cartao.style.backgroundColor = cor;
        // adicionar conteudo html
        cartao.innerHTML = `
        <div class="opcoesDoCartao">
          <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
          </button>

          <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
          <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
          </label>

          <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
          <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
          </label>

          <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
          <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
          </label>

          <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
          <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
          </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
        `;

        mural.append(cartao);


    }



    // window.mudarLayout = mudarLayout;
    // versao que eu modularizo e referencio a funcao. Torno ela publica
    // quando abaixo eu ponho no return - Como se fosse uma classe publica do Java
    return{
        mudarLayout,
        adicionarCartao
    }
    
})();
