const formCadastro = document.querySelector('#cad');

formCadastro.addEventListener('submit', event =>{

    event.preventDefault();

    const emailCad = document.querySelector('#email_cad');

    const usuarioCad = document.querySelector('#usuario_cad');

    const senhaCad = document.querySelector('#senha_cad');

    if(emailCad.value == "" || usuarioCad.value == "" || senhaCad.value == ""){
        alert("É preciso preencher todos os campos abaixo para realizar o cadastro.");
    }
    else{
        setTimeout(function() {
            window.location.href = "inicio.html";
          }, 3000);
    
        alert(`\r Cadastro realizado com sucesso. Seja bem vindo ${usuarioCad.value}. \n Aguarde o redirecionamento.`);
    }
    

})