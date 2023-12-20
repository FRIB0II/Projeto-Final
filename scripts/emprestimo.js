import { cadastroEmailGlobal, cadastroSenhaGlobal } from "./cadastro.js";

const fomrEmprestimo = document.querySelector('#emprestimo');

let emprestimoRealizado = false;

fomrEmprestimo.addEventListener('submit', event => {

    event.preventDefault();

    const emailEmpr = document.querySelector('#email_emprestimo');

    const senhaEmpr = document.querySelector('#senha_emprestimo');

    if (emailEmpr.value == "" || senhaEmpr.value == "") {
        alert("É preciso preencher todos os campos abaixo para realizar o login.");
    }
    else if(emprestimoRealizado == true){
        alert("Você já fez o empréstimo deste produto.")
    }
    else if(emailEmpr == cadastroEmailGlobal && senhaEmpr == cadastroSenhaGlobal){
        // Cria um novo objeto Date com a data e hora atuais
        var data = new Date();

        // Adiciona duas semanas
        data.setDate(data.getDate() + 14);

        // Formata a data
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        var dataFutura = dia + '/' + mes + '/' + ano;

        alert(`Empréstimo realizado com sucesso. A data de devolução será: ${dataFutura}`);
        emprestimoRealizado = true;
    }
})