import { adicionarLinha } from './tabela.js'


// Guardar as referencias da view

const form = document.querySelector('#formAdicionarItem');
const alertaForm = document.querySelector('#alertaFormulario');
const campoTexto = document.querySelector('#nomeItem');

form.addEventListener('submit', event => {
    event.preventDefault();
    if (campoTexto.value.trim() === ''){
        alertaForm.classList.remove('d-none');
        campoTexto.value='';
        campoTexto.focus();
    }
    else {
        alertaForm.classList.add('d-none');
        let conteudo = campoTexto.value;
        campoTexto.value='';
        // Chamar o modulo tabela para adicionar uma nova linha la
        // passando o conteudo da caixa de texto

        adicionarLinha(conteudo);
    }
})