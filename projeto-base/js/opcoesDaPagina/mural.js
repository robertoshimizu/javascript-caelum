const moduloMural = (()=>{
    
    const mural = document.querySelector('.mural');
    const template = document.querySelector('#template-cartao').innerHTML;

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
        // adicionar conteudo html pode ser direto ou atraves de Template
        // Neste caso trazemos o template e substituimos os campos
        // Note que para NUMERO_DO_CARTAO, usamos Regex, para substituir globalmente
        cartao.innerHTML = template.replace('{{CONTEUDO_DO_CARTAO}}',conteudo).replace(/{{NUMERO_DO_CARTAO}}/g, numeroDoCartao);

        mural.append(cartao);
    }

    function getCartoes() {
      const cartoes = mural.querySelectorAll(`.cartao`);
      const listaCartoes = Array.from(cartoes).map(cartao => {
        return{
          conteudo: cartao.querySelector('.cartao-conteudo').textContent,
          cor:cartao.style.backgroundColor
        }
      })
      // console.log(listaCartoes);

      return listaCartoes;
    };

    $.ajax({
      type:'GET',
      url:'https://ceep.herokuapp.com/cartoes/carregar',
      data: { usuario: 'rshimizubr@gmail.com' },
      dataType: 'jsonp'
    })
    .done(dados => {
      console.log(dados);
      const listaCartoes = dados.cartoes;
      listaCartoes.forEach(cartao => {
        moduloMural.adicionarCartao(cartao.conteudo, cartao.cor);
      })
    })
    .fail(erro => {
      moduloNotificacao.notificar('Nao foi possivel carregar seus cartoes salvos :(');
      console.log(erro);
    });



    // window.mudarLayout = mudarLayout;
    // versao que eu modularizo e referencio a funcao. Torno ela publica
    // quando abaixo eu ponho no return - Como se fosse uma classe publica do Java
    return{
        mudarLayout,
        adicionarCartao,
        getCartoes,
        adicionarCartao
    }
    
})();
