(() => {
    $('#busca').on('input', function(){
        let termo = $(this).val().trim();

        if (termo.length > 0){
            // filtra a exibicao dos cartoes
            $('.cartao').hide().filter(function(){
                return $(this).find('.cartao-conteudo').text().match(new RegExp(termo, 'i'));
            }).show();
        }
        else {
            // mostra todos os cartoes de novo
        }
    })
})();