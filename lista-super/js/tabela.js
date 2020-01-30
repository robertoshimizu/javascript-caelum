import { sync } from "./sync.js";

// Guardar as referencias da interface
const tabela = document.querySelector('#tabela');
const alertaTabela = document.querySelector('#alertaTabela');

// Retorna as linhas da tabela
export function getLinhas(){
    const trs = tabela.querySelectorAll('tbody tr');
    const linhas = Array.from(trs).map(tr =>{
        return {conteudo: tr.firstElementChild.textContent }  // aqui a funcao esta retornando um objeto json
    });
    return linhas;
}
// console.log(getLinhas());

// Funcao decide se mostra ou esconde a tabela do usuario
mostrarOuEsconder();
export function mostrarOuEsconder(){
    const linhas = getLinhas();
    if (linhas.length > 0){
        // mostra a tabela
        tabela.classList.remove('d-none');
        alertaTabela.classList.add('d-none');
    }
    else {
        // esconde a tabela
        tabela.classList.add('d-none');
        alertaTabela.classList.remove('d-none');
    }
}

// Cria novas linhas na tabela
export function adicionarLinha(conteudo){
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${conteudo}</td>
        <td>
            <button class='btn btn-danger btn-remover'>
                <i class='fas fa-trash'></i>
            </button>
        </td>
    `;
    tabela.querySelector('tbody').append(tr);
    mostrarOuEsconder();
    sync();
}

// Exclusao de items da tabela using EVENT DELEGATION
tabela.addEventListener('click', event => {
    if (event.target.classList.contains('btn-remover')){
        event.target.parentElement.parentElement.remove();
        mostrarOuEsconder();
        sync();
    }
})