const formLogin = document.querySelector('#login');

formLogin.addEventListener('submit', event =>{
    
    event.preventDefault();

    const usuarioLog = document.querySelector('#usuario_log');
    console.log(usuarioLog.value)

    const senhaLog = document.querySelector('#senha_log');
    console.log(senhaLog.value)

    if(usuarioLog.value == "" || senhaLog.value == ""){
        alert("É preciso preencher todos os campos abaixo para realizar o login.");
    }
    else{
        setTimeout(function() {
            window.location.href = "inicio.html";
          }, 3000);
    
        alert(`\r Cadastro realizado com sucesso. Seja bem vindo ${usuarioLog.value}. \n Aguarde o redirecionamento.`);
    }

})