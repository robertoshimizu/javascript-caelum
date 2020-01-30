import { adicionarLinha, mostrarOuEsconder, getLinhas} from './tabela.js'

// INSTRUÇÃO 1

    const badge = document.querySelector('.badge-info');


    const user = 'rshimizu';
    const url = 'https://caelum.jhonatanjacinto.dev/wd47/api/sync.php';
    
    const getItens = async () => {
        const res = await fetch(`${url}?acao=get-itens&user=${user}`);
        const json = await res.json();
        if (json.status == 1) {
            // INSTRUÇÃO 3
            json.itens.forEach( item => {
                adicionarLinha(item.conteudo);
                mostrarOuEsconder();
            });
            // INSTRUÇÃO 3
        }
    }

    getItens(); // INSTRUÇÃO 8

    export const sync = async () => {
        // INSTRUÇÃO 4
        badge.classList.remove('d-none');
        // INSTRUÇÃO 5
        const linhas = getLinhas();
        let params = `acao=salvar-itens&itens=${JSON.stringify(linhas)}&user=${user}`;

        const configReq = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/x-www-form-urlencoded',
            },
            body: params,
        }

        const res = await fetch(url, configReq);
        const json = await res.json();
        // INSTRUÇÃO 6
        if (json.status === 1){
            console.log('Operacao realizada com sucesso !')
        }

        // INSTRUÇÃO 7
        badge.classList.add('d-none');
    };


    
