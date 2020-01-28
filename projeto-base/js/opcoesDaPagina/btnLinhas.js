(function(){
    const btn = document.querySelector('#btnMudaLayout');
    

    btn.addEventListener('click', function(){
        // mural.classList.toggle('mural--linha');
        // notificar o mural para mudar o seu layout -> mural.js

        // mudarLayout(); esta é a versao quando a funcao foi disponibilizada no window

        // Esta é a versão que referencia uma função do modulo - é melhor.
        moduloMural.mudarLayout()

        if (btn.textContent.trim() === 'Linhas'){
            btn.textContent = 'Blocos';
        } else {
            btn.textContent = 'Linhas';
        }
    })
})();

