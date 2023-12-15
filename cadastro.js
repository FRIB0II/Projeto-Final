// Seleciona o formulário usando seu ID
var cadastro = document.getElementById('cad');

// Define o atributo 'action'
cadastro.action = "127.0.0.1:5500/confirmacao.html";

// Define o atributo 'method'
cadastro.method = "post";

const usuario = document.querySelector('#usuario');

const outro = usuario.value;
console.log(outro);