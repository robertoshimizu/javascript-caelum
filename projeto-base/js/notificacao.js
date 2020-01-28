const moduloNotificacao = (() => {  
    
    const divMsg = document.createElement('div');
    divMsg.classList.add('formNovoCartao-msg');

    function notificar(msg){
        
        divMsg.textContent = msg;
        document.body.append(divMsg);
        divMsg.addEventListener('animationend',() => divMsg.remove());
    }

    return{
        notificar
    }

})();