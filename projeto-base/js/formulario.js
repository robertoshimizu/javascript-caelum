(() => {
    const formulario = document.querySelector('.formNovoCartao');

    formulario.addEventListener('submit', event => {
        event.preventDefault();
        const caixatexto = formulario.querySelector('textarea');
        if (caixatexto.value.trim() === ''){
            // mostra mensagem de erro
            
            moduloNotificacao.notificar('Favor Preencher Formulario');
        }
        else {
            // cria um novo cartao

        }

    });
})();