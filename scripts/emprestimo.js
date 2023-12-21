// import { cadastroEmailGlobal, cadastroSenhaGlobal } from "./cadastro.js";

let emprestimoRealizado = false;

document.addEventListener('DOMContentLoaded', function () {
    const fomrEmprestimo = document.querySelector('#emprestimo');

    fomrEmprestimo.addEventListener('submit', event => {

        event.preventDefault();

        const emailEmpr = document.querySelector('#email_emprestimo');

        const senhaEmpr = document.querySelector('#senha_emprestimo');

        if (emailEmpr.value == "" || senhaEmpr.value == "") {
            alert("É preciso preencher todos os campos abaixo para realizar o login.");
        }
        else if (emprestimoRealizado == true) {
            alert("Você já fez o empréstimo deste produto.")
        }
        else {
            // Cria um novo objeto Date com a data e hora atuais
            let data = new Date();

            // Adiciona duas semanas
            data.setDate(data.getDate() + 14);

            // Formata a data
            let dia = String(data.getDate()).padStart(2, '0');
            let mes = String(data.getMonth() + 1).padStart(2, '0');
            let ano = data.getFullYear();
            let dataFutura = dia + '/' + mes + '/' + ano;

            alert(`Empréstimo realizado com sucesso. A data de devolução será: ${dataFutura}`);
            emprestimoRealizado = true;
        }
        /*else if (emailEmpr.value == cadastroEmailGlobal && senhaEmpr.value == cadastroSenhaGlobal) {
            // Cria um novo objeto Date com a data e hora atuais
            let data = new Date();

            // Adiciona duas semanas
            data.setDate(data.getDate() + 14);

            // Formata a data
            let dia = String(data.getDate()).padStart(2, '0');
            let mes = String(data.getMonth() + 1).padStart(2, '0');
            let ano = data.getFullYear();
            let dataFutura = dia + '/' + mes + '/' + ano;

            alert(`Empréstimo realizado com sucesso. A data de devolução será: ${dataFutura}`);
            emprestimoRealizado = true;
        }*/
    })
});