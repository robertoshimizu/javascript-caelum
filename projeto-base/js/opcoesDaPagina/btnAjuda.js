(function(){
    const btn = document.querySelector('#btnAjuda');
    btn.addEventListener('click', function(){
        if (btn.textContent.trim() === 'Linhas'){
            btn.textContent = 'Blocos';
        } else {
            btn.textContent = 'Linhas';
        }
    })
})();