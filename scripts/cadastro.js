let cadastroEmailGlobal;
let cadastroUsuarioGlobal;
let cadastroSenhaGlobal;

const formCadastro = document.querySelector('#cad');

formCadastro.addEventListener('submit', event => {

    event.preventDefault();

    const emailCad = document.querySelector('#email_cad');
    const cadastroEmailLocal = emailCad.value
    cadastroEmailGlobal = cadastroEmailLocal;

    const usuarioCad = document.querySelector('#usuario_cad');
    const cadastroUsuarioLocal = usuarioCad.value;
    cadastroUsuarioGlobal = cadastroUsuarioLocal;

    const senhaCad = document.querySelector('#senha_cad');
    const cadastroSenhaLocal = senhaCad.value
    cadastroSenhaGlobal = cadastroSenhaLocal;

    if (cadastroEmailGlobal == "" || cadastroUsuarioGlobal == "" || cadastroSenhaGlobal == "") {
        alert("É preciso preencher todos os campos abaixo para realizar o cadastro.");
    }
    else {
        setTimeout(function () {
            window.location.href = "inicio.html";
        }, 3000);

        alert(`\r Cadastro realizado com sucesso. Seja bem vindo ${cadastroUsuarioGlobal}. \n Aguarde o redirecionamento.`);
    }
})

//export { cadastroEmailGlobal, cadastroUsuarioGlobal, cadastroSenhaGlobal };