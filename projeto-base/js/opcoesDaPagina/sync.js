const moduloSync = (() => {

    const btnSync = document.querySelector('#btnSync');
    btnSync.addEventListener('click', async () => {
        btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');
        btnSync.disabled = true;

        const infoUsuario = {
            usuario: "rshimizubr@gmail.com",
            cartoes:moduloMural.getCartoes()
        }

        let url = 'https://ceep.herokuapp.com/cartoes/salvar';
        const configuracao = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(infoUsuario)
        }
        try {            
            const resposta = await fetch(url,configuracao);
            const dados = await resposta.json();
            console.log(dados);
            moduloNotificacao.notificar(`${dados.quantidade} cartao(oes) foram salvos para o usuario ${dados.usuario}`);
        }
        catch(erro){
            moduloNotificacao.notificar('Nao foi possivel salvar seus cartoes!');
            console.log(erro);
        }

        btnSync.disabed = false;
        btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');

    });

    return {
        sincronizar: () => {
            btnSync.click();
        }
    }
})();