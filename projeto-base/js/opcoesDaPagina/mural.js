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



    // window.mudarLayout = mudarLayout;


    // versao que eu modularizo e referencio a funcao. Torno ela publica
    // quando abaixo eu ponho no return - Como se fosse uma classe publica do Java
    return{
        mudarLayout
    }
    
})();
