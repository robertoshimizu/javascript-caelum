// (function(){
//     const btn = document.querySelector('#btnAjuda');
//     btn.addEventListener('click', function(){
//         if (btn.textContent.trim() === 'Linhas'){
//             btn.textContent = 'Blocos';
//         } else {
//             btn.textContent = 'Linhas';
//         }
//     })
// })();


(function(){
    const btn = document.querySelector('#btnAjuda');
    btn.addEventListener('click', async function(){
        let url = 'https://ceep.herokuapp.com/cartoes/instrucoes';
        const resposta = await fetch(url);
        const dados = await resposta.json(resposta);
        const lista = dados.instrucoes;
        lista.forEach(msgAjuda =>{
            // alert(msgAjuda.conteudo);
            moduloMural.adicionarCartao(msgAjuda.conteudo, msgAjuda.cor);
        });
    })
})();