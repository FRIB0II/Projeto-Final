// import { cadastroUsuarioGlobal, cadastroSenhaGlobal } from "./cadastro.js";

const formLogin = document.querySelector('#login');

formLogin.addEventListener('submit', event => {

    event.preventDefault();

    const usuarioLog = document.querySelector('#usuario_log');

    const senhaLog = document.querySelector('#senha_log');

    if (usuarioLog.value == "" || senhaLog.value == "") {
        alert("É preciso preencher todos os campos abaixo para realizar o login.");
    }
    else {
        setTimeout(function () {
            window.location.href = "inicio.html";
        }, 3000);

        alert(`\r Cadastro realizado com sucesso. Seja bem vindo ${usuarioLog.value}. \n Aguarde o redirecionamento.`);
    }
    /*else if (usuarioLog == cadastroUsuarioGlobal && senhaLog == cadastroSenhaGlobal) {
        setTimeout(function () {
            window.location.href = "inicio.html";
        }, 3000);

        alert(`\r Cadastro realizado com sucesso. Seja bem vindo ${usuarioLog.value}. \n Aguarde o redirecionamento.`);
    }/*
    /*else {
        alert("Os dados estão incorretos.")
    }*/

})